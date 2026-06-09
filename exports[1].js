//BIBLIOTECAS
const { downloadContentFromMessage, downloadMediaMessage, prepareWAMessageMedia, jidNormalizedUser, makeWASocket, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, makeInMemoryStore, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap, downloadAndSaveMediaMessage, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore, PHONENUMBER_MCC, Browser, getContentType, INativeFlowMessage, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage
} = require("@whiskeysockets/baileys");
const path = require("path");
const fetch = require("node-fetch");
const colors = require('colors');
const moment = require("moment-timezone");
const { Boom } = require('@hapi/boom');
const fs = require('fs-extra');
const axios = require('axios');
const infoSystem = require('os');
const os = require('os');
const linkfy = require("linkifyjs");
const util = require('util');
const { exec, spawn, execSync } = require('child_process');
const ytSearch = require('yt-search');
const ms = require('ms');
const QRCode = require('qrcode');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');

//ARMOR
const { saveUsuForcaGame, usuarios_forca, addUsuarioForca, rmUsuarioForca, addAcertoUsuForca, addErroUsuForca, existIdForcaGameInUsu, registrarIdNaForca, addVitoriaForca, addDerrotaForca, getUsuDatabaseForca, saveForcaWord, forcaWord, sendPathForcaGame, existSomeWordForcaGame, existThemeWordForcaGame, getThemeWordForcaGame, getRandomWordForcaGame, rgWordForcaGame, rmThemeForcaGame, rmWordForcaGame, isForcaGame, saveForcaGame, startForcaGame, resetForcaGame, restartForcaGame, getJSONforcaGame, letraFoiJogada, isTrueLetter, isLetterFinishForcaGame, registrarLetraForca, getWordSplitForcaGame, getErrEmojiForcaGame, sendTextForcaGame, jogarLetraForcaGame } = require("./armor/forca/forca.js");
const {addVIP, isVIP, getExpire, removeVIP } = require("./armor/js/vip");
const { banner2, banner3, getBuffer, fetchJson, getGroupAdmins, getMembros, donobotcristal, cristalbot, channelcristal, upload } = require("./armor/js/funcoes.js");
const { msg, Cmd} = require("./armor/js/mensagens");
const { imageToWebp2, videoToWebp2, writeExifImg2, writeExifVid2, writeExif2 } = require('./armor/js/exif');
const { palavrasc } = require('./armor/js/conselhos.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./armor/js/rename.js');
const verificaMutados = require("./armor/js/verificaMutados");
const { LANGUAGES, MAX_CHARS, GOOGLE_TTS_URL, getArgs, Text2Speech } = require("./armor/js/gtts.js");
const { tabela } = require('./armor/js/tabela');
const verificaAluguel = require("./armor/aluguel/verificaAluguel")

//DATAB
const CONSELHO = require("./datab/conselhos.json");
const mutadosPath = path.join(__dirname, "../datab/mutados.json");
const advertPath = path.resolve('./datab/advertencia.json');
const cantadas = './datab/cantadas.json'; 
const fatos = './datab/fatos.json'; 
const contadormsg = JSON.parse(fs.readFileSync('./datab/contadormsg.json'));
const simihPath = path.join(__dirname, './datab/simih.json');

//MENU
const { menu } = require("./menu/menuCaption");
const { menus } = require("./menu/menus");

//DONO
const { dono1, dono2, dono3, dono4, dono5, dono6 } = require("./dono/nescessário.json");
const Config2 = JSON.parse(fs.readFileSync("./dono/nescessário.json"));
const Config = JSON.parse(fs.readFileSync("./dono/dono.json"));
const { beijocmd, tapacmd } = require("./dono/links_img.json");
const links = JSON.parse(fs.readFileSync(`./dono/links_img.json`));

//ASSETS
const audiolist = path.join(__dirname, './assets/audios');
const FotoMenu = fs.readFileSync("./assets/menu/menu.jpg");

const simihJson = JSON.parse(fs.readFileSync(simihPath));
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

