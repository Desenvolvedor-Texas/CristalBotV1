const fs = require("fs-extra");
const path = require("path");
const { tmpdir } = require("os");
const Crypto = require("crypto");
const ff = require("fluent-ffmpeg");
const webp = require("node-webpmux");

function tmpFile(ext) {
  return path.join(
    tmpdir(),
    `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.${ext}`
  );
}

/* =========================
   IMAGE -> WEBP (BUFFER)
========================= */
async function imageToWebp2(media) {
  const input = tmpFile("jpg");
  const output = tmpFile("webp");

  await fs.writeFile(input, media);

  await new Promise((resolve, reject) => {
    ff(input)
      .on("error", reject)
      .on("end", resolve)
      .addOutputOptions([
        "-vcodec", "libwebp",
        "-vf", "scale=512:512:force_original_aspect_ratio=decrease,fps=15",
        "-lossless", "1",
        "-preset", "default",
        "-loop", "0",
        "-an",
        "-vsync", "0"
      ])
      .toFormat("webp")
      .save(output)
  })

  const buffer = await fs.readFile(output)
  await fs.unlink(input)
  await fs.unlink(output)
  return buffer
}

/* =========================
   VIDEO -> WEBP (BUFFER)
========================= */
async function videoToWebp2(media) {
  const input = tmpFile("mp4")
  const output = tmpFile("webp")

  await fs.writeFile(input, media)

  await new Promise((resolve, reject) => {
    ff(input)
      .on("error", reject)
      .on("end", resolve)
      .addOutputOptions([
        "-vcodec", "libwebp",
        "-vf", "scale=512:512:force_original_aspect_ratio=decrease,fps=12",
        "-loop", "0",
        "-an",
        "-vsync", "0",
        "-t", "8"
      ])
      .toFormat("webp")
      .save(output)
  })

  const buffer = await fs.readFile(output)
  await fs.unlink(input)
  await fs.unlink(output)
  return buffer
}

/* =========================
   WRITE EXIF IMG
========================= */
async function writeExifImg2(media, metadata) {
  const webpBuffer = await imageToWebp2(media)
  return writeExifBuffer(webpBuffer, metadata)
}

/* =========================
   WRITE EXIF VIDEO
========================= */
async function writeExifVid2(media, metadata) {
  const webpBuffer = await videoToWebp2(media)
  return writeExifBuffer(webpBuffer, metadata)
}

/* =========================
   WRITE EXIF (BUFFER CORE)
========================= */
async function writeExifBuffer(mediaBuffer, metadata = {}) {
  const input = tmpFile("webp")
  const output = tmpFile("webp")

  await fs.writeFile(input, mediaBuffer)

  if (!metadata.packname && !metadata.author) {
    const buff = await fs.readFile(input)
    await fs.unlink(input)
    return buff
  }

  const img = new webp.Image()
  await img.load(input)

  const json = {
    "sticker-pack-id": "BOT GUGU MD",
    "sticker-pack-name": metadata.packname || "",
    "sticker-pack-publisher": metadata.author || "",
    "emojis": metadata.categories || [""]
  }

  const exifAttr = Buffer.from([
    0x49, 0x49, 0x2A, 0x00,
    0x08, 0x00, 0x00, 0x00,
    0x01, 0x00, 0x41, 0x57,
    0x07, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x16, 0x00,
    0x00, 0x00
  ])

  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
  const exif = Buffer.concat([exifAttr, jsonBuff])
  exif.writeUIntLE(jsonBuff.length, 14, 4)

  img.exif = exif
  await img.save(output)

  const finalBuffer = await fs.readFile(output)
  await fs.unlink(input)
  await fs.unlink(output)

  return finalBuffer
}

/* =========================
   WRITE EXIF AUTO (ORIGINAL)
========================= */
async function writeExif2(media, metadata) {
  let buffer

  if (/webp/.test(media.mimetype)) {
    buffer = media.data
  } else if (/image/.test(media.mimetype)) {
    buffer = await imageToWebp2(media.data)
  } else if (/video/.test(media.mimetype)) {
    buffer = await videoToWebp2(media.data)
  } else {
    buffer = Buffer.alloc(0)
  }

  return writeExifBuffer(buffer, metadata)
}

module.exports = {
  imageToWebp2,
  videoToWebp2,
  writeExifImg2,
  writeExifVid2,
  writeExif2
}