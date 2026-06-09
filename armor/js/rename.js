const fs = require("fs-extra")
const {
  imageToWebp2,
  videoToWebp2,
  writeExifImg2,
  writeExifVid2
} = require("./exif")

const { getBuffer } = require("../../armor/js/funcoes")

async function resolveMedia(path) {
  if (Buffer.isBuffer(path)) return path
  if (/^data:.*?\/.*?;base64,/i.test(path))
    return Buffer.from(path.split(",")[1], "base64")
  if (/^https?:\/\//.test(path))
    return await getBuffer(path)
  if (fs.existsSync(path))
    return await fs.readFile(path)
  return Buffer.alloc(0)
}

const sendImageAsSticker2 = async (sock, jid, path, quoted, options = {}) => {
  const media = await resolveMedia(path)

  let buffer = options.packname || options.author
    ? await writeExifImg2(media, options)
    : await imageToWebp2(media)

  if (!Buffer.isBuffer(buffer)) {
    throw new Error("Sticker não é Buffer")
  }

  await sock.sendMessage(jid, { sticker: buffer }, { quoted })
  return buffer
}

const sendVideoAsSticker2 = async (sock, jid, path, quoted, options = {}) => {
  const media = await resolveMedia(path)

  let buffer = options.packname || options.author
    ? await writeExifVid2(media, options)
    : await videoToWebp2(media)

  if (!Buffer.isBuffer(buffer)) {
    throw new Error("Sticker não é Buffer")
  }

  await sock.sendMessage(jid, { sticker: buffer }, { quoted })
  return buffer
}

module.exports = {
  sendImageAsSticker2,
  sendVideoAsSticker2
}