//SIMILARIDADEZ
function SimilarComandos(word1, word2) {
function generateNGrams(word, n) {
const nGrams = [];
for (let i = 0; i < word.length - n + 1; i++) {
nGrams.push(word.slice(i, i + n));
}
return nGrams;
}
 
const nGrams1 = generateNGrams(word1, 2);
const nGrams2 = generateNGrams(word2, 2);
const commonNGrams = nGrams1.filter(nGram => nGrams2.includes(nGram));
const similarity = Math.round((2 * commonNGrams.length) / (nGrams1.length + nGrams2.length) * 100);
return similarity;
}
const ListaComandos = (targetWord) => {
const fileContent = fs.readFileSync("cristal.js", "utf8");
const commandsRegex = /case\s+['"](.+?)['"]/g;
let mostSimilarCommand = "";
let highestSimilarity = -1;
let match;
  
while ((match = commandsRegex.exec(fileContent)) !== null) {
const extractedCommand = match[1];
const similarity = SimilarComandos(targetWord, extractedCommand);
if (similarity > highestSimilarity) {
highestSimilarity = similarity;
mostSimilarCommand = extractedCommand;
}
 }
return {
command: mostSimilarCommand, 
similarity: highestSimilarity
};
};

function kyun(totalSeconds) {
  function pad(s) {
    return (s < 10 ? '0' : '') + s;
  }

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return `${pad(hours)} horas, ${pad(minutes)} minutos e ${pad(seconds)} segundos.`;
}

function aceitar(id, usu) {
sock.groupRequestParticipantsUpdate(id, [usu], "approve")}

function recusar(id, usu) {
sock.groupRequestParticipantsUpdate(id, [usu], "reject")}

function saveJSON(inter, caminho){
fs.writeFileSync(caminho, JSON.stringify(inter, null, 2))}

const isJsonIncludes = (json, value) => {
if(JSON.stringify(json).includes(value)) return true;
return false;
};


const iniMai = (texto) => {
  txt = texto.toUpperCase().slice(0, 1) + texto.slice(1);
  return txt;
};

const contar = (frase, letraProcurada) => {
  total = 0;
  for(i = 0; i < frase.length; i++) {
    if(letraProcurada == frase[i]) total += 1;
  }
  return total;
};

const divisores = (base) => {
  nmr = Number(base);
  caixa = [];
  for(a = 0; a < nmr; a++) {
    for(b = 0; b < nmr; b++) {
      if(((a + 1) * (b + 1)) == nmr) caixa.push(a + 1);
    }
  }
  return caixa
}

const raiz = (base) => {
  nmr = Number(base)
  meta = nmr / 2
  total = 0
  for(i = 1; i < (meta + 1); i++) {
    if((i*i) == nmr) total += 1
  }
  if(total > 0) return true
  return false
}

const findRaiz = (base) => {
  nmr = Number(base)
  if(raiz(nmr)) {
    meta = nmr / 2
    caixa = []
    for(i = 1; i < (meta + 1); i++) {
      if((i*i) == nmr) caixa.push(i)
    }
    return caixa[0]
  } else return "O número não tem raiz"
}

let file2 = require.resolve(__filename)
fs.watchFile(file2, () => {
fs.unwatchFile(file2)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file2]
require(file2)
})

const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

module.exports = { 
fetchJson, colors, hora, data, banner2, banner3, Boom, getBuffer, fs, SimilarComandos, ListaComandos, getGroupAdmins, getMembros, moment, msg, axios, kyun, infoSystem, os, menu, menus, ytSearch, FotoMenu, Config, Config2, linkfy, util, exec, donobotcristal, cristalbot, sleep, channelcristal, Cmd, ANT_LTR_MD_EMJ, dono1, dono2, dono3, dono4, dono5, dono6, sendImageAsSticker2, sendVideoAsSticker2, getFileBuffer, addVIP, isVIP, getExpire, removeVIP, beijocmd, upload, palavrasc, downloadContentFromMessage, downloadMediaMessage, prepareWAMessageMedia, jidNormalizedUser, makeWASocket, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, makeInMemoryStore, downloadAndSaveMediaMessage, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore, PHONENUMBER_MCC, Browser, getContentType, INativeFlowMessage, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, findRaiz, raiz, divisores, imageToWebp2, videoToWebp2, writeExifImg2, writeExifVid2, writeExif2, saveUsuForcaGame, usuarios_forca, addUsuarioForca, rmUsuarioForca, addAcertoUsuForca, addErroUsuForca, existIdForcaGameInUsu, registrarIdNaForca, addVitoriaForca, addDerrotaForca, getUsuDatabaseForca, saveForcaWord, forcaWord, sendPathForcaGame, existSomeWordForcaGame, existThemeWordForcaGame, getThemeWordForcaGame, getRandomWordForcaGame, rgWordForcaGame, rmThemeForcaGame, rmWordForcaGame, isForcaGame, saveForcaGame, startForcaGame, resetForcaGame, restartForcaGame, getJSONforcaGame, letraFoiJogada, isTrueLetter, isLetterFinishForcaGame, registrarLetraForca, getWordSplitForcaGame, getErrEmojiForcaGame, sendTextForcaGame, jogarLetraForcaGame, contar, iniMai, isJsonIncludes, links, contadormsg, saveJSON, LANGUAGES, MAX_CHARS, GOOGLE_TTS_URL, getArgs, Text2Speech, QRCode, recusar, aceitar, audiolist, simihJson, simihPath, fatos, cantadas, tabela, verificaAluguel };