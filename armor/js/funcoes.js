
const colors = require("colors");
const cfonts = require('cfonts')
const axios = require('axios')
const fetch = require('node-fetch');
const FormData = require('form-data');
const { fileTypeFromBuffer } = require("file-type")

function normalizeJid(jid) { 
  if (!jid) return null
  let id = jid.replace(/:.*(?=@)/, '')
  if (!id.endsWith('@s.whatsapp.net')) {
    id += '@s.whatsapp.net'
  }
  return id
}

function getGroupAdmins(participants) { 
  return participants
    .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
    .map(p => normalizeJid(p.phoneNumber))
}

function getMembros(participants) { 
  return participants
    .filter(p => !p.admin)
    .map(p => normalizeJid(p.phoneNumber))
}

const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
	'DNT': 1,
	'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
}


//FUNÇÃO DE GERAR LINK
async function upload(midia) {
  try {
    const type = await fileTypeFromBuffer(midia);
    const ext = type?.ext || "bin";
    const mime = type?.mime || "application/octet-stream";

    const form = new FormData();
    form.append("reqtype", "fileupload");
    form.append("fileToUpload", midia, {
      filename: `jpzinh.${ext}`,
      contentType: mime
    });

    const response = await fetch("https://catbox.moe/user/api.php", {
      method: "POST",
      body: form,
      headers: form.getHeaders()
    });

    const text = await response.text();
    return text.trim();
  } catch (err) {
    console.error(" Erro ao enviar para Catbox:", err);
    return null;
  }
}


const channelcristal = {
  isForwarded: true,
  forwardingScore: 999,
  forwardedNewsletterMessageInfo: {
    newsletterJid: '120363417447671033@newsletter',
    newsletterName: '≪ 𝐁𝐋𝐔𝐄𝐑𝐈𝐒𝐄 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘 ≫ 【 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 】'
  }
}
async function fetchJson(url, options = {}) {
try {
const res = await fetch(url, options);
const json = await res.json();
return json;
} catch (err) {
throw err;
}
}


const themes = [
  ['red', 'white', 'green', 'gray', 'black'],
  ['cyan', 'white', 'blue', 'gray', 'black'],
  ['magenta', 'white', 'red', 'gray', 'black'],
  ['white', 'gray', 'red', 'black', 'cyan']
]

const theme = themes[Math.floor(Math.random() * themes.length)]
const cor1 = theme[0]
const cor2 = theme[1]
const cor3 = theme[2]
const cor4 = theme[3]
const cor5 = theme[4]

const banner2 = cfonts.render(
  'CRISTAL\nBOT\nV1',
  {
    font: 'console',
    align: 'center',
    gradient: [cor1, cor3],
    colors: [cor2, cor5],
    lineHeight: 1
  }
)

const banner3 = cfonts.render(
  'CRISTAL BOT',
  {
    font: 'slick',
    align: 'center',
    colors: [cor1, cor2, cor3, cor4],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0',
    gradient: [cor3, cor1],
    independentGradient: false,
    transitionGradient: true,
    env: 'node'
  }
)

const donobotcristal = "17423860373@s.whatsapp.net";
const cristalbot = "639050935963@s.whtsapp.net";

module.exports = { banner2, banner3, fetchJson, getBuffer, getGroupAdmins, getMembros, donobotcristal, cristalbot, channelcristal, upload };