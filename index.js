const path = require("path");
const baileys = require("@whiskeysockets/baileys");
const ytSearch = require("././armor/js/yt-search");
const chalk = require('chalk');
const { version } = require("./package");
const {
  downloadContentFromMessage
} = require('@whiskeysockets/baileys');
//========EXPORTS=======//
const { 
fetchJson, colors, hora, data, getBuffer, fs, SimilarComandos, ListaComandos, getGroupAdmins,getMembros, moment, msg, axios, kyun, infoSystem, os, menu, menus, FotoMenu, Config, Config2, linkfy, util, exec, donobotcristal, cristalbot, sleep, channelcristal, Cmd, verificaMutados, METADINHAS, ttksearch, ANT_LTR_MD_EMJ, sendImageAsSticker2, sendVideoAsSticker2, getFileBuffer, writeExifImg2, jidNormalizedUser, addVIP, isVIP, getExpire, removeVIP, YoutubeDl, beijocmd, upload, prepareWAMessageMedia, downloadMediaMessage, makeWASocket, DisconnectReason, palavrasc, useMultiFileAuthState, fetchLatestBaileysVersion, downloadAndSaveMediaMessage, makeInMemoryStore, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore, PHONENUMBER_MCC, Browser, getContentType, INativeFlowMessage, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, findRaiz, raiz, divisores, CONSELHO, mutadosPath, advertPath, imageToWebp2, videoToWebp2, writeExif2, contadormsg, isJsonIncludes, saveJSON, tabela, links, LANGUAGES, MAX_CHARS, GOOGLE_TTS_URL, getArgs, Text2Speech, QRCode, recusar, aceitar, audiolist, simihJson, simihPath, cantadas, fatos, addUsuarioForca, verificaAluguel } = require("./exports");

async function iniciarBot() {
	
module.exports = async function (cristal, upsert) {
  try {
const info = upsert?.messages && upsert?.messages[0];

const from = info?.key?.remoteJid;
const isGroup = from.endsWith('@g.us');
const isStatus = from.endsWith('@broadcast');
const pushname = info?.pushName || await cristal?.user?.name || "Usuário";
const content = JSON.stringify(info.message);
const quoted = info.quoted ? info.quoted : info;
const sender = jidNormalizedUser(isGroup ? info?.key?.participantAlt || 
await cristal?.user?.id || 
info?.key?.participant : info?.key?.remoteJidAlt || info?.key?.remoteJid
);

const { NumberDono, prefix, NickDono, NomeBot, channelnk, SITE_BRONXY, API_KEY_BRONXYS, SHIZUKU_SITE, API_KEY_CRISTAL, API_KEY_ZEROTWO, zerosite} = Config;
const { dono1, dono2, dono3, dono4, dono5, dono6 , isSoDono } = Config2;
const isAntiPv = Config2.antipv;
const isAntiPv2 = Config2.antipv2;
const isAntiPv3 = Config2.antipv3;
const isVerificado = Config2.verificado;
const BotOff = Config2.botoff;
const isVisualizar = Config2.visualizar;
const isButtons = Config2.buttons;
const isAnticall = Config2.anticall;
const botNumber = jidNormalizedUser(await cristal.user.id || await cristal.user.lid);
const Numero1 = jidNormalizedUser(`${dono1}@s.whatsapp.net`);
const Numero2 = jidNormalizedUser(`${dono2}@s.whatsapp.net`);
const Numero3 = jidNormalizedUser(`${dono3}@s.whatsapp.net`);
const Numero4 = jidNormalizedUser(`${dono4}@s.whatsapp.net`);
const Numero5 = jidNormalizedUser(`${dono5}@s.whatsapp.net`);
const Numero6 = jidNormalizedUser(`${dono6}@s.whatsapp.net`);
const MeuNumero = jidNormalizedUser(`${NumberDono}@s.whatsapp.net`);
const IsCreator = donobotcristal?.includes(sender);
const SoCriador = cristalbot?.includes(sender);
const SoBot = botNumber?.includes(sender);
const So_Dono = MeuNumero?.includes(sender) || 
Numero1?.includes(sender) ||
Numero2?.includes(sender) || 
Numero3?.includes(sender) ||
Numero4?.includes(sender) ||
Numero5?.includes(sender) ||
Numero6?.includes(sender) ||
SoBot || 
SoCriador ||
IsCreator;

const type = baileys.getContentType(info?.message);
let body =
  info?.message?.conversation ||
  info?.message?.extendedTextMessage?.text ||
  info?.message?.imageMessage?.caption ||
  info?.message?.videoMessage?.caption ||
  info?.message?.documentWithCaptionMessage?.message?.documentMessage?.caption ||
  info?.message?.buttonsResponseMessage?.selectedButtonId ||
  info?.message?.templateButtonReplyMessage?.selectedId ||
  info?.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
  info?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson ||
  info?.text ||
  "";
  
if (info?.message?.listResponseMessage) {
body = info?.message?.listResponseMessage?.singleSelectReply?.selectedRowId;
}

if (info?.message?.interactiveResponseMessage) {
try {const botn = JSON.parse(info?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson);
if (botn?.id) body = botn?.id;
} catch {}
}

const isImage = type == 'imageMessage';
const isVideo = type == 'videoMessage';
const isVisuU2 = type == 'viewOnceMessageV2';
const isAudio = type == 'audioMessage';
const isSticker = type == 'stickerMessage';
const isContact = type == 'contactMessage';
const isLocation = type == 'locationMessage';
const isProduct = type == 'productMessage';
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2");
typeMessage = body.substr(0, 50).replace(/\n/g, '');
if(isImage) typeMessage = "Image";
else if(isVideo) typeMessage = "Video";
else if(isAudio) typeMessage = "Audio";
else if(isSticker) typeMessage = "Sticker";
else if(isContact) typeMessage = "Contact";
else if(isLocation) typeMessage = "Location";
else if(isProduct) typeMessage = "Product";

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation');
const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text');
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2');
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');
const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage');
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage');
const isQuoted =
  info.message?.extendedTextMessage?.contextInfo?.quotedMessage;

const budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';
const Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || "";
const PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const args = body.trim().split(/ +/).slice(1);
const arg = body.trim().split(/ +/).slice(1);
const q = args.join(' ');
const CamileGostosa = (budy2 || budy || body || q || "").trim();
const testando = CamileGostosa.split(/\s+/)[0].toLowerCase();
const isCmd = body.trim().startsWith(prefix);
const command = isCmd 
  ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase() 
  : testando || null;
const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';

//INFO DE GRUPOS!!
//INFO DE GRUPOS!!
let groupMetadata = null;
let Infos_Do_Grupo = null;

if (isGroup) {
  try {
    groupMetadata = await cristal.groupMetadata(from);
    Infos_Do_Grupo = groupMetadata; // reaproveita a mesma metadata
  } catch (e) {
    groupMetadata = null;
    Infos_Do_Grupo = null;
  }
}

const participants = groupMetadata?.participants || [];
const NomeGrupo = Infos_Do_Grupo?.subject || '';
const DescGp = Infos_Do_Grupo?.desc || '';
const MembrosGP = Infos_Do_Grupo?.participants || [];
const TotalAdmins = MembrosGP[0]?.admin || '';
const TotalMembros = MembrosGP.length || 0;
const Dono_Do_Grupo = Infos_Do_Grupo?.subjectOwnerJid || '';

const So_Admins = isGroup ? getGroupAdmins(MembrosGP) : ''
const somembros = isGroup ? getMembros(MembrosGP) : ''

const diretorio_arqv = './armor/grupos/antiarqv.json';
const antiarqv = JSON.parse(fs.readFileSync(diretorio_arqv));
const dirGroup = `./armor/grupos/ATIVACOES/${from}.json`

if (isGroup && !fs.existsSync(dirGroup)) {
  const dataGp2 = [
  {
    name: NomeGrupo,
    groupId: from,
    So_Admins: false,
    modobn: false,
    bangp: false,
    x9: false,
    Simi: false,
    antilinkhard: false,
    antiimg: false,
    antivideo: false,
    antiaudio: false,
    antisticker: false,
    antidoc: false,
    antictt: false,
    antiloc: false,
    antinotas: false,
    modobn: false,
    antimencao: false,
    wellcome: {
      bemvindo1: false,
      bemvindo2: false
    }
  }
];

  fs.writeFileSync(
    dirGroup,
    JSON.stringify(dataGp2, null, 2) + "\n"
  );
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

const isBemvindo  = isGroup ? dataGp[0].wellcome.bemvindo1 : false
const isBemvindo2 = isGroup ? dataGp[0].wellcome.bemvindo2 : false
const isAntiLinkHard   = isGroup ? dataGp[0]?.antilinkhard ?? false : false;
const SoAdmins         = isGroup ? dataGp[0]?.So_Admins ?? false : false;
const isBanGrupo       = isGroup ? dataGp[0]?.bangp ?? false : false;
const isAntiMencionar  = isGroup ? dataGp[0]?.antimencao ?? false : false;
const isAntiImg        = isGroup ? dataGp[0]?.antiimg ?? false : false;
const isAntiVid        = isGroup ? dataGp[0]?.antivideo ?? false : false;
const isAntiAudio      = isGroup ? dataGp[0]?.antiaudio ?? false : false;
const autofiguAtivo    = isGroup ? dataGp[0]?.autofigu ?? false : false;
const isAntiSticker    = isGroup ? dataGp[0]?.antisticker ?? false : false;
const isModoBn = isGroup ? dataGp[0]?.modobn ?? false : false
const isX9             = isGroup ? dataGp[0]?.x9 ?? false : false;
const Antidoc          = isGroup ? dataGp[0]?.antidoc ?? false : false;
const isAntiCtt        = isGroup ? dataGp[0]?.antictt ?? false : false;
const Antiloc          = isGroup ? dataGp[0]?.antiloc ?? false : false;
const isAntiNotas      = isGroup ? dataGp[0]?.antinotas ?? false : false;
const isSimih = isGroup ? dataGp[0]?.simih ?? false : false;
const ismodoaluguel = isGroup ? dataGp[0]?.modoaluguel ?? false : false;
const isVip = isVIP(sender);
const selo = Config2.verificado ? {key: {fromMe: false, remoteJid: from, id: "META",
participant: "13135550002@s.whatsapp.net"
}, message: { contactMessage: { displayName: pushname,
 vcard: `BEGIN:VCARD
VERSION:3.0
N:Meta AI;;;;
FN:Meta AI 
TEL;waid=13135550002:+1 313 555 0002
END:VCARD`
}
}
} : info
let EV = contadormsg.map(a => a.groupId).indexOf(from)

const messageDetails = {
  key: {
    remoteJid: info.key.remoteJid,
    fromMe: info.key.fromMe,
    id: info.key.id
  },
  pushName: info.pushName,
  message: info.message || null,
  type: info.message ? Object.keys(info.message)[0] : null,
  isGroup: info.key.remoteJid.endsWith('@g.us')
};

const enviarAudioGravacao = async (arquivo) => {
    const buffer = Buffer.isBuffer(arquivo) ? arquivo : fs.readFileSync(arquivo);
    await cristal.sendMessage(
      from,
      { audio: buffer, mimetype: "audio/mp4", ptt: false },
      { quoted: messageDetails }
    );
  };

  const enviarAudio = async (arquivo) => {
  const buffer = Buffer.isBuffer(arquivo) ? arquivo : fs.readFileSync(arquivo);
  await cristal.sendMessage(
    from,
    { audio: buffer, mimetype: "audio/mp4", ptt: false },
    { quoted: messageDetails }
  );
};

  const enviarAudioUrl = async (url, caption = "") => {
    try {
      const res = await axios.get(url, { responseType: "arraybuffer" });
      await cristal.sendMessage(
        from,
        { audio: Buffer.from(res.data), mimetype: "audio/mp4", ptt: false, caption },
        { quoted: messageDetails }
      );
    } catch (e) {
      console.error("❌ Erro ao enviar áudio:", e);
      await reply("❌ Erro ao baixar ou enviar o áudio.");
    }
  };

const enviarImagem = async (caminho, text = "") => {
  try {
    const buffer = fs.readFileSync(caminho);

    await cristal.sendMessage(
      from,
      { image: buffer, caption: text },
      { quoted: messageDetails }
    );
  } catch (err) {
    console.error("❌ Erro ao enviar imagem local:", err);
    await reply("❌ Não foi possível enviar a imagem local.");
  }
};

  const enviarImagemUrl = async (url, text = "") => {
    await cristal.sendMessage(
      from,
      { image: { url: url }, caption: text },
      { quoted: messageDetails }
    );
  };

  const enviarVideo = async (arquivo, caption = "", isGif = false) => {
    const buffer = Buffer.isBuffer(arquivo) ? arquivo : fs.readFileSync(arquivo);
    const messagePayload = isGif
      ? { video: buffer, mimetype: "image/webp", caption, gifPlayback: true }
      : { video: buffer, mimetype: "video/mp4", caption };
    await cristal.sendMessage(from, messagePayload, { quoted: messageDetails });
  };

async function reply(texto){
try {
return cristal.sendMessage(from, {text: texto, mentions: [sender, info?.key?.remoteJid]}, {quoted: selo})
} catch (E) {
return reply("Erro ao enviar msg");
};
};

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
cristal.sendMessage(idgp, reactionMessage)
}

var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}


//==MENCTIONS==\\
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? cristal.sendMessage(from, {text: teks.trim(), mentions: memberr}) : cristal.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
cristal.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const isBotGroupAdmins = So_Admins?.includes(botNumber) || false;
const isGroupAdmins = So_Admins.includes(sender) || false || So_Dono ||SoBot || IsCreator || SoCriador
const groupMembers = groupMetadata?.participants || []
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
let menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant || '';
if (menc_prt.includes('@lid') && Infos_Do_Grupo?.participants) {
menc_prt = Infos_Do_Grupo.participants.find(v => v.id === menc_prt)?.phoneNumber || '';
}
const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (menc_jid2?.[0]?.includes('@lid') && Infos_Do_Grupo?.participants) {
menc_jid2[0] = Infos_Do_Grupo.participants.find(v => v.id === menc_jid2[0])?.phoneNumber || '';
}
const menc_os2 = q.includes("@") ? (Array.isArray(menc_jid2) && menc_jid2.length > 0 ? menc_jid2[0] : null) : menc_prt;
const menc_jid = jidNormalizedUser(menc_os2 || sender);
const sender_ou_n = q.includes("@") ? menc_jid2?.[0] : (menc_prt || sender);
const normalizar = alvo => {
if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
return Infos_Do_Grupo.participants.find(v => v.id === alvo)?.phoneNumber || alvo;
}
return alvo;
};
const numClean = txt => txt.replace(/[()+\-\/\s]/g, '') + '@s.whatsapp.net';
const mrc_ou_numero  = q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const marc_tds       = q.includes('@')                 ? normalizar(menc_jid) : q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt_nmr   = q.length > 12 && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt3 = info.message?.extendedTextMessage?.contextInfo?.participant
const menc_jid3 = args?.join(" ").replace("@", "") + "@s.whatsapp.net"
const menc_jid23 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid
const sender_ou_n3 = q.includes("@") ? menc_jid : sender
const mrc_ou_numero3 = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os23 = q.includes("@") ? menc_jid : menc_prt 
const marc_tds3 = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_prt_nmr3 = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

//===HORA===\\
const hora2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(hora2 > "00:00:00" && hora2 < "05:00:00"){
var tempo = 'Boa noite'
} if(hora2 > "05:00:00" && hora2 < "12:00:00"){
var tempo = 'Bom dia'
} if(hora2 > "12:00:00" && hora2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(hora2 > "18:00:00"){
var tempo = 'Boa noite'
}

if(isVisualizar) {
await cristal.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

//===IF===\\
//if (!body?.startsWith(prefix)) return;
if(info.key.fromMe) return;
if(BotOff && !So_Dono) return;
if(isGroup && isCmd && SoAdmins && !So_Dono && !isGroupAdmins) return;
if(isCmd && isSoDono && !So_Dono) return;
if (isGroup && isBanGrupo && !So_Dono) {
  return; 
}
if (Config2.isSoDono && !So_Dono) {
  return; 
}

//===CONSOLE===\\
let tipoMsg = "Texto";
if (info?.message?.imageMessage) tipoMsg = "📸 Imagem";
else if (info?.message?.videoMessage) tipoMsg = "🎥 Vídeo";
else if (info?.message?.audioMessage) tipoMsg = "🎧 Áudio";
else if (info?.message?.stickerMessage) tipoMsg = "🧩 Figurinha";
else if (info?.message?.documentMessage) tipoMsg = "📄 Documento";
else if (info?.message?.buttonsResponseMessage) tipoMsg = "🔘 Botão";
else if (info?.message?.listResponseMessage) tipoMsg = "📋 Lista";
else if (info?.message?.reactionMessage) tipoMsg = "😂 Reação";

function linha(icon, label, value, color = "#ffffff") {
  return `${chalk.hex("#64748b")("┃")} ${icon} ${chalk.hex(color)(label)} ${chalk.white(value)}`;
}

function separador(txt, color) {
  console.log(
    chalk.hex(color)(`\n ══════ ${txt} ══════ `)
  );
}

if (!isGroup && isCmd) {
  separador("PRIVADO", "#22c55e");

  console.log(linha("🧠", "Comando:", command, "#f87171"));
  console.log(linha("👤", "De:", pushname, "#60a5fa"));
  console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399"));
  console.log(linha("🕒", "Hora:", hora2, "#facc15"));
  console.log(linha("📆", "Data:", data, "#f472b6"));
  console.log(linha("👑", "Dono:", So_Dono ? "SIM" : "NÃO", "#a78bfa"));

  console.log(
    chalk.hex("#22c55e")("╚═════════════════════════════════╝\n")
  );
}

if (isGroup && isCmd) {
  separador("GRUPO", "#ef4444");

  console.log(linha("🧠", "Comando:", command, "#f87171"));
  console.log(linha("👤", "De::", pushname, "#60a5fa"));
  console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399"));
  console.log(linha("👥", "Grupo:", NomeGrupo, "#22d3ee"));
  console.log(linha("🕒", "Hora:", hora2, "#facc15"));
  console.log(linha("👑", "Dono:", So_Dono ? "SIM" : "NÃO", "#a78bfa"));

  console.log(
    chalk.hex("#ef4444")("╚═════════════════════════════════╝\n")
  );
}

if (isGroup && !isCmd) {
  separador("GRUPO", "#a855f7");

  console.log(linha("👤", "De:", pushname, "#60a5fa"));
  console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399"));
  console.log(linha("👥", "Grupo:", NomeGrupo, "#22d3ee"));
  console.log(linha("📦", "Tipo:", tipoMsg, "#f97316"));
  console.log(linha("🕒", "Hora:", hora2, "#facc15"));
  console.log(linha("💬", "Texto:", body?.slice(0, 60) || "—", "#e5e7eb"));

  console.log(
    chalk.hex("#a855f7")("╚═════════════════════════════════╝\n")
  );
}

if (info?.message?.reactionMessage) {
  separador("REAÇÃO:", "#f59e0b");

  console.log(linha("👤", "De:", pushname, "#60a5fa"));
  console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399"));
  if (isGroup) console.log(linha("👥", "Grupo:", NomeGrupo, "#22d3ee"));
  console.log(linha("😂", "Emoji:", info.message.reactionMessage.text, "#facc15"));

  console.log(
    chalk.hex("#f59e0b")("╚═════════════════════════════════╝\n")
  );
}

//===DIGITANDO===\\
let digitandoGrupos = new Map()
async function iniciarDigitando(jid) {
 digitandoGrupos.set(jid, true)
const intervalo = setInterval(async () => {
if (!digitandoGrupos.get(jid)) {
 clearInterval(intervalo)
 return
}
await cristal.sendPresenceUpdate('composing', jid)
}, 4000)
setTimeout(() => pararDigitando(jid), 10000)
}

async function pararDigitando(jid) {
digitandoGrupos.delete(jid)
await cristal.sendPresenceUpdate('paused', jid)
}

const MSG = Cmd(command, NomeGrupo, prefix);
const SoLink = q?.includes("http:") || q?.includes("https:");

const readMore = String.fromCharCode(8206).repeat(4000);

async function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

//EVAL E EXECUÇÕES 
if(body.startsWith('>')){
try { 
if(!So_Dono) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return cristal.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(body.startsWith('(>')){
try {   
if(!So_Dono) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return cristal.sendMessage(from, {text: bang}, {quoted: info})
}

cristal.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', hora, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}

//EXECUÇÕES EVAL
if(body.startsWith('$')) { 
if(!So_Dono) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

async function gerarLink(buffer, ext = "bin") {
  try {
    const form = new FormData();

    const blob = new Blob([buffer]);
    form.append("fileToUpload", blob, `cristal.${ext}`);
    form.append("reqtype", "fileupload");

    const res = await fetch("https://catbox.moe/user/api.php", {
      method: "POST",
      body: form
    });

    const text = await res.text();

    // Catbox retorna TEXTO, não JSON
    if (!text.startsWith("https://")) return null;

    return text.trim();

  } catch (err) {
    console.error("ERRO UPLOAD:", err);
    return null;
  }
}

//===ANTILINK===\\
let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await cristal.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return reply("Error")
setTimeout(() => {
cristal.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1200);
cristal.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
cristal.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(MembrosGP).includes(sender)) return
cristal.groupParticipantsUpdate(from, [sender], 'remove')
}

//==COMANDOS DE FIGURINHAS==\\
const hashFilePath = './datab/hashFigurinhas.json';

if (!fs.existsSync(hashFilePath)) {
    fs.writeFileSync(
        hashFilePath,
        JSON.stringify({ fechar: [], fechar2: [], abrir: [], marcar: [], ban: [] }, null, 2)
    );
}

let hashFigurinhas = JSON.parse(fs.readFileSync(hashFilePath));

function salvarHashFigurinha(tipo, hash) {
    if (!hashFigurinhas[tipo]) hashFigurinhas[tipo] = [];
    if (!hashFigurinhas[tipo].includes(hash)) {
        hashFigurinhas[tipo].push(hash);
        fs.writeFileSync(hashFilePath, JSON.stringify(hashFigurinhas, null, 2));
    }
}

if (type === 'stickerMessage') {

    const stickerMsg =
        info.message?.stickerMessage ||
        info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;

    if (!stickerMsg) return;

    const fileSha256 = stickerMsg.fileSha256;
    const hashSticker = fileSha256
        ? Buffer.from(fileSha256).toJSON().data.join(',')
        : null;

    if (!hashSticker) return;
    if (!So_Dono) return;
    if (!isGroup || !isBotGroupAdmins) return;

            //===BAN===\\
    if (hashFigurinhas.ban.includes(hashSticker)) {

        const contextInfo = stickerMsg.contextInfo;
        if (!contextInfo || !contextInfo.participant) return;

        const mentioned = contextInfo.participant;

        await cristal.groupParticipantsUpdate(from, [mentioned], 'remove');

        await cristal.sendMessage(from, {
            text: `> como o meu dono pediu, o usuário foi removido 🔪`,
            mentions: [mentioned],
            quoted: info
        });

        return;
    }

    //=====MARCAR=====\\
    if (hashFigurinhas.marcar.includes(hashSticker)) {

        const metadata = await cristal.groupMetadata(from);
        const membros = metadata.participants.map(p => p.id);

        let texto = `📣 *Marcando todos como o meu dono pediu*\n\n`;
        let mentions = [];

        for (let id of membros) {
            texto += `@${id.split("@")[0]}\n`;
            mentions.push(id);
        }

        await cristal.sendMessage(from, {
            text: texto,
            mentions,
            quoted: info
        });

        return;
    }
}

//===ANTI-MENÇÃO===\\
if (info.message?.groupStatusMentionMessage && isGroup && isAntiMencionar && !isGroupAdmins && !So_Dono) {
 try {
 await cristal.sendMessage(from, { delete: info.key})
 } catch (e) {
 console.log("Não consegui apagar o aviso do status")
 }
await cristal.groupParticipantsUpdate(from, [ sender ],  "remove")
 await cristal.sendMessage(from, { text: `🚫 @${sender.split("@")[0]} foi removido por mencionar o grupo em status.`, mentions: [sender] })
}

/*//===AUTOAUDIO===//
const autoAudios = {
    "corno": "./assets/audios/audiocorn.mp3",
    "gay": "./assets/audios/audioga.mp3",
    "beta": "./assets/audios/bet.mp3",
    "bom dia": "./assets/audios/bomdia.mp3",
    "boa noite": "./assets/audios/boanoite.mp3",
    "boa tarde": "./assets/audios/boatarde.mp3",
    "Baiano": "./assets/audios/baian.mp3",
    "sus": "./assets/audios/suspeit.mp3",
    "acorda": "./assets/audios/acord.mp3",
    "amor": "./assets/audios/amo.mp3",
    "pai": "./assets/audios/bença.mp3",
    "lula": "./assets/audios/ladrão.mp3",
    "mendigo": "./assets/audios/papo.mp3",
};

if (isGroup) {
    try {
        const texto = body
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        for (const palavra in autoAudios) {
            if (texto.includes(palavra)) {

                const audioPath = autoAudios[palavra];
                if (!fs.existsSync(audioPath)) return;

                await cristal.sendMessage(
    from,
    {
        audio: fs.readFileSync(audioPath),
        mimetype: 'audio/mpeg',
        ptt: false
    },
    { quoted: selo }
);

                break; 
            }
        }
    } catch (err) {
        console.log('Erro auto-áudio:', err);
    }
}*/


//===ADV===\\
function carregarAdvertencias() {
  if (!fs.existsSync(advertPath)) {
    fs.writeFileSync(advertPath, JSON.stringify({}, null, 2))
  }
  return JSON.parse(fs.readFileSync(advertPath))
}

function salvarAdvertencias(dados) {
  fs.writeFileSync(advertPath, JSON.stringify(dados, null, 2))
}

//===PUXA ARQUIVOS===\\
function buscarArquivo(diretorio, termo) {
  const arquivos = fs.readdirSync(diretorio)

  for (const arquivo of arquivos) {
    const caminhoCompleto = path.join(diretorio, arquivo)

    if (arquivo === 'node_modules') continue

    const stat = fs.statSync(caminhoCompleto)

    if (stat.isDirectory()) {
      const resultado = buscarArquivo(caminhoCompleto, termo)
      if (resultado) return resultado
    } else {
      if (arquivo.toLowerCase().includes(termo.toLowerCase())) {
        return caminhoCompleto
      }
    }
  }
  return null
}

//========(CONTADOR-DE-MENSAGENS)========\\
if (budy2 != undefined && isGroup) {

  if (!isJsonIncludes(contadormsg, from)) {
    contadormsg.push({
      groupId: from,
      participants: []
    })
    saveJSON(contadormsg, './datab/contadormsg.json')

  } else {

    if (!isJsonIncludes(contadormsg[EV].participants, sender)) {
      contadormsg[EV].participants.push({
        id: sender,
        mensagens: 0,
        comandos: 0,
        audios: 0,
        figurinhas: 0
      })
      saveJSON(contadormsg, './datab/contadormsg.json')

    } else {

      let AC = contadormsg[EV].participants.map(b => b.id).indexOf(sender)
      let usu = contadormsg[EV].participants[AC]
       contadormsg[EV].participants

if (usu.mensagens == null)  usu.mensagens = 0
if (usu.comandos == null)   usu.comandos = 0
if (usu.audios == null)     usu.audios = 0
if (usu.figurinhas == null) usu.figurinhas = 0

      let msg = 0
      let cmd = 0
      let aud = 0
      let fig = 0

      if (isCmd) {
  cmd++
} else if (info.message?.audioMessage) {
  aud++
} else if (info.message?.stickerMessage) {
  fig++
} else {
  msg++
}

      usu.mensagens  += msg
      usu.comandos   += cmd
      usu.audios     += aud
      usu.figurinhas += fig

      saveJSON(contadormsg, './datab/contadormsg.json')
    }
  }
}


//====ANTIIMAGEM====\\
if(isAntiImg && isGroupAdmins && isGroup && isBotGroupAdmins && type == 'imageMessage') {
if(isGroupAdmins) return cristal.sendMessage(from, {text:'Como você é um admin, irei te poupar de ser removido por enviar este tipo de mensagem.🤪'}, {quoted: selo})
if(dataGp[0].legenda_imagem != "0") {
cristal.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: selo})  
}
setTimeout(() => {
cristal.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
cristal.groupParticipantsUpdate(from, [sender], 'remove')
}

//====ANTISTICKER====\\
if(isAntiSticker && isGroupAdmins && isGroup && isBotGroupAdmins && type == 'stickerMessage') {
if(isGroupAdmins) return cristal.sendMessage(from, {text:'Como você é um admin, irei te poupar de ser removido por enviar este tipo de mensagem.'}, {quoted: selo })
cristal.sendMessage(from, {text: 'Esse tipo de mensagem não é permitido nesse grupo, terei que te remover imediatamente.'}, {quoted: selo })
setTimeout(() => {
cristal.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
cristal.groupParticipantsUpdate(from, [sender], 'remove')
}
//=====ANTIDOC====\\
if(Antidoc && isGroupAdmins && isGroup && isBotGroupAdmins && type == 'documentMessage') {
if(isGroupAdmins) return cristal.sendMessage(from, {text:'Como você é um admin, irei te poupar de ser removido por enviar este tipo de mensagem.'}, {quoted: selo })
if(dataGp[0].legenda_documento != "0") {
cristal.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: selo }) 
}
setTimeout(() => {
cristal.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
cristal.groupParticipantsUpdate(from, [sender], 'remove')
}

//====ANTICTT====\\
if (isGroup && isGroupAdmins && isBotGroupAdmins) {

    if (isContact || Antiloc || isLocation) {

        if (type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {

            if (isGroupAdmins) {
                return cristal.sendMessage(
                    from, 
                    { text: `Como você é um admin, irei te poupar de ser removido por enviar este tipo de mensagem.` },
                    { quoted: selo }
                );
            }

            setTimeout(() => {
                cristal.sendMessage(
                    from,
                    { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } }
                );
            }, 1500);

            if (!JSON.stringify(groupMembers).includes(sender)) return;

            cristal.groupParticipantsUpdate(from, [sender], 'remove');

            const clear = `🗑${"\n".repeat(255)}🗑️\❳ *LIMPEZA DE CHAT CONCLUÍDA* ✅`;
            cristal.sendMessage(
                from,
                { text: clear, contextInfo: { forwardingScore: 500, isForwarded: true } }
            );

            cristal.sendMessage(
                from,
                { text: 'Reporte aos admins o ocorrido', mentions: groupAdmins }
            );
        }
    }
}

//====ANTIAUDIO====\\
if(isAntiAudio && isGroup && isGroupAdmins && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return cristal.sendMessage(from, {text:'Como você é um admin, irei te poupar de ser removido por enviar este tipo de mensagem.'}, {quoted: selo })
cristal.sendMessage(from, {text: 'Esse tipo de mensagem não é permitido nesse grupo, terei que te remover imediatamente.'}, {quoted: seloctt})
setTimeout(() => {
cristal.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return
cristal.groupParticipantsUpdate(from, [sender], 'remove')
}

//===ANTINOTAS===\\
if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !So_Dono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
setTimeout(() => {
cristal.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
cristal.groupParticipantsUpdate(from, [sender], 'remove')
}

//===MP3===\\
function cleanFileName(name) {
  return name.replace(/[^a-zA-Z0-9_\-\.]/g, "_"); // Remove caracteres inválidos
}

//====ANTIPV===\\
if(isAntiPv) {
if(!isGroup && !So_Dono && !isVip) {
await sleep(2500)
msgpvblock = `./datab/anti/pv-msg_block-${sender}.json`
fs.writeFileSync(msgpvblock, JSON.stringify("⛔ Desculpa, mais você será bloqueado por chamar no privado", null, 2))
msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock))
reply(msgmsglbl)
fs.unlink(msgpvblock)
setTimeout(async () => {
cristal.updateBlockStatus(sender, 'block')
}, 2000)
return
}
}

//===ANTIPV2===//
if(isAntiPv2) {
if(!isGroup && !So_Dono && !isVip) {
await sleep(2500)
msgantipv = `./datab/anti/pv-msg_block2-${sender}.json`
fs.writeFileSync(msgantipv, JSON.stringify("⛔⚠️ Por favor, não chame no privado. Use um grupo para interagir comigo.", null, 2))
msgmsglbl = JSON.parse(fs.readFileSync(msgantipv))
reply(msgmsglbl)
fs.unlink(msgantipv)
setTimeout(async () => {
cristal.updateBlockStatus(sender)
}, 2000)
return
}
}

//====ANTIPV3===\\
if(isAntiPv3) {
if(!isGroup && !So_Dono && !isVip) {
await sleep(2500)
msgpvblock3 = `./datab/anti/pv-msg_block3-${sender}.json`
fs.writeFileSync(msgpvblock3, JSON.stringify("𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐧ã𝐨 𝐜𝐡𝐚𝐦𝐞 𝐚 𝐂𝐫𝐢𝐬𝐭𝐚𝐥 𝐧𝐨 𝐩𝐫𝐢𝐯𝐚𝐝𝐨, 𝐪𝐮𝐚𝐥𝐪𝐮𝐞𝐫 𝐜𝐨𝐢𝐬𝐚 𝐦𝐞 𝐞𝐧𝐯𝐢𝐞 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 𝐧𝐨 𝐦𝐞𝐮 𝐩𝐫𝐢𝐯𝐚𝐝𝐨 wa.me/66832297725 > Sr.Patman👑", null, 2))
msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock3))
reply(msgmsglbl)
fs.unlink(msgpvblock3)
setTimeout(async () => {
cristal.updateBlockStatus(sender, 'block')
}, 2000)
return
}
}

//===SIMIH===\\
if (
  isSimih &&
  isGroup &&
  budy2 &&
  budy2.length > 0 &&
  budy2.length < 200 &&
  !So_Dono &&
  !info.message?.reactionMessage
) {
  const texto = budy2.toLowerCase()

  for (const palavra in simihJson) {
    if (texto.includes(palavra.toLowerCase())) {
      const emoji = simihJson[palavra]

      setTimeout(() => {
        cristal.sendMessage(from, {
          react: {
            text: emoji,
            key: info.key
          }
        })
      }, 700)

      break 
    }
  }
}

function limparUrl(url) {
  if (!url || typeof url !== 'string') return null

  return url
    .replace(/\s+/g, '')
    .replace(/^h+ttps?:\/\//i, 'https://')
    .replace('http//', 'http://')
    .replace('https//', 'https://')
    .trim()
}

//===AUTOFIGU===\\
if(autofiguAtivo) {
    const RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const imgMsg = RSM?.imageMessage || info.message?.imageMessage || 
                   RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage ||
                   info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage;

    const vidMsg = RSM?.videoMessage || info.message?.videoMessage ||
                   RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage ||
                   info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage;

    if(imgMsg){
        const pack = `🅒🅡🅘🅢🅣🅐🅛 🅑🅞🅣`;
        const author2 = ` 「 66832297725 」`;
        const owgi = await getFileBuffer(imgMsg, 'image');
        await sendImageAsSticker2(cristal, from, owgi, selo, { packname: pack, author: author2 });
    } 
    else if(vidMsg && vidMsg.seconds < 10){
        const pack = `🅒🅡🅘🅢🅣🅐🅛 🅑🅞🅣`;
        const author2 = `「 66832297725 」`;
        const owgi = await getFileBuffer(vidMsg, 'video');
        await sendVideoAsSticker2(cristal, from, owgi, selo, { packname: pack, author: author2 });
    } 
    else if(imgMsg || vidMsg){
        reply(`❌ Vídeo muito longo! Máx 9.9 segundos.`);
    }
}

function enviarFigurinha(caminho, chatId) {
    const sticker = fs.readFileSync(caminho);
    cristal.sendMessage(chatId, { sticker }, { quoted: true });
    fs.unlinkSync(caminho);
}

//==(ANTILIGAR)==\\
if(!isGroup && isAnticall) {
cristal.ws.on('CB:call', async (B) => {
var msgcallblocks = `./datab/anti/call-msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblocks)) {
fs.writeFileSync(msgcallblocks, JSON.stringify(mess.antiCalls(), null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblocks))
if(B.content[0].tag == 'offer') {
sandro.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
sandro.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
DLT_FL(msgcallblocks)
})
}
}
})
}
//===ALUGUEL===\\
const aluguelPath = "./armor/aluguel/aluguel.json"

if (!fs.existsSync(aluguelPath)) {
  fs.writeFileSync(aluguelPath, JSON.stringify([], null, 2))
}

const getAluguel = () => {
  try {
    const data = JSON.parse(fs.readFileSync(aluguelPath))
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

const saveAluguel = (data) => {
  if (!Array.isArray(data)) return
  fs.writeFileSync(aluguelPath, JSON.stringify(data, null, 2))
}

const verificaAluguel = (groupId) => {
  const aluguel = getAluguel()
  const now = Date.now()

  return aluguel.some(
    g => g.id === groupId && Number(g.expira) > now
  )
}

const jaTeveCortesia = (groupId) => {
  const aluguel = getAluguel()
  return aluguel.some(
    g => g.id === groupId && g.tipo === "cortesia"
  )
}

const limparAluguelExpirado = () => {
  const aluguel = getAluguel()
  const now = Date.now()
  const ativo = aluguel.filter(g => Number(g.expira) > now)
  saveAluguel(ativo)
}

const horasRestantes = (expira) => {
  const ms = expira - Date.now()
  if (ms <= 0) return 0
  return Math.ceil(ms / (1000 * 60 * 60))
}

const diasRestantes = (expira) => {
  const ms = expira - Date.now()
  if (ms <= 0) return 0
  return Math.ceil(ms / (1000 * 60 * 60 * 24))
}


limparAluguelExpirado()

if (isGroup && isCmd && !So_Dono) {

  const liberado = verificaAluguel(from)

  if (!liberado) {

    return cristal.sendMessage(from, {
      text: `❌ *Este grupo não possui aluguel ativo.*

💳 Para continuar usando o *Cristal Bot*, entre em contato com o meu dono e alugue a melhor opção.

👑 Dono: wa.me/${NumberDono}`,
      contextInfo: channelcristal
    })
  }
}

//===MODOPARCERIA===\\
const caminhoParceria = "./datab/modoparceria.json"

function lerParceria() {
  if (!fs.existsSync(caminhoParceria)) {
    fs.writeFileSync(caminhoParceria, JSON.stringify({ grupos: {} }, null, 2))
  }
  return JSON.parse(fs.readFileSync(caminhoParceria))
}

function salvarParceria(data) {
  fs.writeFileSync(caminhoParceria, JSON.stringify(data, null, 2))
}


switch (command) {
//DONO

case 'shizuku_key':{
  try {
    if (!So_Dono) return reply(msg.SoDono)
    const { data } = await axios.get(`https://shizukuapis.space/api/keyerrada?apitoken=${API_KEY_CRISTAL}`)

    if (!data || !data.key) {
      return reply('❌ Não foi possível verificar a Apitoken.')
    }

    reply(data.key)
  } catch (e) {
    reply('❌ Erro ao consultar a Apitoken.')
  }
}
break

case 'zerokey': {
  try {
if (!So_Dono) return reply(msg.SoDono)
    const url = 'https://zero-two-apis.com.br/api_key_status.html?message=Apikey%20funcionando%20perfeitamente.%3Cbr%3ELimite%20de%20requests%3A%203046%3Cbr%3EConsulta%20ativa%3A%20N%C3%A3o%2C%20Quantidade%3A%200'

    const msg = decodeURIComponent(url.split('message=')[1])
      .replace(/<br>/g, '\n')

    reply(msg)
  } catch (e) {
    reply('❌ Erro ao verificar a Apikey.')
  }
}
break

case 'addrent':
case 'rgrent': {
if (!isGroup) return reply(msg.SoEmGrupos);
    if (!So_Dono) return reply(msg.SoDono)
  if (!q || !q.includes('/'))
    return reply(`Use:\n${prefix+command} numero/dias\nEx: ${prefix+command} 81999999999/30`)

  let [numero, dias] = q.replace(/\s+/g, '').split('/')
  dias = Number(dias)
  if (!dias || dias <= 0) return reply("❌ Dias inválidos.")

  const cliente = numero.replace(/\D/g, '') + "@s.whatsapp.net"
  const aluguel = getAluguel()

  const index = aluguel.findIndex(g => g.id === from)
  const agora = Date.now()

  if (index >= 0) {
    aluguel[index].expira += dias * 86400000
    aluguel[index].tipo = "aluguel"
    aluguel[index].cliente = cliente
  } else {
    aluguel.push({
      id: from,
      tipo: "aluguel",
      expira: agora + dias * 86400000,
      cliente
    })
  }

  saveAluguel(aluguel)
  reply(`✅ Aluguel ativado por *${dias} dias*.`)
}
break

case 'tirarrent': {
     if (!So_Dono) return reply(msg.SoDono)
     if (!isGroup) return reply(msg.SoEmGrupos);
  const dias = Number(args[0])
  if (!dias) return reply("❌ Informe quantos dias remover.")

  const aluguel = getAluguel()
  const index = aluguel.findIndex(g => g.id === from)
  if (index < 0) return reply("❌ Grupo não possui aluguel.")

  aluguel[index].expira -= dias * 86400000
  saveAluguel(aluguel)

  reply(`⏳ ${dias} dia(s) removido(s) do aluguel.`)
}
break

case 'delrent':
case 'rmrent': {
    if (!So_Dono) return reply(msg.SoDono)
    if (!isGroup) return reply(msg.SoEmGrupos);
  const aluguel = getAluguel()
  const novo = aluguel.filter(g => g.id !== from)

  if (novo.length === aluguel.length)
    return reply("❌ Este grupo não está registrado.")

  saveAluguel(novo)
  reply("🗑️ Aluguel removido com sucesso.")
}
break

case 'cortesia24': {
    if (!So_Dono) return reply(msg.SoDono)
    if (!isGroup) return reply(msg.SoEmGrupos);
  if (verificaAluguel(from))
    return reply("❌ Este grupo já possui aluguel ativo.")

  if (jaTeveCortesia(from))
    return reply("❌ Este grupo já utilizou a cortesia.")

  const aluguel = getAluguel()

  aluguel.push({
    id: from,
    tipo: "cortesia",
    expira: Date.now() + 86400000,
    cliente: sender
  })

  saveAluguel(aluguel)

  reply("💳 Cartão verde validado! 24h liberadas neste grupo.")
}
break

case 'listrent':
case 'lista-aluguel': {
    if (!So_Dono) return reply(msg.SoDono)
  const aluguel = getAluguel()
  if (aluguel.length === 0)
    return reply("Nenhum grupo alugado.")

  let txt = `📋 *Grupos alugados:* (${aluguel.length})\n—\n`

  for (let i = 0; i < aluguel.length; i++) {
    const d = aluguel[i]
    const dias = diasRestantes(d.expira)

    txt += `*[${i+1}]* ${d.id}\n`
    txt += `• Tipo: ${d.tipo}\n`
    txt += `• Restante: ${dias} dia(s)\n`
    if (d.cliente) txt += `• Cliente: wa.me/${d.cliente.split('@')[0]}\n`
    txt += `—\n`
  }

  reply(txt)
}
break

case 'lastrent': {
    if (!So_Dono) return reply(msg.SoDono)
    if (!isGroup) return reply(msg.SoEmGrupos);
  const aluguel = getAluguel()
    .filter(g => g.tipo === "aluguel")
    .sort((a, b) => a.expira - b.expira)
    .slice(0, 3)

  if (aluguel.length === 0)
    return reply("Nenhum aluguel ativo.")

  let txt = "⏰ *Aluguéis próximos do fim:*\n—\n"

  aluguel.forEach((g, i) => {
    txt += `*[${i+1}]* ${g.id}\n`
    txt += `• Restante: ${diasRestantes(g.expira)} dia(s)\n`
    txt += `• Cliente: wa.me/${g.cliente.split('@')[0]}\n—\n`
  })

  reply(txt)
}
break

case "ping":
  try {
    const os = require("os");

    await reagir(from, "📡");
    const inicio = Date.now();
    const tempMsg = await cristal.sendMessage(from, { text: "" }, { ephemeralExpiration: 1 }); 
    const fim = Date.now();
    const latencia = fim - inicio; 
    await cristal.sendMessage(from, { delete: tempMsg.key });

    const uptime = process.uptime();
    const tempo = (s) => {
      const d = Math.floor(s / 86400);
      const h = Math.floor((s % 86400) / 3600);
      const m = Math.floor((s % 3600) / 60);
      const sec = Math.floor(s % 60);
      return `${d}d ${h}h ${m}m ${sec}s`;
    };

    const ramTotal = os.totalmem() / 1024 / 1024;
    const ramUsada = process.memoryUsage().rss / 1024 / 1024;
    const usoRam = ((ramUsada / ramTotal) * 100).toFixed(0);
const r = (Date.now() / 1000) - info.messageTimestamp;
    const texto = `╭━━「 📡 PING 」
┃ 🤖 *INFORMAÇÕES*
┃ ├ Nome: *${NomeBot}*
┃ ├ Versão: *${version}*
┃ └ Prefixo: *${prefix}*

┃ 📡 *CONEXÃO*
┃ ├ Ping: ${r.toFixed(3)}s
┃ └ Qualidade: *${r.toFixed < 100 ? "🔵Boa" : latencia < 500 ? "🫠Média" : "🔴Ruim"}*

┃ 💻 *SISTEMA*
┃ ├ OS: *${os.type()}*
┃ ├ Arquitetura: *${os.arch()}*
┃ └ Uptime: *${tempo(uptime)}*

┃ 🧠 *MEMORIA*
┃ ├ RAM: *${ramUsada.toFixed(2)} MB*
┃ └ Uso: *${usoRam}%*
╰━━━━━━━━━━━━`;

    const media = await prepareWAMessageMedia(
      { image: FotoMenu },
      { upload: cristal.waUploadToServer }
    );

    const card = {
      header: proto.Message.InteractiveMessage.Header.create({
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      }),
      body: { text: texto },
      footer: { text: `${NomeBot} • Online 🚀` },
      nativeFlowMessage: {
        buttons: [
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "📡 𝐀𝐓𝐔𝐀𝐋𝐈𝐙𝐀𝐑",
              id: `${prefix}ping`
            })
          },
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "≡ 𝐌𝐄𝐍𝐔",
              id: `${prefix}menu`
            })
          }
        ]
      }
    };

    const cardMsg = generateWAMessageFromContent(
      from,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              carouselMessage: { cards: [card] }
            }
          }
        }
      },
      {}
    );

    await cristal.relayMessage(from, cardMsg.message, { messageId: cardMsg.key.id });

    await reagir(from, "✅");

  } catch (e) {
    console.error("Erro ping:", e);
    reply("❌ Erro ao mostrar o ping.");
  }
break;

case 'unblock':
case 'desbloquear': {
    if (!So_Dono) return reply(msg.SoDono)

    let alvo = null

    if (info.message?.extendedTextMessage?.contextInfo?.participant) {
        alvo = info.message.extendedTextMessage.contextInfo.participant
    } 

    else if (q) {
        let numero = q.replace(/[^0-9]/g, '')
        if (numero.length < 8) 
            return reply('❌ Número inválido.')
        alvo = numero + '@s.whatsapp.net'
    }

    if (!alvo)
        return reply('❌ Marque uma mensagem ou envie o número para desbloquear.')

    await reagir(from, '✅')

    try {
        await cristal.updateBlockStatus(alvo, 'unblock')

        reply(`
╭━━━〔 ✅ *USUÁRIO DESBLOQUEADO* 〕━━━╮
┃ 👤 Número: ${alvo.replace('@s.whatsapp.net', '')}
┃ 🔓 Status: DESBLOQUEADO
╰━━━━━━━━━━━━━━━━━━━━╯
`.trim())
    } catch (err) {
        console.log(err)
        reply('❌ Erro ao desbloquear o usuário.')
    }
}
break

case 'block':
case 'bloquear': {
    if (!So_Dono) return reply(msg.SoDono)

    let alvo = null

    if (info.message?.extendedTextMessage?.contextInfo?.participant) {
        alvo = info.message.extendedTextMessage.contextInfo.participant
    } 

    else if (q) {
        let numero = q.replace(/[^0-9]/g, '')
        if (numero.length < 8) 
            return reply('❌ Número inválido.')
        alvo = numero + '@s.whatsapp.net'
    }

    if (!alvo)
        return reply('❌ Marque uma mensagem ou envie o número para bloquear.')

    await reagir(from, '🚫')

    try {
        await cristal.updateBlockStatus(alvo, 'block')

        reply(`
╭━━━〔 🚫 *USUÁRIO BLOQUEADO* 〕━━━╮
┃ 👤 Número: ${alvo.replace('@s.whatsapp.net', '')}
┃ 🔒 Status: BLOQUEADO
╰━━━━━━━━━━━━━━━━━━━━╯
`.trim())
    } catch (err) {
        console.log(err)
        reply('❌ Erro ao bloquear o usuário.')
    }
}
break

case 'getlinha':
case 'caselinha':
    if (!So_Dono) return reply(msg.SoDono);
    
    const cmdProcurado = args[0];
    if (!cmdProcurado) return reply(`❌ Digite o comando que deseja buscar, ex: ${prefix}caselinha play`);

    const filePath = path.join(__dirname, './cristal.js'); 

    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const linhas = fileContent.split('\n');

        const regex = new RegExp(`case\\s+['"]${cmdProcurado}['"]`, 'i');
        const indiceLinha = linhas.findIndex(l => regex.test(l));

        if (indiceLinha === -1) return reply(`❌ Comando "${cmdProcurado}" não encontrado.`);

        let blocoCase = [];
        for (let i = indiceLinha; i < linhas.length; i++) {
            blocoCase.push(linhas[i]);
            if (linhas[i].trim() === 'break') break;
        }

        reply(`✅ Comando > ${cmdProcurado} encontrado na linha ${indiceLinha + 1}`);

    } catch (err) {
        console.error(err);
        reply('❌ Erro ao tentar ler o arquivo de comandos.');
    }
break;

case 'editarcase': {
      if (!So_Dono) return reply(msg.SoDono);
  if (!isQuoted) return reply('❌ Responda a uma mensagem contendo a case.')

  const [novoNome, ...resto] = q.split('|reply')
  if (!novoNome || !resto.length)
    return reply(`📌 Uso correto:\n${prefix}editarcase NOVO_NOME|reply <código> marcando a case no chat tambem, para mim localizar ela no arquivo.`)

  try {
    
    const path = require('path')

    const quoted =
      info.message.extendedTextMessage.contextInfo.quotedMessage.conversation

    const match = quoted.match(/case\s+['"`](.*?)['"`]/i)
    if (!match) return reply('❌ Não achei o nome da case no reply.')

    const caseAntiga = match[1]

    const arquivo = path.resolve('./cristal.js')
    let conteudo = fs.readFileSync(arquivo, 'utf8')

    const segura = caseAntiga.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

    const regex = new RegExp(
  `((?:case\\s+['"\`]${segura}['"\`]\\s*:\\s*\\n)+[\\s\\S]*?\\n\\s*break\\s*;?)`,
  'm'
)

    if (!regex.test(conteudo))
      return reply(`❌ A case "${caseAntiga}" não foi encontrada no arquivo.`)

    conteudo = conteudo.replace(regex, resto.join('|reply').trim())
    fs.writeFileSync(arquivo, conteudo)

    reply(
      `✅ A case *${caseAntiga}* foi substituída com sucesso.\n` +
      `♻️ Reiniciando em.`
    )
    reply("3")
    reply("2")
    reply("1")
reply("tudo certo agora ✅")

  } catch (e) {
    console.error('[EDITARCASE]', e)
    reply('❌ Erro ao editar a case.')
  }
}
break

case 'getcase':
    case 'cs':
      case 'puxarcase': {
if (!So_Dono) return reply(msg.SoDono);
  if (!args[0]) {
    await reply(`❌ Digite o nome do comando. Exemplo: ${prefix}getcase menu`);
    return;
  }

  const comando = args[0].toLowerCase();
  const filePath = path.join(__dirname, "cristal.js");

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const regex = new RegExp(`case\\s*['"\`]${comando}['"\`]\\s*:[\\s\\S]*?break;`, "i");
    const match = fileContent.match(regex);

    if (!match) {
      await reply(`❌ Não encontrei o case para o comando "${comando}"`);
      return;
    }

    const caseCode = match[0];
    await reply(`📄 Código do case "${comando}":\n\n${caseCode}`);
  } catch (err) {
    console.error(err);
    await reply("❌ Ocorreu um erro ao tentar ler o arquivo.");
  }
  break;
  }

case 'viewmsg':
case 'visualizarmsg':
if (!So_Dono) return reply(msg.SoDono);
if(!isVisualizar) {
Config2.visualizar = true
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(" Ativou com sucesso, agora eu não irei visualizar todas as mensagens recebidas nos grupos/chats")
} else if(isVisualizar) {
Config2.visualizar = false
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply("Desativou com sucesso, agora eu não irei mais visualizar nenhuma mensagem recebida")
} else {
reply('1 para ativar, 0 para desativar')
}
break

case "ls": {
  try {
if (!So_Dono) return reply(msg.SoDono);
    const baseDir = process.cwd();
    const arg = q ? q.trim() : "";

    const listarTudo = (dir, nivel = 0) => {
      let resultado = "";
      const itens = fs.readdirSync(dir);

      for (const item of itens) {
        const caminho = path.join(dir, item);
        const stats = fs.statSync(caminho);
        const espaco = "  ".repeat(nivel);

        if (stats.isDirectory()) {
          resultado += `${espaco}📁 ${item}\n`;
          resultado += listarTudo(caminho, nivel + 1);
        } else {
          resultado += `${espaco}📄 ${item}\n`;
        }
      }
      return resultado;
    };

    if (!arg) {
      const pastas = fs
        .readdirSync(baseDir)
        .filter(item =>
          fs.statSync(path.join(baseDir, item)).isDirectory()
        );

      if (!pastas.length) {
        return reply("⚠️ Nenhuma pasta encontrada.");
      }

      let texto = "📂 *PASTAS DO BOT*\n\n";
      for (const pasta of pastas) {
        texto += `📁 ${pasta}\n`;
      }

      return reply(texto);
    }

    if (arg === "-s") {
      const tudo = listarTudo(baseDir);
      return reply(`𝐀𝐑𝐐𝐔𝐈𝐕𝐎𝐒 𝐁𝐎𝐓 𝐊𝐀𝐘𝐑𝐎𝐒*\n\n${tudo}`);
    }

    return reply("❌ Use apenas:\n,ls\n,ls -s");

  } catch (err) {
    console.log("Erro no comando ls:", err);
    reply("⚠️ Erro ao listar arquivos.");
  }
}
break;

case 'nuke': {

if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);

if (!isBotGroupAdmins) {
    return reply(msg.BotAdmin);
  }

  const groupMetadata = await cristal.groupMetadata(from);

  const botNumber = cristal.user.id.split(':')[0] + '@s.whatsapp.net';


  await reply(
    '💣 NUKE INICIADO...\nRemovendo todos os membros...'
  );

  try {

    const membros = groupMetadata.participants
      .map(p => p.id)
      .filter(id => id !== botNumber && id !== MeuNumero);

    if (membros.length === 0) {
      return reply('⚠️ Nenhum membro para remover.');
    }

    await cristal.groupParticipantsUpdate(
      from,
      membros,
      'remove'
    );

    await reply(
      '☢️ NUKE CONCLUÍDO\nGrupo limpo com sucesso.'
    );

  } catch (err) {
    console.error(err);
    await reply('❌ Erro ao executar o NUKE.');
  }

}
break;

case 'cobrar': {
if (!So_Dono) return reply(msg.SoDono);

    const caminhoCobrancas = path.join(__dirname, "data", "cobrancas.json");
    
    function carregarCobrancas() {
        try {
            if (!fs.existsSync(caminhoCobrancas)) {
                fs.writeFileSync(caminhoCobrancas, JSON.stringify([], null, 2));
                return [];
            }

            const data = fs.readFileSync(caminhoCobrancas);

            if (!data.toString().trim()) {
                fs.writeFileSync(caminhoCobrancas, JSON.stringify([], null, 2));
                return [];
            }

            const json = JSON.parse(data);

            if (!Array.isArray(json)) {
                fs.writeFileSync(caminhoCobrancas, JSON.stringify([], null, 2));
                return [];
            }

            return json;

        } catch (e) {
            fs.writeFileSync(caminhoCobrancas, JSON.stringify([], null, 2));
            return [];
        }
    }

    function salvarCobrancas(dados) {
        fs.writeFileSync(caminhoCobrancas, JSON.stringify(dados, null, 2));
    }

    const partes = args;

    if (partes.length < 3) {
        await reply(
            `❗ *Uso correto:*\n\n.cobrar <numero> <dias> <horario>\n\nExemplo:\n${prefix}cobrar 66832297725 30 15:30`
        );
        return;
    }

    const numero = partes[0];
    const dias = parseInt(partes[1]);
    const horario = partes[2];

    if (!/^\d{2}:\d{2}$/.test(horario)) {
        await reply("❗ Horário inválido! Use o formato HH:MM");
        return;
    }

    const [hora, minuto] = horario.split(":").map(Number);

    const agora = new Date();
    const dataCobranca = new Date(agora.getTime() + dias * 24 * 60 * 60 * 1000);
    dataCobranca.setHours(hora);
    dataCobranca.setMinutes(minuto);
    dataCobranca.setSeconds(0);

    const cobrancas = carregarCobrancas();

    cobrancas.push({
        numero,
        dias,
        horario,
        timestamp: dataCobranca.getTime(),
        criadoEm: agora.getTime()
    });

    salvarCobrancas(cobrancas);

    await reply(
        `📌 *COBRANÇA REGISTRADA*\n\n` +
        `🔢 Número: ${numero}\n\n` +
        `📅 Dias até cobrar: ${dias}\n\n` +
        `⏰ Horário: ${horario}\n\n` +
        `📆 Data da cobrança: ${dataCobranca.toLocaleString("pt-BR")}`
    );

    break; 
  
}

case "idgp":
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
reply(`Id : ${from}`)
break

case 'prefixo-bot':
case 'setprefixs':
case 'setprefixo':
case 'setprefix':
case 'novoprefixo':
if (!So_Dono) return reply(msg.SoDono);

if (!q) return reply(`Digite o novo prefixo. Ex: *${prefix}setprefix (prefixo)*`);
const novoPrefix = q.trim();
Config.prefix = novoPrefix;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`Prefixo alterado para: *${novoPrefix}*`);
break;

case 'nick-dono':
  case 'namedono':
if (!So_Dono) return reply(msg.SoDono);

const novaNick = q.trim();
Config.NickDono = novaNick;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`Nick do dono alterado para: *${novaNick}*`);
break;

case 'nome-bot':
  case 'botname':
if (!So_Dono) return reply(msg.SoDono);
const novoNome = q.trim();
Config.NomeBot = novoNome;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`Nome do bot alterado para: *${novoNome}*`);
break;

case 'reiniciar':
case 'r':
  if (!So_Dono) return reply(msg.SoDono);

  reply('♻️ reiniciando sistemas...');
  setTimeout(() => {
    process.exit(0);
  }, 1000);
  reply('sistema reiniciado com sucesso ✅, agora estou iniciando tudo novamente.');
break;

case 'antiprivado':
case 'antipv':
if(!So_Dono) return reply(msg.SoDono)
if(!isAntiPv) {
Config2.antipv = true
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`𝑨𝑵𝑻𝑰𝑷𝑽 𝑪𝑶𝑴 𝑩𝑳𝑶𝑸𝑼𝑬𝑰𝑶 𝑭𝑶𝑰 𝑨𝑻𝑰𝑽𝑨𝑫𝑶, 𝑨𝑮𝑶𝑹𝑨 𝑵𝑰𝑵𝑮𝑼É𝑴 𝑷𝑶𝑫𝑬 𝑴𝑬 𝑴𝑬 𝑬𝑵𝑽𝑰𝑨𝑹 𝑴𝑬𝑵𝑺𝑨𝑮𝑬𝑴 ☠️👑.`)
} else if(isAntiPv) {
Config2.antipv = false
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`𝑨𝑵𝑻𝑰𝑷𝑽 𝑭𝑶𝑰 𝑫𝑬𝑺𝑨𝑻𝑰𝑽𝑨𝑫𝑶, 𝑨𝑮𝑶𝑹𝑨 𝑸𝑼𝑨𝑳𝑸𝑼𝑬𝑹 𝑷𝑬𝑺𝑺𝑶𝑨 𝑷𝑶𝑫𝑬 𝑴𝑬 𝑬𝑵𝑽𝑰𝑨𝑹 𝑴𝑬𝑵𝑺𝑨𝑮𝑬𝑴 🤡🙄.`)
}
break

case 'antiprivado2':
case 'antipv2':
if(!So_Dono) return reply(msg.SoDono)
if(!isAntiPv2) {
Config2.antipv2 = true
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`𝑨𝑵𝑻𝑰𝑷𝑽 𝑭𝑶𝑰 𝑨𝑻𝑰𝑽𝑨𝑫𝑶, 𝑨𝑮𝑶𝑹𝑨 𝑵𝑰𝑵𝑮𝑼É𝑴 𝑷𝑶𝑫𝑬 𝑴𝑬 𝑴𝑬 𝑬𝑵𝑽𝑰𝑨𝑹 𝑴𝑬𝑵𝑺𝑨𝑮𝑬𝑴`)
} else if(isAntiPv2) {
Config2.antipv2 = false
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`𝑨𝑵𝑻𝑰𝑷𝑽2 𝑭𝑶𝑰 𝑫𝑬𝑺𝑨𝑻𝑰𝑽𝑨𝑫𝑶, 𝑨𝑮𝑶𝑹𝑨 𝑸𝑼𝑨𝑳𝑸𝑼𝑬𝑹 𝑷𝑬𝑺𝑺𝑶𝑨 𝑷𝑶𝑫𝑬 𝑴𝑬 𝑬𝑵𝑽𝑰𝑨𝑹 𝑴𝑬𝑵𝑺𝑨𝑮𝑬𝑴 🤡🙄.`)
}
break

case 'antiprivado3':
case 'antipv3':
if(!So_Dono) return reply(msg.SoDono)
if(!isAntiPv3) {
Config2.antipv3 = true
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`𝐀𝐍𝐓𝐈𝐏𝐕 𝐀𝐓𝐈𝐕𝐀𝐃𝐎 𝐂𝐎𝐌 𝐒𝐔𝐂𝐄𝐒𝐒𝐎, 𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐏𝐑𝐎𝐍𝐓𝐀 𝐏𝐀𝐑𝐀 𝐄𝐍𝐕𝐈𝐎 ☠️👑.`)
} else if(isAntiPv3) {
Config2.antipv3 = false
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`𝑨𝑵𝑻𝑰𝑷𝑽 𝑭𝑶𝑰 𝑫𝑬𝑺𝑨𝑻𝑰𝑽𝑨𝑫𝑶, 𝑨𝑮𝑶𝑹𝑨 𝑸𝑼𝑨𝑳𝑸𝑼𝑬𝑹 𝑷𝑬𝑺𝑺𝑶𝑨 𝑷𝑶𝑫𝑬 𝑴𝑬 𝑬𝑵𝑽𝑰𝑨𝑹 𝑴𝑬𝑵𝑺𝑨𝑮𝑬𝑴 🤡🙄.`)
}
break

case 'gitclone': {
  if (!So_Dono) return reply(msg.SoDono);
    
try {
if (!args[0]) {  
  return reply(`📦 Exemplo de uso:\n${prefix}gitclone https://github.com/usuario/repositorio`);  
}  

const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const match = args[0].match(regex);  

if (!match) return reply('❌ Link inválido! Envie um link válido do GitHub.');  

let [, user, repo] = match;  
repo = repo.replace(/.git$/, '');   
const url = `https://api.github.com/repos/${user}/${repo}/zipball`;  

const headRes = await fetch(url, { method: 'HEAD' });  
if (!headRes.ok) {  
  return reply('⚠️ Repositório não encontrado ou privado.');  
}  

const dispo = headRes.headers.get('content-disposition');  
const filename = dispo  
  ? dispo.match(/attachment; filename=(.*)/)[1]  
  : `${repo}.zip`;  

await reply(`📦 Baixando o repositório de *${user}/${repo}*...\nAguarde um momento.`);  

await cristal.sendMessage(  
  from,  
  {  
    document: { url: url },  
    fileName: filename,  
    mimetype: 'application/zip',  
    contextInfo: channelcristal,
  },  
  { quoted: selo }  
);  

await reply(`✅ Repositório *${repo}* enviado com sucesso!`);

} catch (error) {
console.error('Erro no gitclone:', error);
await reply('❌ Ocorreu um erro ao baixar o repositório. Verifique se o link está correto.');
}
break;
}

case "cristalzip": {
  try {
if (!So_Dono) return reply(msg.SoDono);

    await reagir(from, "🗜️");

    const AdmZip = require("adm-zip");
    
    const pastaBot = process.cwd();

    const nomeZip = `CristalBotV1.zip`;
    const caminhoZip = path.join(pastaBot, nomeZip);

    if (fs.existsSync(caminhoZip)) {
      fs.unlinkSync(caminhoZip);
    }

    const zip = new AdmZip();

    zip.addLocalFolder(pastaBot, "", (filename) => {

      if (filename.includes("node_modules")) return false;
      if (filename.includes(nomeZip)) return false;
      return true;
    });

    zip.writeZip(caminhoZip);

    await reply(msg.Aguarde);

    await cristal.sendMessage(from, {
      document: { url: caminhoZip },
      fileName: nomeZip,
      mimetype: "application/zip",
      contextInfo: channelcristal
    });

  } catch (err) {
    console.error("Erro no cristalzip:", err);
    reply("❌ Erro ao criar o ZIP do bot.");
  }
}
break;

case 'botoff':
case 'boton': {
if (!So_Dono) return reply(msg.SoDono);

try {
if (command === 'botoff') {
if (Config2.botoff) return reply("❌ Bot já está desligado.")

Config2.botoff = true
fs.writeFileSync('./dono/nescessário.json', JSON.stringify(Config2, null, 2))

return reply("⛔ Desligado com sucesso.")
}

if (command === 'boton') {

Config2.botoff = false
fs.writeFileSync('./dono/nescessário.json', JSON.stringify(Config2, null, 2))

return reply("✅ Ligado com sucesso.")
}

} catch (e) {
console.error(e)
reply("Erro ao alterar estado do bot.")
}

}
break

case 'so_dono':
case 'apenasdono': 
case 'sodono':{
 if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
Config2.isSoDono = !Config2.isSoDono
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4))
if (Config2.isSoDono) {
  
reply("✅ Agora nenhum membro comum pode usar meus comandos todos estao Desativados.")
} else {
  
 reply("✅ Sucesso Todos os comandos foram reativados, qualquer um pode usar novamente.")
 }
 break
}

case 'verificado':
if (!So_Dono) return reply(msg.SoDono);
if(!isVerificado) {
Config2.verificado = true
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`O verificado foi Ativado`)
} else if(isVerificado) {
Config2.verificado = false
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`O verificado foi Desativado`)
}
break

case 'botoes':
if (!So_Dono) return reply(msg.SoDono);
if(!isButtons) {
Config2.buttons = true
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`Buttons foi Ativado`)
} else if(isButtons) {
Config2.buttons = false
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`Buttons foi Desativado`)
}
break

case 'exec': {
if (!So_Dono) return reply(msg.SoDono);
  const { exec } = require('child_process')
  if (!isQuoted) return reply('❌ Responda um comando.')
  const cmd =
    info.message.extendedTextMessage.contextInfo.quotedMessage.conversation ||
    info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage?.text

  if (!cmd) return reply('❌ Comando inválido.')

  exec(cmd, { maxBuffer: 1024 * 1024 * 5 }, (err, stdout, stderr) => {
    let output = ''

    if (stdout) output += `📤 *SAÍDA:*\n${stdout}\n`
    if (stderr) output += `⚠️ *AVISOS:*\n${stderr}\n`

    if (err) {
      return reply(`❌ *ERRO REAL:*\n${err.message}`)
    }

    reply(output || '✔️ Comando executado com sucesso.')
    console.log(`[EXEC] => ${cmd}`)
  })
}
break

case 'eval': {
  if (!So_Dono) return reply(msg.SoDono);

  if (!isQuoted) return reply('❌ Responda um código JS.')

  try {
    const code =
      info.message.extendedTextMessage.contextInfo.quotedMessage.conversation ||
      info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage?.text

    const result = await eval(`(async () => { ${code} })()`)

    reply(String(result ?? '✔️ Executado.'))
    console.log(`[EVAL] => ${code}`)
  } catch (e) {
    reply(`❌ ERRO:\n${e.message}`)
  }
}
break

case 'reviverqr':
  case 'limparqr':
if (!So_Dono) return reply(msg.SoDono);

exec('rm -rf ~/.npm/*', (error, stdout, stderr) => {
if(error) {console.error(`Erro ao limpar .npm: ${error.message}`);
} else {console.log(stdout || "Pasta .npm limpa com sucesso.")}
});

exec('cd "dono/Qr-CristalV1" && rm -rf pre-key* sender* session*', (error, stdout, stderr) => {
if(error) {console.error(`Erro ao limpar sessões: ${error.message}`);
} else {console.log(stdout || "Sessões da Cristal limpas com sucesso.")}
});

setTimeout(async () => {
reply("*PODE DEIXAR MESTRE*🎖️\n\n⇒ Reiniciando..");
setTimeout(async () => {
process.exit();
}, 1200);
}, 1000);
break

case 'dono1':
  case 'subdono':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply(`Digite o novo número do dono. Ex: *${prefix + command} 66832297725*`);
const novodn1 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono1 = novodn1;
Config2.dono1 = Dono1;
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Pronto mestre!*\n${NomeBot} agora tem um novo dono!\n\n👑 Dono 1: wa.me/${Dono1}`);
break;


case 'dono2':
  case 'subdono2':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply(`Digite o novo número do dono. Ex: *${prefix + command} 66832297725*`);
const novodn2 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono2 = novodn2;
Config2.dono2 = Dono2;
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 2: wa.me/${Dono2}`);
break;


case 'dono3':
  case 'subdono3':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply(`Digite o novo número do dono. Ex: *${prefix + command} 66832297725*`);
const novodn3 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono3 = novodn3;
Config2.dono3 = Dono3;
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 3: wa.me/${Dono3}`);
break;

case 'dono4':
  case 'subdono4':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply(`Digite o novo número do dono. Ex: *${prefix + command} 66832297725*`);
const novodn4 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono4 = novodn4;
Config2.dono4 = Dono4;
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 4: wa.me/${Dono4}`);
break;


case 'dono5':
  case 'subdono5':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply(`Digite o novo número do dono. Ex: *${prefix + command} 66832297725*`);
const novodn5 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono5 = novodn5;
Config2.dono5 = Dono5;
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 5: wa.me/${Dono5}`);
break;


case 'dono6':
  case 'subdono6':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply(`Digite o novo número do dono. Ex: *${prefix + command} 66832297725*`);
const novodn6 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono6 = novodn6;
Config2.dono6 = Dono6;
fs.writeFileSync("./dono/nescessário.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 6: wa.me/${Dono6}`);
break;

case 'bangp':
case 'unbangp':
  if (!So_Dono) return reply(msg.SoDono);
  if (!isGroup) return reply(msg.SoEmGrupos);

  if (command === 'bangp') {
    if (isBanGrupo) return reply('🚫 Este grupo já está banido.');
    dataGp[0].bangp = true;
    setGp(dataGp);
    reply('✅ Grupo banido com sucesso! não ire responder mais mensagens aqui.');
  } 
  
  else if (command === 'unbangp') {
    if (!isBanGrupo) return reply('ℹ️ Este grupo não está banido.');
    dataGp[0].bangp = false;
    setGp(dataGp);
    reply('🎉 Grupo desbanido! voltarei a responder normalmente.');
  }
break;

case 'figuid':
case 'idfig':
case 'hashfig': {
if (!So_Dono) return reply(msg.SoDono);
if (!isQuotedSticker) 
return reply('❌️ *Responda a uma figurinha para ver a hash.*')

try {
const stickerMsg = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
if (!stickerMsg || !stickerMsg.fileSha256)
 return reply('⚠️ *Figurinha inválida ou sem hash detectável.*')

const hash = stickerMsg.fileSha256.toString('base64')
reply(`${hash}`)
} catch (e) {
console.error('[ERRO HASHFIG]', e)
reply('❌ *Erro ao extrair hash da figurinha.*')
}
}
break

case 'addhash': {
if (!So_Dono) return reply(msg.SoDono);
const chatId = info.key.remoteJid;
const stickerMessage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;

if (!stickerMessage || !stickerMessage.fileSha256) {
return cristal.sendMessage(chatId, { text: '*ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ ᴘᴀʀᴀ ᴀᴅɪᴄɪᴏɴᴀʀ ᴀ ʜᴀsʜ.*' });
}

const hash = stickerMessage.fileSha256.toString('base64');
const tipo = args[0]?.toLowerCase();
const tiposValidos = ['fechar', 'fechar2', 'abrir', 'marcar', 'ban'];

if (!tipo || !tiposValidos.includes(tipo)) {
return cristal.sendMessage(chatId, {
text: '*ᴜsᴏ ᴄᴏʀʀᴇᴛᴏ:* #addhash [ᴛɪᴘᴏ]\n*ᴛɪᴘᴏs ᴅɪsᴘᴏɴɪ́ᴠᴇɪs:* fechar, fechar2, abrir, marcar, ban\n*ᴇxᴇᴍᴘʟᴏ:* #addhash ban'
});
}

const db = JSON.parse(fs.readFileSync(hashFilePath));
if (!db[tipo]) db[tipo] = [];

if (db[tipo].includes(hash)) {
return cristal.sendMessage(chatId, {
text: `*ᴇssᴀ ʜᴀsʜ ᴊᴀ́ ᴇsᴛᴀ́ ʀᴇɢɪsᴛʀᴀᴅᴀ ᴇᴍ:* ${tipo.toUpperCase()}`
});
}

db[tipo].push(hash);
fs.writeFileSync(hashFilePath, JSON.stringify(db, null, 2));

cristal.sendMessage(chatId, {
text: `*✅ ʜᴀsʜ [ ${tipo.toUpperCase()} ] ᴀᴅɪᴄɪᴏɴᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ*`
});
}
break;

case 'verificarhash': {
if (!So_Dono) return reply(msg.SoDono);
if (!isQuotedSticker) return reply('❌ *Responda a uma figurinha para verificar a hash.*');

try {

const stickerMsg = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage;
if (!stickerMsg || !stickerMsg.fileSha256) 
 return reply('⚠️ *Figurinha inválida ou sem hash detectável.*');

const hash = stickerMsg.fileSha256.toString('base64');

const hashFigurinhas = JSON.parse(fs.readFileSync('./datab/hashFigurinhas.json'));

let encontrado = false;
let tipoEncontrado = '';

for (const tipo in hashFigurinhas) {
 if (hashFigurinhas[tipo].includes(hash)) {
encontrado = true;
tipoEncontrado = tipo;
break;
 }
}

let resposta = `🧩 *HASH DETECTADA:*\n${hash}\n\n`;

if (encontrado) {
 resposta += `✅ *Esta hash já está cadastrada na categoria:* ${tipoEncontrado.toUpperCase()}`;
} else {
 resposta += '⚠️ *Esta hash ainda não está cadastrada em nenhuma categoria.*';
}

reply(resposta);

} catch (e) {
console.error('[ERRO VERIFICARHASH]', e);
reply('❌ *Erro ao verificar a hash da figurinha.*');
}
}
break;


case 'listahashb': 
if (!So_Dono) return reply(msg.SoDono);

try {
const hashFigurinhas = JSON.parse(fs.readFileSync('./datab/hashFigurinhas.json'))
let conteudo = '𖣐 Hᴀsʜᴇs ᴅᴇ ꜱᴛɪᴄᴋᴇʀs ᴄᴀᴅᴀꜱᴛʀᴀᴅᴀꜱ 𖣐\n\n'

for (const tipo in hashFigurinhas) {
conteudo += `✦ ${tipo.toUpperCase()}\n`
hashFigurinhas[tipo].forEach((hash, i) => {
conteudo += `#${i + 1} → ${hash}\n`
})
conteudo += '\n'
}

const filePath = './datab/hash_figurinhas.txt'
fs.writeFileSync(filePath, conteudo.trim())

await cristal.sendMessage(from, {
document: fs.readFileSync(filePath),
mimetype: 'text/plain',
fileName: 'hash_figurinhas.txt',
caption: '*📦 Lista de hashes cadastradas.*'
}, { quoted: info })

fs.unlinkSync(filePath)

} catch (e) {
console.error('[ERRO] Falha ao ler ou enviar o arquivo:', e)
reply('*❌ Eʀʀᴏ ᴀᴏ ʟᴇʀ ᴏ ᴀʀǫᴜɪᴠᴏ ᴅᴇ ғɪɢᴜʀɪɴʜᴀs.*')
}
break

case 'listahash':
if (!So_Dono) return reply(msg.SoDono);
try {
const hashFigurinhas = JSON.parse(fs.readFileSync('./datab/hashFigurinhas.json'))
let resposta = '*𖣐 Hᴀsʜᴇs ᴅᴇ ꜱᴛɪᴄᴋᴇʀs ᴄᴀᴅᴀꜱᴛʀᴀᴅᴀꜱ 𖣐*\n\n'

for (const tipo in hashFigurinhas) {
resposta += `*✦ ${tipo.toUpperCase()}*\n`
hashFigurinhas[tipo].forEach((hash, i) => {
resposta += `> #${i + 1} → _${hash}_\n`
})
resposta += '\n'
}

reply(resposta.trim())
} catch (e) {
console.error('[ERRO] Falha ao ler o JSON de figurinhas:', e)
reply('*❌ Nᴀ̃ᴏ ғᴏɪ ᴘᴏssɪ́ᴠᴇʟ ʟᴇʀ ᴏ ᴀʀǫᴜɪᴠᴏ ᴅᴇ ғɪɢᴜʀɪɴʜᴀs.*')
}
break

case 'delhash':
if (!So_Dono) return reply(msg.SoDono);
if (!args[0]) return reply(`*❌ Fᴏʀɴᴇçᴀ ᴏ ʜᴀsʜ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴇxᴄʟᴜɪʀ.*\n*Ex:*\n${prefix}delhash 226,230,207,...`)

try {
const hashRemover = args[0].trim()
const hashFigurinhas = JSON.parse(fs.readFileSync('./datab/hashFigurinhas.json'))
let encontrado = false
let tipoRemovido = ''

for (const tipo in hashFigurinhas) {
const index = hashFigurinhas[tipo].indexOf(hashRemover)
if (index !== -1) {
hashFigurinhas[tipo].splice(index, 1)
encontrado = true
tipoRemovido = tipo
break
}
}

if (!encontrado) return reply('*⚠️ Hᴀsʜ ɴᴀ̃ᴏ ᴇᴄᴏɴᴛʀᴀᴅᴏ ɴᴏ ᴀʀǫᴜɪᴠᴏ.*')

fs.writeFileSync('./arquivos/jsons/hashFigurinhas.json', JSON.stringify(hashFigurinhas, null, 2))
reply(`*✅ Hᴀsʜ ᴅᴏ ᴛɪᴘᴏ: [ ${tipoRemovido.toUpperCase()} ] ʀᴇᴍᴏᴠɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*`)

} catch (e) {
console.error('[ERRO DELHASH]', e)
reply('*❌ Fᴀʟʜᴀ ᴀᴏ ʀᴇᴍᴏᴠᴇʀ ᴏ ʜᴀsʜ. Cᴏɴꜰɪʀᴇ ᴏ ғᴏʀᴍᴀᴛᴏ ᴏᴜ ᴏ ᴀʀǫᴜɪᴠᴏ.*')
}
break

case 'join': 
  case 'entrar':
case 'entrargp': {
    if (!So_Dono) return reply(msg.SoDono);
    if (!q) return reply("📌 Envie o link do grupo para eu entrar.");

    try {

        let code;
        if (q.includes('https://chat.whatsapp.com/')) {
            code = q.split('https://chat.whatsapp.com/')[1];
        } else {
            return reply("❌ Link inválido! Certifique-se de enviar o link completo do grupo.");
        }

        const response = await cristal.groupAcceptInvite(code);
        reply(`✅ Entrei no grupo com sucesso!\nNome do grupo: ${response.subject}\nID: ${response.id}`);
    } catch (err) {
        console.log(err);
        reply("❌ Não consegui entrar no grupo. Verifique se o link é válido ou se já estou no grupo.");
    }
}
break;

case 'sairgp':
case 'sair':
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
try {
cristal.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'bc':
case 'bcgroup':
case 'transmitir':
case 'transmissão': {
    if (!So_Dono) return reply(msg.SoDono);

    if (!q) 
        return reply('cd a mensagem pra eu transmitir?')

    const getGroups = await cristal.groupFetchAllParticipating()
    const groups = Object.values(getGroups)

    let enviados = 0

    for (let i = 0; i < groups.length; i++) {
        try {
            await sleep(1500)

            const txt = `「 *MENSAGEM DO MEU DONO* 」\n\n${q}`

            await cristal.sendMessage(groups[i].id, { text: txt })

            enviados++
        } catch (err) {
            console.log(`Erro ao enviar para ${groups[i].id}`)
        }
    }

    reply(
`Essa mensagem foi enviada para ${enviados} grupos`)

}
break

case 'modulos':
case 'modulo':
case 'criarjson': {
  if (!So_Dono) return reply(msg.SoDono);

  if (!q) return reply("cd o nome do json amigo?");

  const qp = q.toLowerCase();

  if (fs.existsSync(`./datab/${qp}.json`))
    return reply("JSON já existente");

  try {
    fs.writeFileSync(`./datab/${qp}.json`, JSON.stringify([], null, 2));
    reply("JSON criado com sucesso ✅");
  } catch (err) {
    reply("Erro ao criar o JSON ❌");
    console.error(err);
  }
  break;
}

case 'apagarjson':
  case 'deletarjson':
case 'rmjson': {
  if (!So_Dono) return reply(msg.SoDono);

  if (!q) return reply("cd o nome do json?");

  const qp = q.toLowerCase();

  if (!fs.existsSync(`./datab/${qp}.json`))
    return reply("JSON não existente");

  try {
    fs.unlinkSync(`./datab/${qp}.json`);
    reply("JSON deletado com sucesso ✔️");
  } catch (err) {
    reply("Erro ao deletar o JSON ❌");
    console.error(err);
  }
  break;
}

case 'addvip': {
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
let tempovip = q.split("/")[1];
if (!menc_os2  || !tempovip) 
return reply(`✳ Exemplo:
${prefix}addvip @user/4d
${prefix}addvip @user/2h
${prefix}addvip @user/10min`);

let result = addVIP(menc_os2, tempovip);
if (!result) return reply("❌ Formato inválido. Use d, h ou min.");

reply(`✅ VIP ATIVADO!

👤 Usuário: @${menc_os2.split("@")[0]}
⏰ Expira em: ${new Date(result).toLocaleString("pt-BR")}`);
}
break;

case 'ver-vip': 
  case `vervip`: {
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
if (!isVIP(sender)) return reply(msg.NaoVipp)
let exp = getExpire(sender);
reply(`🌟 SEU VIP

✅ Status: ATIVO
⏳ Expira: ${new Date(exp).toLocaleString("pt-BR")}`);
}
break;

case 'totalcmds':
case 'totalcmd':
case 'totalcomando': {

  const from = messageDetails.key.remoteJid;
  const enviar = async (texto) => {
    await cristal.sendMessage(from, { text: texto });
  };

  fs.readFile('./cristal.js', 'utf8', (err, data) => {
    if (err) {
      console.error("Erro ao ler cristal.js:", err);
      return enviar("❌ Ocorreu um erro ao contar os comandos.");
    }
    
    const regex = /case\s*["'`](.+?)["'`]/g;
    let match;
    let caseNames = [];

    while ((match = regex.exec(data)) !== null) {
      caseNames.push(match[1]);
    }

    const totalCount = caseNames.length;

    reply(`> 𝑻𝑬𝑵𝑯𝑶 𝑼𝑴 𝑻𝑶𝑻𝑨𝑳 𝑫𝑬 ${totalCount} 𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺`);
  });
}
break;

case 'screenshotweb': case 'ssweb':
case 'print': case 'printdesite':
if (!isVIP && !So_Dono) return reply(msg.NaoVipp);
if(!q.trim()) return reply(`Faltando a url do site que quer tirar print, Exemplo: ${prefix+command} https://google.com\n\nNão esqueça do https se o site tiver, ou http se não for um site com ssl`)
try {
cristal.sendMessage(from, {image: {url: `https://api.bronxyshost.com.br/api-bronxys/print_de_site?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`}}, {quoted: info}) 
} catch {
return reply("Erro..");
}
break;

case 'delvip': {
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
if(!menc_os2) return reply("cade o user?")
if(!isVIP(menc_os2)) return reply("o usuário mencionado não é vip");
removeVIP(menc_os2);
reply("✅ VIP removido.");
}
break;

case 'wprivacygp': {
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);

    if (!args[0]) {
        return reply(
            `❌ Uso incorreto!\n\n` +
            `📌 Use:\n` +
            `• ${prefix}wprivacygp -all\n` +
            `• ${prefix}wprivacygp -cntt\n` +
            `• ${prefix}wprivacygp -noall\n` +
            `• ${prefix}wprivacygp --help`,
            from
        );
    }

    if (args[0] === '--help') {
        return reply(
            `👥 *Privacidade de Grupos*\n\n` +
            `-all   → Qualquer pessoa pode me adicionar\n` +
            `-cntt  → Apenas meus contatos\n` +
            `-noall → Ninguém pode me adicionar\n\n` +
            `Exemplo:\n${prefix}wprivacygp -noall`,
            from
        );
    }

    try {
        if (args[0] === '-all') {
            await cristal.updateGroupsAddPrivacy('all');
            reply('✅ Agora qualquer pessoa pode me adicionar em grupos.', from);
        } 
        else if (args[0] === '-cntt') {
            await cristal.updateGroupsAddPrivacy('contacts');
            reply('✅ Apenas meus contatos podem me adicionar em grupos.', from);
        } 
        else if (args[0] === '-noall') {
            await cristal.updateGroupsAddPrivacy('none');
            reply('✅ Agora ninguém pode me adicionar em grupos.', from);
        } 
        else {
            reply('❌ Opção inválida. Use --help para ver os comandos.', from);
        }
    } catch (err) {
        console.error(err);
        reply('❌ Erro ao alterar a privacidade de grupos.', from);
    }
}
break;

case 'wprivacyph': {
    if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
    if (!args[0]) {
        return reply(
            `❌ Uso incorreto!\n\n` +
            `📌 Use:\n` +
            `• ${prefix}wprivacyph -all\n` +
            `• ${prefix}wprivacyph -cntt\n` +
            `• ${prefix}wprivacyph -noall\n` +
            `• ${prefix}wprivacyph --help`,
            from
        );
    }

    if (args[0] === '--help') {
        return reply(
            `📸 *Privacidade da Foto do Perfil*\n\n` +
            `-all   → Todos podem ver\n` +
            `-cntt  → Apenas contatos\n` +
            `-noall → Ninguém pode ver\n\n` +
            `Exemplo:\n${prefix}wprivacyph -cntt`,
            from
        );
    }

    try {
        if (args[0] === '-all') {
            await cristal.updateProfilePicturePrivacy('all');
            reply('✅ Minha foto de perfil agora está visível para todos.', from);
        } 
        else if (args[0] === '-cntt') {
            await cristal.updateProfilePicturePrivacy('contacts');
            reply('✅ Minha foto de perfil agora está visível apenas para contatos.', from);
        } 
        else if (args[0] === '-noall') {
            await cristal.updateProfilePicturePrivacy('none');
            reply('✅ Minha foto de perfil agora está privada para todos.', from);
        } 
        else {
            reply('❌ Opção inválida. Use --help para ver os comandos.', from);
        }
    } catch (err) {
        console.error(err);
        reply('❌ Erro ao alterar a privacidade da foto.', from);
    }
}
break;

case 'bio-bot':
case 'biobot':
if (!So_Dono) return reply(msg.SoDono);

const BioBot = args.join(" ");
await cristal.updateProfileStatus(`${BioBot}`);
reply(`Bio trocada com Sucesso, nova bio: *${BioBot.trim()}*`);
break;

case 'name-perfil-bot':
case 'nomebot':
if (!So_Dono) return reply(msg.SoDono);

const NameBot = args.join(" ");
await cristal.updateProfileName(`${NameBot}`)
reply(`Sucesso:*${NameBot.trim()}*`);
break;

case 'savemp3': {
  try {
    if (!So_Dono) return reply(msg.SoDono);
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!args[0]) return reply(`✍️ Escreva o nome do arquivo com extensão.\nEx: ${prefix}savemp3 audio.mp3`);

    const fileName = cleanFileName(args[0]); 
    const filePath = path.join(audiolist, fileName);

    let audioMsg = null;
    if (isAudio) audioMsg = messageDetails.message.audioMessage;
    else if (isQuotedAudio) audioMsg = messageDetails.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage;

    if (!audioMsg) return reply('⚠️ Envie ou responda a um áudio para salvar.');

    const stream = await downloadContentFromMessage(audioMsg, 'audio');
    let buffer = Buffer.from([]);
    for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);

    fs.writeFileSync(filePath, buffer);
    reply(`✅ Áudio salvo como: ${fileName}`);
  } catch (err) {
    console.log(err);
    reply('❌ Ocorreu um erro ao salvar o áudio.');
  }
} break;

case 'delmp3': {
  try {
    if (!So_Dono) return reply(msg.SoDono);
    if (!isGroup) return reply(msg.SoEmGrupos);

    if (!args[0]) return reply(`✍️ Informe o nome do áudio para deletar ou "all".\nEx: ${prefix}delmp3 gay`);
    const name = args[0].toLowerCase();

    const files = fs.readdirSync(audiolist);
    if (name === 'all') {
      files.forEach(file => fs.unlinkSync(path.join(audiolist, file)));
      return reply('🗑️ Todos os áudios foram deletados.');
    }

    let found = false;
    files.forEach(file => {
      if (file.toLowerCase().includes(name)) {
        fs.unlinkSync(path.join(audiolist, file));
        found = true;
      }
    });

    reply(found ? `✅ Áudio(s) com "${name}" deletado(s).` : `❌ Nenhum áudio com "${name}" encontrado.`);
  } catch (err) {
    console.log(err);
    reply('❌ Ocorreu um erro ao deletar o áudio.');
  }
} break;

case 'listmp3': {
  try {
    if (!So_Dono) return reply(msg.SoDono);
    if (!isGroup) return reply(msg.SoEmGrupos);

    const files = fs.readdirSync(audiolist);
    if (!files.length) return reply('⚠️ Nenhum áudio encontrado.');

    let list = '🎵 Áudios disponíveis:\n\n';
    files.forEach(file => list += `• ${file}\n`);
    reply(list);
  } catch (err) {
    console.log(err);
    reply('❌ Ocorreu um erro ao listar os áudios.');
  }
} break;

case 'fotomenu':
case 'fundomenu': {
if (!So_Dono) return reply(msg.SoDono);
let img = null;
if (isQuotedImage) {
img = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
} else if (isImage) {
img = info.message.imageMessage
} else {
return reply(`❌ Marque uma imagem ou envie uma imagem com o comando:\n\n${prefix + command}`)
}
let stream = await downloadContentFromMessage(img, 'image')
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

fs.writeFileSync('./assets/menu/menu.jpg', buffer);
reply(`✅ *Foto do menu atualizada com sucesso!*`);
}
break;

case 'setperfil': 
case 'perfilbot':{
if (!So_Dono) return reply(msg.SoDono);

let img = null

if (isQuotedImage) {
img = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
} else if (isImage) {
img = info.message.imageMessage
} else {
return reply(`❌ Marque uma imagem ou envie uma imagem com o comando:\n\n${prefix + command}`)
}
await reply("Atualizando foto do meu perfil...")
let stream = await downloadContentFromMessage(img, 'image')
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

await cristal.updateProfilePicture(botNumber, buffer)
reply("✅ Foto do meu perfil atualizada com sucesso!")
await pararDigitando(from)
}
break

case 'sermemb':
case 'sermembro': {
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
if (!isBotGroupAdmins) return reply(msg.BotAdmin);

const quemUsou = info.key.participant || info.key.remoteJid;

try {
const metadata = await cristal.groupMetadata(from);
const participante = metadata.participants.find(p => p.id === quemUsou);

await cristal.groupParticipantsUpdate(from, [quemUsou], "demote");
reply("👤 Você voltou a ser membro do grupo.");
} catch (err) {
console.error("Erro sermemb:", err);
reply("❌ Não foi possível remover seu cargo.");
}
}
break;

case 'seradm': 
 case 'adono': {
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
if (!isBotGroupAdmins) return reply(msg.BotAdmin);

const quemUsou = info.key.participant || info.key.remoteJid;

try {
const metadata = await cristal.groupMetadata(from);
const participante = metadata.participants.find(p => p.id === quemUsou);

await cristal.groupParticipantsUpdate(from, [quemUsou], "promote");
reply("👑 Agora você é administrador do grupo!");
} catch (err) {
console.error("Erro seradm:", err);
reply("❌ Não foi possível promover você.");
}
}
break;

case 'addforca':
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
if(contar(q, `/`) != 2) return reply(`Retorne após o comando o tema, a palavra e a dica que você deseja adicionar...
Ex: veículo/carro/tem 4 rodas`)
var [tema, palavra, dica] = q.split(`/`)
rgWordForcaGame(tema, palavra, dica);
txt = `🎗 *_Forca registrada com sucesso_* 🎗
🎭 *Tema:* ${iniMai(tema)}
🎨 *Palavra:* ${iniMai(palavra)}
🧶 *Dica:* ${iniMai(dica)}`
reply(txt)
break

case 'rmforca':
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
if(!q) return reply(`KD a palavra que você quer deletar?`)
rmWordForcaGame(reply, q);
break

case 'rmtema':
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
if(!q) return reply(`KD o tema que você quer deletar?`)
rmThemeForcaGame(reply, q);
break

case 'listword': case 'listaforca':
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
if(forcaWord.length <= 0) return reply(`[❗] não há palavras salvas ❌`)
txt = forcaWord.map(a => `🎈 _*Tema:* ${iniMai(a.title)}_
📚 _*Palavras ↴*_
${a.words.map(b => `\t🎲 *Nome:* ${iniMai(b.nome)}
\t🧸 *Dica:* ${iniMai(b.desc)}`).join(`\n\n`)}`).join(`\n\n-\n\n`)
reply(txt)
break

case 'listgp':
case 'listgrupos':
if (!So_Dono) return reply(msg.SoDono);
;

  try {
    const grupos = await cristal.groupFetchAllParticipating();
    const listaDeGrupos = Object.values(grupos);

    let texto = "📋 *Grupos em que eu estou:*\n\n";
    let i = 1;

    for (const grupo of listaDeGrupos) {
      try {
        const inviteCode = await cristal.groupInviteCode(grupo.id);
        texto +=
          `*${i}.* ${grupo.subject}\n` +
          `🔗 https://chat.whatsapp.com/${inviteCode}\n` +
          `🆔 ${grupo.id}\n\n`;
      } catch {
        texto +=
          `*${i}.* ${grupo.subject}\n` +
          `❌ Sem permissão para gerar link\n` +
          `🆔 ${grupo.id}\n\n`;
      }
      i++;
    }

    await reply(texto.trim());

  } catch (err) {
    console.error("Erro no comando listgp:", err);
    await reply("❌ Ocorreu um erro ao listar os grupos.");
  }
break;

case 'rm-fotobot':
case 'rmfotobot':{
if (!So_Dono) return reply(msg.SoDono);
;
await reply("Removendo a foto do meu perfil, aguarde....");
await cristal.removeProfilePicture(botNumber);
setTimeout(() =>{
reply("Sucesso, agora meu perfil não possui mais foto");
}, 1200);
} break;

case 'arqv':
case 'arqvs':
case 'arquivos':
case 'arquivo': {
if (!So_Dono) return reply(msg.SoDono);
if (!isGroup) return reply(msg.SoEmGrupos);
  
  if (!args[0]) {
    return reply(
      `𝐀𝐑𝐐𝐔𝐈𝐕𝐎\n\n` +
      `Informe o nome do arquivo a ser enviado em TXT.\n\n` +
      `Exemplo:\n` +
      `${prefix}arquivo cristal`
    )
  }

  const termo = args.join(' ')
  const raiz = process.cwd()

  const caminhoArquivo = buscarArquivo(raiz, termo)

  if (!caminhoArquivo) {
    return reply(
      `𝐍𝐀̃𝐎 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎\n\n` +
      `Nenhum arquivo correspondente foi localizado.`
    )
  }

  let conteudo
  try {
    conteudo = require('fs').readFileSync(caminhoArquivo, 'utf8')
  } catch (e) {
    return reply(
      `𝐄𝐑𝐑𝐎\n\n` +
      `Este arquivo não pode ser convertido para texto.`
    )
  }

  const nomeTxt = `${require('path').basename(caminhoArquivo)}.txt`

  await cristal.sendMessage(from, {
    document: Buffer.from(conteudo, 'utf8'),
    fileName: nomeTxt,
    mimetype: 'text/plain'
  })
}
break

case 'antiligar':
case 'antiligacao':
case 'antiligação': {
    if (!So_Dono) return reply(msg.SoDono)
const Confg = JSON.parse(fs.readFileSync('./dono/nescessário.json'))
    Confg.anticall = !Confg.anticall

    fs.writeFileSync(
        './dono/nescessário.json',
        JSON.stringify(Confg, null, 2)
    )

    const status = Confg.anticall ? "🟢 ATIVADO" : "🔴 DESATIVADO"

    await reagir(from, Confg.anticall ? "🚫" : "📞")

    reply(`
╭━━━〔 📵 *ANTI LIGAÇÃO* 〕━━━╮
┃
┃ Status: *${status}*
┃
┃ ${Confg.anticall 
   ? "Quem me ligar será *bloqueado automaticamente*."
   : "agora poderei receber ligações normalmente 🙄💔."}
┃
╰━━━━━━━━━━━━━━━━━━━━╯
`.trim())
}
break

case 'modoaluguel': {
if (!So_Dono) return reply(msg.SoDono);

  if (!args[0]) {
    return reply(
      `Use corretamente:\n\n` +
      `• ${prefix}modoaluguel 1 → Ativar\n` +
      `• ${prefix}modoaluguel 0 → Desativar`
    )
  }

  const valor = args[0]

  if (valor !== '1' && valor !== '0') {
    return reply('❌ Use apenas 1 (ativar) ou 0 (desativar).')
  }

  const settingsPath = './dono/nescessário.json'
  const settings = JSON.parse(fs.readFileSync(settingsPath))

  settings.modoaluguel = valor === '1'

  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2))

  reply(
    valor === '1'
      ? '> ✅Modo aluguel ativado, agora as pessoas terão que me alugar para usar meus comandos 😌🤩.'
      : '> ❎ Modo aluguel desativado, agora irei funcionar em qualquer grupo 🙄🥲.'
  )
}
break

//MEMBROS

case 'gerarqr':
case 'qrcode': {
try {

    if (!isVip && !So_Dono) 
        return reply(msg.NaoVipp);

    if (!args.length)
        return reply(`❌ Use assim:\n${prefix}gerarqr oi tudo bem`);


    const texto = args.join(' ').trim();

    const nomeArquivo = `qr_${Date.now()}.png`;
    const caminhoQR = path.resolve(`./assets/temp/${nomeArquivo}`);

    await QRCode.toFile(caminhoQR, texto, {
        width: 500,
        margin: 2
    });

    await cristal.sendMessage(from, {
        image: fs.readFileSync(caminhoQR),
        caption: `📲 *QR Code gerado com sucesso*\n\n📝 Texto:\n${texto}`,
        contextInfo: channelcristal
    }, { quoted: selo });

    fs.unlinkSync(caminhoQR);

} catch (e) {
    console.log(e);
    reply("❌ Erro ao gerar o QR Code.");
}
}
break;

case 'menu':
case 'm':// by Sr.Patman👑
  try {

    await reagir(from, "👀");

    const media = await prepareWAMessageMedia(
      { image: FotoMenu },
      { upload: cristal.waUploadToServer }
    );

    const txtt = `𝙻𝙸𝚂𝚃 𝙼𝙴𝙽𝚄  

👤 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${sender.split("@")[0]}
🤖 𝙱𝙾𝚃: ${NomeBot}
👑 𝙳𝙾𝙽𝙾: ${NickDono}
⌨️ 𝙿𝚁𝙴𝙵𝙸𝚇𝙾: ${prefix}
🤖 𝚅𝙴𝚁𝚂Ã𝙾: ${version}
🕘 𝙷𝙾𝚁𝙰𝚂: ${hora}
📱 Dispositivo: ${adivinha}
`.trim();

    const botoes = [
  {
    name: "single_select",
    buttonParamsJson: JSON.stringify({
      title: "𝐌𝐄𝐍𝐔",
      sections: [
        {
          title: "𝐌𝐄𝐍𝐔",
          rows: [
            {
              header: "🌀 𝐌𝐄𝐍𝐔 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋",
              title: "Abrir Menu Principal",
              description: "Comandos gerais do bot",
              id: `${prefix}m`
            },
            {
              header: "📁 𝐌𝐄𝐍𝐔 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒",
              title: "Menu de Downloads",
              description: "Downloads rápidos",
              id: `${prefix}menudown`
            },
            {
              header: "👑 𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎",
              title: "Menu do Dono",
              description: "Funções exclusivas",
              id: `${prefix}Menudono`
            },
                        {
              header: "🖼️ 𝐌𝐄𝐍𝐔 𝐋𝐎𝐆𝐎𝐒 ",
              title: "Menu de logos",
              description: "Imagens e textos",
              id: `${prefix}menulogos`
            },
            {
              header: "🛡️ 𝐌𝐄𝐍𝐔 𝐀𝐃𝐌",
              title: "Menu dos Admins",
              description: "Administração do grupo",
              id: `${prefix}Menuadm`
            },
            {
              header: "🫠 𝐌𝐄𝐍𝐔 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒",
              title: "Menu de Stickers",
              description: "Criar figurinhas",
              id: `${prefix}Menufig`
            },
            {
              header: "🤑 𝐌𝐄𝐍𝐔 𝐕𝐈𝐏",
              title: "Menu Vip",
              description: "Funções exclusivas",
              id: `${prefix}Menuvip`
            },
            {
              header: "🤖 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓",
              title: "Informações do Bot",
              description: "Status e detalhes",
              id: `${prefix}menubot`
            },
            {
              header: "⚽ 𝐌𝐄𝐍𝐔 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒",
              title: "Jogos e Diversão",
              description: "Jogos interativos",
              id: `${prefix}Brincadeiras`
            },
            {
              header: "🔍 𝐌𝐄𝐍𝐔 𝐈𝐀",
              title: "Inteligência Artificial",
              description: "Comandos de IA",
              id: `${prefix}Menu-ia`
            }
          ]
        },
        
        {
          title: "𝐒𝐈𝐒𝐓𝐄𝐌𝐀",
          rows: [
            {
              header: "𝐏𝐈𝐍𝐆 🏓",
              title: "Sobre o sistema",
              description: "Informações de desenvolvimento",
              id: `${prefix}ping`
            }
          ]
        },
        
                {
          title: "𝐀𝐋𝐔𝐆𝐔𝐄𝐋",
          rows: [
            {
              header: "𝐀𝐋𝐔𝐆𝐀𝐑 💸",
              title: "Alugar Cristal Bot",
              description: "Informações de aluguel",
              id: `${prefix}alugar`
            }
          ]
        }
        
      ]
    })
  },

  {
    name: "quick_reply",
    buttonParamsJson: JSON.stringify({
      display_text: "👑 𝐂𝐑𝐈𝐀𝐃𝐎𝐑",
      id: `${prefix}criador`
    })
  }
];



    const carouselMessage = {
      cards: [
        {
          header: {
            hasMediaAttachment: false,
            imageMessage: media.imageMessage
          },
          headerType: "IMAGE",
          body: { text: txtt },
          footer: { text: "Created by Sr.Patman👑" },
          nativeFlowMessage: { buttons: botoes }
        }
      ]
    };

    if (isButtons) {
      await cristal.relayMessage(
        from,
        {
          interactiveMessage: {
            body: {},
            carouselMessage
          }
        },
        { quoted: info }
      );
    } else {
      await cristal.sendMessage(
        from,
        {
          image: FotoMenu,
          caption: menus?.menu(
            prefix,
            sender,
            NickDono,
            NomeBot,
            NumberDono,
            version
          ),
          mentions: [sender],
        },
        { quoted: info }
      );
    }

  } catch (e) {
    console.log(e);
    reply("Erro ao enviar.");
  }
break;


case 'menufigurinhas':
 case 'menufig': { 
 
 await reagir(from, "🗿");
await cristal.sendMessage(from, {image: FotoMenu, caption: menus?.menuStickers(prefix, sender), mentions: [sender, info?.key?.remoteJid]}, {quoted: info});
} break 

case 'menuadm': {

await reagir(from, "🔥")
await cristal.sendMessage(from, {image: FotoMenu, caption: menus?.menuadm(prefix, sender), mentions: [sender, info?.key?.remoteJid]}, {quoted: info});
} break;

case 'menudono': 
case "menuowner": { 
  if(!So_Dono) return reply(msg.SoDono)
await reagir(from, "🔓")
await cristal.sendMessage(from, {image: FotoMenu, caption: menus?.menuDono(prefix, sender), mentions: [sender, info?.key?.remoteJid]}, {quoted: info});
} break;

case "menudownloads":
 case 'menudown': 
   case 'alteradores': {
   
 await reagir(from, "💎")
await cristal.sendMessage(from, {image: FotoMenu, caption: menus?.menuDown(prefix, sender), mentions: [sender, info?.key?.remoteJid]}, {quoted: info});
} break;

case "menulogos":
 case 'menulogo': 
   case 'logo': 
     case 'logos': {
     
 await reagir(from, "🖼️")
await cristal.sendMessage(from, {image: FotoMenu, caption: menus?.menuLogos(prefix, sender), mentions: [sender, info?.key?.remoteJid]}, {quoted: info});
} break;

case 'menu-ia':
case 'menuia': 
  case 'menupesquisa': {
  
await reagir(from, "🤓")
await cristal.sendMessage(from, {image: FotoMenu, caption: menus?.menuIa(prefix, sender), mentions: [sender, info?.key?.remoteJid]}, 
{quoted: info});
} break;

case 'menuvip': 
case 'menuprem': { 

await reagir(from, "🏆")
await cristal.sendMessage(from, {image: FotoMenu, caption: menus?.menuVip(prefix, sender), mentions: [sender, info?.key?.remoteJid]}, {quoted: info});
} break;

case 'menubot': { 

await reagir(from, "🤖")
await cristal.sendMessage(from, {image: FotoMenu, caption: menus?.menuBot(prefix, sender), mentions: [sender, info?.key?.remoteJid]}, {quoted: info});
} break;

case 'brincadeiras': 
  case 'menubrincadeiras': { 
  
await reagir(from, "⚽")
await cristal.sendMessage(from, {image: FotoMenu, caption: menus?.menuBn(prefix, sender), mentions: [sender, info?.key?.remoteJid]}, {quoted: info});
} break;


case 'upload': case 'imgpralink': case 'videopralink':
case "gerarlink": {
try {

    let buffer;
    let tipo;
    let isImagem = false;


    if ((isMedia && info.message?.imageMessage) || isQuotedImage) {
        reply(msg.Aguarde);

        const img = isQuotedImage
            ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
            : info.message.imageMessage;

        buffer = await getFileBuffer(img, "image");
        tipo = "Imagem";
        isImagem = true;

    } else if (
        (isMedia && info.message?.videoMessage?.seconds < 30) ||
        (isQuotedVideo &&
            info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30)
    ) {
        reply(msg.Aguarde);

        const vid = isQuotedVideo
            ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
            : info.message.videoMessage;

        buffer = await getFileBuffer(vid, "video");
        tipo = "Vídeo";

    } else if (isQuotedAudio) {
        reply(msg.Aguarde);

        const aud = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage;
        buffer = await getFileBuffer(aud, "audio");
        tipo = "Áudio";

    } else if (isQuotedSticker) {
        reply("⏳ Processando figurinha...");

        const stick = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage;
        const stream = await downloadContentFromMessage(stick, "sticker");

        buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        if (!buffer.length) return reply("❎ Erro ao baixar figurinha.");
        tipo = "Figurinha";

    } else {
        return reply(
            "Você deve marcar uma *imagem*, vídeo (até 30s), áudio ou figurinha."
        );
    }

    const url = await upload(buffer);

    const txt = `
✅ *𝕃𝕀ℕ𝕂 𝔾𝔼ℝ𝔸𝔻𝕆 ℂ𝕆𝕄 𝕊𝕌ℂ𝔼𝕊𝕊𝕆!*

📦 𝕋𝕚𝕡𝕠: ${tipo}

Use o botão abaixo 👇
`.trim();

    const botoes = [
        {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
                display_text: "🔗 𝑳𝑰𝑵𝑲",
                copy_code: url
            })
        },
    {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
            display_text: "📂 𝑨𝑩𝑹𝑰𝑹 𝑳𝑰𝑵𝑲",
            url: `${url}`
        })
    }
    ];

    if (isImagem) {
        const media = await prepareWAMessageMedia(
            { image: buffer },
            { upload: cristal.waUploadToServer }
        );

        const card = {
            header: {
                hasMediaAttachment: true,
                imageMessage: media.imageMessage
            },
            headerType: "IMAGE",
            body: { text: txt },
            nativeFlowMessage: { buttons: botoes },
            footer: { text: "Created by Sr.Patman" }
        };

        await cristal.relayMessage(
            from,
            {
                interactiveMessage: {
                    contextInfo: {
                        participant: sender,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: "🔗 Gerando link..."
                            }
                        }
                    },
                    carouselMessage: {
                        cards: [card]
                    }
                }
            },
            {}
        );

    } else {

        const template = {
            templateMessage: {
                hydratedTemplate: {
                    hydratedContentText: txt,
                    hydratedButtons: [
                        {
                            quickReplyButton: {
                                displayText: "🔗 𝕃𝕀ℕ𝕂",
                                id: `copiarlink|${url}`
                            }
                        }
                    ]
                }
            }
        };

        await cristal.sendMessage(from, template, { quoted: info });
    }

} catch (e) {
    console.log("❌ ERRO GERARLINK:", e);
    reply("❎ Ocorreu um erro ao gerar o link.");
}
}
break;

case "gerarlink2": {
  try {
    if (!isQuotedImage && !isQuotedVideo && !isQuotedAudio && !isQuotedDocument) {
      return reply("❌ Responda uma mídia válida.");
    }

    const quotedMsg = info.message.extendedTextMessage.contextInfo;
    const qMsg = quotedMsg.quotedMessage;

    const media = await downloadMediaMessage(
      {
        key: {
          remoteJid: from,
          id: quotedMsg.stanzaId,
          fromMe: false
        },
        message: qMsg
      },
      "buffer"
    );

    if (!media) return reply("❌ Erro ao baixar a mídia.");

    let tipo = "Arquivo";
    let mimetype = "application/octet-stream";

    if (isQuotedImage) {
      tipo = "Imagem 🖼️";
      mimetype = qMsg.imageMessage.mimetype;
    }
    if (isQuotedVideo) {
      tipo = "Vídeo 🎥";
      mimetype = qMsg.videoMessage.mimetype;
    }
    if (isQuotedAudio) {
      tipo = "Áudio 🎧";
      mimetype = qMsg.audioMessage.mimetype;
    }
    if (isQuotedDocument) {
      tipo = "Documento 📄";
      mimetype = qMsg.documentMessage.mimetype;
    }

    const url = await gerarLink(media, mimetype);

    if (!url) return reply("❌ Falha ao gerar link.");

    await cristal.sendMessage(from, {
      text:
`╔══════════════════════════════╗
║        🔗 LINK GERADO        ║
╚══════════════════════════════╝

📦 Tipo: ${tipo}
🔗 Link: ${url}`
    });

  } catch (err) {
    console.error("ERRO GERARLINK:", err);
    reply("❌ Erro ao gerar o link.");
  }
}
break;

case 'rankativos':
case 'rankativo': {
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
if (EV < 0) return reply(`Não há dados salvos deste grupo...`)

grupo = contadormsg[EV].participants.map(i => i)

rank = grupo.sort((a, b) =>
  ((b.mensagens + b.comandos + b.audios + b.figurinhas) -
   (a.mensagens + a.comandos + a.audios + a.figurinhas))
)

caixa = []
for (i = 0; i < (rank.length < 7 ? rank.length : 7); i++) {
  caixa.push({
    nmr: i + 1,
    id: rank[i].id,
    mensagens: rank[i].mensagens,
    comandos: rank[i].comandos
  })
}

if (caixa.length <= 0)
  return reply(`Não há membros suficientes para gerar o rank...`)

msgatv = `❤️‍🔥 *Top ${caixa.length} mais ativos do grupo ↴*

${caixa.map(c => `»${c.nmr}« @${c.id.split('@')[0]}
⇒ 📜 𝕄𝔼ℕ𝕊𝔸𝔾𝔼ℕ𝕊: ${c.mensagens}
⇒ 🤖 ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊: ${c.comandos}
⇒ 🎵 Á𝕌𝔻𝕀𝕆𝕊: ${c.audios}
⇒ 🫠 𝔽𝕀𝔾𝕌ℝ𝕀ℕℍ𝔸𝕊: ${c.figurinhas}`).join('\n\n')}`

mention(msgatv)
break
}

case 'rankinativo':
case 'rankinativos':
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
if (EV < 0) return reply(`Não há dados de mensagens deste grupo salvos...`)

grupo = contadormsg[EV].participants.map(i => i)

rank = grupo.sort((a, b) =>
  ((a.mensagens + a.comandos + a.audios + a.figurinhas) -
   (b.mensagens + b.comandos + b.audios + b.figurinhas))
)

caixa = []
for (i = 0; i < (rank.length < 7 ? rank.length : 7); i++) {
  caixa.push({
    nmr: i + 1,
    id: rank[i].id,
    mensagens: rank[i].mensagens,
    comandos: rank[i].comandos
  })
}

if (caixa.length <= 0)
  return reply(`Não há ghosts neste grupo...`)

msgintv = `👻 *Top ${caixa.length} mais ghosts do grupo ↴*

${caixa.map(c => `»${c.nmr}« @${c.id.split('@')[0]}
⇒ 📜 𝕄𝔼ℕ𝕊𝔸𝔾𝔼ℕ𝕊: ${c.mensagens}
⇒ 🤖 ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊: ${c.comandos}
⇒ 🎵 Á𝕌𝔻𝕀𝕆𝕊: ${c.audios}
⇒ 🫠 𝔽𝕀𝔾𝕌ℝ𝕀ℕℍ𝔸𝕊: ${c.figurinhas}`).join('\n\n')}`

mention(msgintv)
break

  case "metadinha": {
  if (!isGroup) return reply(msg.SoEmGrupos);
  const pastaFotos = path.join(__dirname, "assets", "fotos");
  let arquivos = fs.readdirSync(pastaFotos)
                   .filter(file => /\.(jpg|png)$/i.test(file));

  if (arquivos.length < 2) {
    await reply("❌ Não há fotos suficientes na pasta!");
    return;
  }

  let grupos = {};
  arquivos.forEach(file => {
    let base = path.parse(file).name; 
    if (!grupos[base]) grupos[base] = [];
    grupos[base].push(file);
  });

  let paresValidos = Object.values(grupos).filter(g => {
    let temJpg = g.some(f => f.toLowerCase().endsWith(".jpg"));
    let temPng = g.some(f => f.toLowerCase().endsWith(".png"));
    return temJpg && temPng;
  });

  if (paresValidos.length === 0) {
    await reply("❌ Não há pares correspondentes (.jpg + .png)!");
    return;
  }

  let par = paresValidos[Math.floor(Math.random() * paresValidos.length)];

  for (const file of par) {
    let filePath = path.join(pastaFotos, file);
    await cristal.sendMessage(messageDetails.key.remoteJid, { 
      image: { url: filePath }, 
      caption: "🖼️ Metadinha!"
    });
  }

  break;
}
  
   case 'comprarbot':
case 'suporte-dono': 
case "criador": {
try {

const waLink = `https://wa.me/${NumberDono}`;

await cristal.sendMessage(from, {
    react: { text: "👑", key: info?.key }
});

let foto;
try {
    foto = await cristal.profilePictureUrl(sender, "image");
} catch {
    foto = `./assets/menu/menu.jpg`;
}

const txt = `
👑 *MEU CRIADOR*

💳 𝑵𝑶𝑴𝑬: ${NickDono}

𓆝 𓆟 𓆞
`.trim();

const media = await prepareWAMessageMedia(
    { image: { url: foto } },
    { upload: cristal.waUploadToServer }
);

const botoes = [
{
    name: "cta_copy",
    buttonParamsJson: JSON.stringify({
        display_text: "👑 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷 𝑫𝑶 𝑴𝑬𝑼 𝑫𝑶𝑵𝑶",
        copy_code: waLink
    })
},
    {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
            display_text: "📱 𝑨𝑩𝑹𝑰𝑹",
            url: `${waLink}`
        })
    }
];

const card = {
header: {
    hasMediaAttachment: true,
    imageMessage: media.imageMessage
},
headerType: "IMAGE",
body: { text: txt },
nativeFlowMessage: { buttons: botoes },
footer: { text: "Created by Sr.Patman" }
};

await cristal.relayMessage(
from,
{
    interactiveMessage: {
        contextInfo: {
            participant: sender,
            quotedMessage: {
                extendedTextMessage: {
                    text: "📲 Contato do meu criador"
                }
            }
        },
        carouselMessage: {
            cards: [card]
        }
    }
},
{}
);

} catch (e) {
console.log("Erro no criador:", e);
reply("❌ Erro ao enviar contato do criador.");
}
}
break;

case 'infobot':
setTimeout(() => {reagir(from, "✅")}, 300)
reply(`Esses são os comandos mais usados recentemente pelos usuários.

> ${prefix}menu
 Esse comando vai mostrar a lista de todos os menus que tem, sem Excessão de nenhum deles.

> ${prefix}s
 esse comando faz figurinhas de fotos e videos.

> ${prefix}play
Use este comando para pedir músicas... Exemplo: *${prefix}play tipo minado*.

> ${prefix}topmusic 
Esse comando mostrara os top 10 mais músicas escutadas do YouTube.

> ${prefix}pinterest 
esse comando envia fotos do pinterest de acordo com a pesquisa.

> ${prefix}metadinha 
Esse comando mostra duas fotos, uma na versão masculino e uma na versão feminina.

> ${prefix}ping
Esse comando vai ser a velocidade de bot, para ver se está lento ou rápido.

> ${prefix}bug
Este comando serve para você reportar qualquer tipo de bug ou defeitos no bot.

> ${prefix}sugestão
O mesmo é para caso você tenha alguma sugestão para melhorar nosso serviço... Estamos sempre ouvindo a opinião do público.

> ${prefix}alugar
_Este comando irá mostrar todos os preços disponíveis de aluguéis para você... Caso se interesse em algum, use o comando *${prefix}criador,* e feche contrato com o nosso serviço.

${NomeGrupo}`)
break

case 'responda':
  case 'teste':
    case 'testar':
      case 'testes':
        case 't':
          case 'test':
reply("salvando......")
break

case 'grupofc':
case 'gpofc':
  reply("EM BREVE")
break; 

case 'fbi02':
case 'neext02':
  reply(`
  ㄊ🅵︎𝅇🅱︎𝅇🅸︎ㄊ 𝗜𝗜˚.🎐⃞⃛˚•.̶〫〫〫࿐ ࿔:･ﾟ
  𝐎 𝐏ortão ao nosso grupo de amizades.. 𝐒eja muito bem vind@!! ⋆˚࿔
  ࿐₊°𓇼 𝐀ntes de pisar no nosso grupo, aqui você já fica sabendo das nossas regras, para conversar sem ter problemas! ༄.°

࿔‧ ֶָ֢𓂃 𓈒𓏸‪‪*‧𝗥𝗘𝗚𝗥𝗔𝗦‧* 𓂃 ོ☼𓂃‧࿔

𓂃 ࣪˖ꕀ🦐 𝐏roibido…

𝐃ivul 
𝟏𝟖+ 
𝐋ink 
𝐅lood/𝐒pam 
𝐆ore 
𝐃esrespeito/𝐏reconceito 
𝐍azismo

Link do grupo abaixo:
> https://chat.whatsapp.com/CJJXKolXXmHE5YsyEEZUU8
༄.°∘˙࿐ ࿔*:･ﾟ"「*🎐*」"°࿐ ࿔*:˚.•༄`)
break; 

case 'comunidade':
case 'channel':
case 'canal': {
await reply("> Esse e o canal sobre todas as minhas atualizações.");
await reply("https://whatsapp.com/channel/0029Vb5vAFrI1rckNRK1Yl2C");
break; 
}

case 'avaliar': 
  case 'avalie': 
  if (!q || isNaN(q))
  
    return reply(`❌ Use: ${prefix}avaliar 1/10`)
    
  const nota = Number(q)
  if (nota < 1 || nota > 10)
    return reply('❌ A nota deve ser entre 1 e 10.')

  const nome = info.pushName || 'Sem nome'
  const numero = sender.split('@')[0]
  const local = isGroup ? `Grupo: ${NomeGrupo}` : 'Privado'
  const data = new Date().toLocaleString('pt-BR')

  const mensagemDono =
`⭐ NOVA AVALIAÇÃO DO BOT

👤 Nome: ${nome}
📱 Número: ${numero}
⭐ Nota: ${nota}/5
📍 Local: ${local}
🕒 Data: ${data}`

  try {
    await cristal.sendMessage(MeuNumero, { text: mensagemDono })
    await reply('✅ Avaliação enviada com sucesso! ⭐')
  } catch (e) {
    console.log('ERRO AO ENVIAR AVALIAÇÃO:', e)
    await reply('❌ Erro ao enviar avaliação ao dono.')
  }

break

case 'sugestao':
case 'sugestão':
try {
    setTimeout(() => {
        reagir(from, "💡");
    }, 300);

    if (!args.length)
        return reply(
            `💡 *Envie sua sugestão assim:*\n\n` +
            `${prefix}sugestao Crie um comando que faça tal coisa...`
        );

    const sugestao = args.join(" ").trim();

    if (sugestao.length < 10)
        return reply("❌ Sua sugestão precisa ter pelo menos 10 caracteres.");

    if (sugestao.length > 800)
        return reply("❌ Máximo permitido: 800 caracteres.");

    const numero = sender.split("@")[0];

    const textoSugestao = 
`💡 *NOVA SUGESTÃO RECEBIDA*

👤 *De:* wa.me/${numero}
📛 *Nome:* ${pushname}
📍 *Local:* ${isGroup ? `Grupo: ${NomeGrupo}` : "Mensagem privada"}

📝 *Sugestão:*
${sugestao}
`;

    await cristal.sendMessage(MeuNumero, { text: textoSugestao }, { quoted: selo });

    reply(
        "✅ Sua sugestão foi enviada ao meu dono!\n" +
        "Ela será analisada e pode ser usada em futuras atualizações."
    );
} catch (e) {
    console.log(e);
    reply("❌ Erro ao enviar sua sugestão.");
}
break;

case 'bot':
  await reagir(from, "🤖");
  await enviarAudio("./assets/audios/bot.mp3")
  await reply("oq você quer?")
  break

case 'tagme':
mention(`@${sender.split("@")[0]} 👤`)
break

case 'bug': 
  
  if (!q)
    return reply(`❌ Use: ${prefix}bug comando | descrição do problema`)

  const mensagemBug =
`🐞 RELATO DE BUG NO BOT

👤 Nome: ${pushname}
📱 Número: ${sender.split("@")[0]}
📍 Local: ${isGroup ? `Grupo: ${NomeGrupo}` : "Mensagem privada"}

🧩 Bug:
${q}`

  try {
    await cristal.sendMessage(MeuNumero, { text: mensagemBug })
    await reply('🐞 Bug enviado com sucesso! Obrigado, jaja esse probleminha sers resolvido.')
  } catch (err) {
    console.log('ERRO AO ENVIAR BUG:', err)
    await reply('❌ Erro ao enviar bug ao meu dono.')
  }
break

case "pix": {
try {

const chavePix = "20641078781";

await cristal.sendMessage(from, {
    react: { text: "💸", key: info?.key }
});

   const foto = "http://files.catbox.moe/e6um8y.jpg";


const txt = `
💸 *PAGAMENTO VIA PIX*

📌 Para alugar o bot, utilize a chave abaixo:

📸 Após o pagamento, envie o comprovante no contato do meu mestre por gentileza, nome do Pix deverá ser Daniel [...] Bruschi.
`.trim();

const media = await prepareWAMessageMedia(
    { image: { url: foto } },
    { upload: cristal.waUploadToServer }
);

const botoes = [
{
    name: "cta_copy",
    buttonParamsJson: JSON.stringify({
        display_text: "📋 𝐂𝐎𝐏𝐈𝐀𝐑 𝐂𝐇𝐀𝐕𝐄 𝐏𝐈𝐗",
        copy_code: chavePix
    })
},
{
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: "💬 𝐅𝐀𝐋𝐀𝐑 𝐂𝐎𝐌 𝐎 𝐃𝐎𝐍𝐎",
        url: `https://wa.me/${NumberDono}`
    })
}
];

const card = {
header: {
    hasMediaAttachment: true,
    imageMessage: media.imageMessage
},
headerType: "IMAGE",
body: { text: txt },
nativeFlowMessage: { buttons: botoes },
footer: { text: "create by - Sr.Patman👑" }
};

await cristal.relayMessage(
from,
{
    interactiveMessage: {
        contextInfo: {
            participant: sender,
            quotedMessage: {
                extendedTextMessage: {
                    text: "💸 Informações de pagamento PIX"
                }
            }
        },
        carouselMessage: {
            cards: [card]
        }
    }
},
{}
);

} catch (e) {
console.log("Erro no pix:", e);
reply("❌ Erro ao enviar informações do PIX.");
}
}
break;

case 'aluguel':
case 'alugueis':
case 'alugar':
case 'alugarbot':
case 'loja':
case 'aluguelbot': {

  try {
    await reagir(from, "🤖");

    const cristalMedia = await prepareWAMessageMedia(
      { image: { url: './assets/menu/menu.jpg' } },
      { upload: cristal.waUploadToServer }
    );

    const msg = generateWAMessageFromContent(
      from,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: "*CRISTAL  - BOT — PLANOS DE ASSINATURA*"
              },
              carouselMessage: {
                cards: [
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
                      ...cristalMedia,
                      title: "🆓 *Teste Grátis*",
                      subtitle: "2 horas de uso",
                      hasMediaAttachment: false
                    }),
                    body: {
                      text:
`✔️ Experimente sem pagar nada
⏳ Duração: 24 horas`
                    },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson: JSON.stringify({
                            display_text: "🎁 QUERO TESTAR",
                            url: "https://wa.me/66832297725?text=quero%20fazer%20o%20teste%20gr%C3%A1tis%20de%2024%20horas%20da%20Cristal%20Bot."
                          })
                        }
                      ]
                    }
                  },
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
                      ...cristalMedia,
                      title: "💸 *Plano Semanal — R$02,50*",
                      subtitle: "1 dias",
                      hasMediaAttachment: false
                    }),
                    body: {
                      text:
`⏳ Duração: 7 dias
💰 Valor: R$02,50`
                    },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson: JSON.stringify({
                            display_text: "📆 ALUGAR 7 DIAS",
                            url: "https://wa.me/66832297725?text=Quero%20alugar%20a%20Cristal%20Bot%20por%207%20dias."
                          })
                        }
                      ]
                    }
                  },

                  {
                    header: proto.Message.InteractiveMessage.Header.create({
                      ...cristalMedia,
                      title: "💸 *Plano Mensal — R$10,00*",
                      subtitle: "30 dias",
                      hasMediaAttachment: false
                    }),
                    body: {
                      text:
`⏳ Duração: 30 dias
💰 Valor: R$10,00`
                    },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson: JSON.stringify({
                            display_text: "📅 ALUGAR 30 DIAS",
                            url: "https://wa.me/66832297725?text=Quero%20alugar%20a%20Cristal%20Bot%20por%2030%20dias."
                          })
                        }
                      ]
                    }
                  },

                  {
                    header: proto.Message.InteractiveMessage.Header.create({
                      ...cristalMedia,
                      title: "💎 *Plano Anual — R$70,00*",
                      subtitle: "365 dias",
                      hasMediaAttachment: false
                    }),
                    body: {
                      text:
`⏳ Duração: 365 dias
💰 Valor: R$70,00`
                    },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson: JSON.stringify({
                            display_text: "🔥 PLANO ANUAL",
                            url: "https://wa.me/66832297725?text=Quero%20o%20Plano%20Anual%20da%20Cristal%20Bot."
                          })
                        }
                      ]
                    }
                  },
                  
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
                      ...cristalMedia,
                      title: "💎 *Plano Vitalício — R$120,00*",
                      subtitle: "Permanente",
                      hasMediaAttachment: false
                    }),
                    body: {
                      text:
`⏳ Duração: Permanente
💰 Valor: R$120,00`
                    },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson: JSON.stringify({
                            display_text: "🔥 PLANO ANUAL",
                            url: "https://wa.me/66832297725?text=Quero%20o%20Plano%20Permanente%20da%20Cristal%20Bot."
                          })
                        }
                      ]
                    }
                  }
                ]
              },
              messageVersion: 1
            }
          }
        }
      },
      {}
    );

    await cristal.relayMessage(from, msg.message, { messageId: msg.key.id });

  } catch (e) {
    console.error('❌ Erro no aluguel do bot Cristal:', e);
    reply('🚨 Erro ao abrir os planos do Bot Cristal.');
  }
  break;
}

case 'attp': case 'attp2':
try {
if (!isGroup) return reply(msg.SoEmGrupos);
if(!q.trim()) return reply(`Exemplo: ${prefix+command} cristal`);
reply(msg.Aguarde)
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
cristal.sendMessage(from, {sticker: {url: `https://api.bronxyshost.com.br/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=${API_KEY_BRONXYS}`}}, {quoted: info}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case "brat":
case "bratimg": {
  try {
    if (!q?.trim())
      return reply("❌ Envie o texto para gerar o sticker.");

    await reagir(from, "🟨");

    const url = `https://shizukuapis.space/api/stickers/brat-img?text=${encodeURIComponent(q.trim())}`;

    await cristal.sendMessage(
      from,
      {
        sticker: { url }
      },
      { quoted: info }
    );

    await reagir(from, "✅");
  } catch (e) {
    console.log("Erro sticker-img:", e);
    reply("❌ Erro ao gerar o sticker.");
  }
}
break;

case "emojimix":
case "mixemoji":
case "emoji-mix": {
try {
  if (!args[0] || !args[1]) {
    return reply(
      `❌ Use assim:\n\n${prefix}emojimix 😍 🤪`
    )
  }

  await reagir(from, "🟨")

  const emoji1 = encodeURIComponent(args[0])
  const emoji2 = encodeURIComponent(args[1])

  const url = `http://server.ultramaster.cloud:2020/api/outros/emojimix?apikey=${API_KEY_CRISTAL}&emoji1=${emoji1}&emoji2=${emoji2}`

  await cristal.sendMessage(
    from,
    {
      image: { url },
      caption: "✨ Emoji Mix"
    },
    { quoted: info }
  )

  await reagir(from, "✅")

} catch (e) {
  console.log("Erro emojimix:", e)
  reply("❌ Erro ao gerar a imagem.")
}
break;
}


case 'take': {
  if (!isGroup) return reply(msg.SoEmGrupos)

  try {
    if (!isQuotedSticker)
      return reply('❌ Responda uma figurinha para renomear.')

    const quoted = info.message.extendedTextMessage.contextInfo

    const media = await downloadMediaMessage(
      {
        key: {
          remoteJid: from,
          id: quoted.stanzaId,
          fromMe: false
        },
        message: {
          stickerMessage: quoted.quotedMessage.stickerMessage
        }
      },
      'buffer'
    )

    const packname = ''
    const author = pushname || ' '

    // 🔥 AGORA RETORNA BUFFER
    const stickerBuffer = await writeExifImg2(media, {
      packname,
      author
    })

    if (!Buffer.isBuffer(stickerBuffer)) {
      throw new Error('Sticker não é Buffer')
    }

    await cristal.sendMessage(
      from,
      { sticker: stickerBuffer },
      { quoted: info }
    )

  } catch (err) {
    console.error('Erro no take:', err)
    reply('❌ Erro ao renomear figurinha.')
  }
}
break

case 'figu_raiva': case 'figu_roblox': case 'figu_engracada':
case 'figu_memes': case 'figu_anime': case 'figu_coreana': case 'figu_bebe': case 'figu_desenho': case 'figu_animais':
case 'figu_flork': case 'figu_emoji':
if (!isGroup) return reply(msg.SoEmGrupos);
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
await reply(`Estou enviando as figurinhas no seu pv, por favor aguarde um momento.`)
await cristal.sendMessage(from, {react: {text: "💖", key: info?.key}})         
async function figu_figura() {
const figura = await getBuffer(`${SHIZUKU_SITE}/sticker/${command}?apitoken=${API_KEY_CRISTAL}`)
cristal.sendMessage(sender, {sticker: figura, contextInfo: channelcristal}, {quoted: info})
}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_figura()
}
break

case 'rn':
case 'rename':

  if (!isQuotedSticker)
    return reply('❌ Responda uma figurinha.')

  if (!q || !q.includes('|'))
    return reply(`❌ Use: ${prefix}ename Pack | Autor`)

  const [packname, author] = q.split('|').map(v => v.trim())

  if (!packname || !author)
    return reply(`❌ Use corretamente: ${prefix}rename Pack | Autor`)

  await cristal.sendMessage(from, {
    react: { text: '✏️', key: info.key }
  })

  const stickerMsg =
    info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage

  const stream = await baileys.downloadContentFromMessage(stickerMsg, 'sticker')
  let buffer = Buffer.from([])

  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
  }

  if (stickerMsg.isAnimated) {
    await sendVideoAsSticker2(
      cristal,
      from,
      buffer,
      info,
      { packname, author }
    )
  } else {
    await sendImageAsSticker2(
      cristal,
      from,
      buffer,
      info,
      { packname, author }
    )
  }
break

case 'figurinhas': case 'figuale':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
await reply(`Estou enviando as figurinhas no seu pv, por favor aguarde um momento.`)
await cristal.sendMessage(from, {react: {text: "👑", key: info?.key}})         
async function figuss() {
var rnd = Math.floor(Math.random() * 8051)
const figura = await getBuffer(`${SHIZUKU_SITE}/sticker/aleatorio?apitoken=${API_KEY_CRISTAL}`);
cristal.sendMessage(sender, {sticker: figura, contextInfo: channelcristal}, {quoted: info})
}
for (i = 0; i < q; i++) {
await sleep(1000)
figuss()
}
break;

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(msg.Download)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
cristal.sendMessage(from, {image: buff}, {quoted: selo}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply("Erro, tente mais tarde!")
}
break

case 'st':
case 'stk':
case 'sticker':
case 's':

await cristal.sendMessage(from, {react: {text: `⌛`, key: info.key}})
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
async function DLT_FL(file) {
  try {
    if (!file) return;

    // se for array
    if (Array.isArray(file)) {
      for (const f of file) {
        if (fs.existsSync(f)) fs.unlinkSync(f);
      }
      return;
    }

    // se for string (caminho do arquivo)
    if (typeof file === 'string' && fs.existsSync(file)) {
      fs.unlinkSync(file);
    }
  } catch (e) {
    console.error('Erro ao deletar arquivo temporário:', e);
  }
}
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = ` ➲ ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ  ➠\n ➲ ɴᴏᴍᴇ ᴅᴏ ʙᴏᴛ ➠\n ➲ ɴɪᴄᴋ ᴅᴏɴᴏ ➠`
var author2 = ` 「 ${pushname} 」 \n「 ${NomeBot} 」\n「 ${NickDono} 」`
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(cristal, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `➲ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ➠`
var author2 = ` ${pushname}`
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(cristal, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${prefix+command}`)
}
break


case 'calculadora':
case 'calcular':  
case 'calc':
case 'math':
if(!q) return reply(`cd a conta?`)
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'advn-nmr':
case 'adivinharnmr': {

if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  if (!args[0]) {
    return reply(
      `━━━━━━━━━━━━━━━━━━\n` +
      `   𝐀𝐃𝐈𝐕𝐈𝐍𝐇𝐀𝐑 𝐎 𝐍𝐔́𝐌𝐄𝐑𝐎\n` +
      `━━━━━━━━━━━━━━━━━━\n\n` +
      `𝐈𝐍𝐓𝐄𝐑𝐕𝐀𝐋𝐎\n` +
      `1 ─ 100\n\n` +
      `𝐂𝐎𝐌𝐀𝐍𝐃𝐎\n` +
      `${prefix}adivinharnmr 17\n\n` +
      `𝐈𝐍𝐅𝐎\n` +
      `Cada tentativa gera um novo número.`
    )
  }

  const palpite = Number(args[0])

  if (!Number.isInteger(palpite)) {
    return reply(
      `𝐄𝐍𝐓𝐑𝐀𝐃𝐀 𝐈𝐍𝐕𝐀́𝐋𝐈𝐃𝐀\n\n` +
      `Informe apenas números inteiros.`
    )
  }

  if (palpite < 1 || palpite > 100) {
    return reply(
      `𝐕𝐀𝐋𝐎𝐑 𝐅𝐎𝐑𝐀 𝐃𝐎 𝐋𝐈𝐌𝐈𝐓𝐄\n\n` +
      `O número deve estar entre 1 e 100.`
    )
  }

  const numeroPensado = Math.floor(Math.random() * 10) + 1

  if (palpite === numeroPensado) {
    reply(
      `━━━━━━━━━━━━━━━━━━\n` +
      `   𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎\n` +
      `━━━━━━━━━━━━━━━━━━\n\n` +
      `𝐉𝐎𝐆𝐀𝐃𝐎𝐑\n` +
      `${pushname}\n\n` +
      `𝐒𝐈𝐓𝐔𝐀𝐂̧𝐀̃𝐎\n` +
      `𝐀𝐂𝐄𝐑𝐓𝐎\n\n` +
      `𝐍𝐔́𝐌𝐄𝐑𝐎\n` +
      `${numeroPensado}`
    )
  } else {
    reply(
      `━━━━━━━━━━━━━━━━━━\n` +
      `   𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎\n` +
      `━━━━━━━━━━━━━━━━━━\n\n` +
      `𝐉𝐎𝐆𝐀𝐃𝐎𝐑\n` +
      `${pushname}\n\n` +
      `𝐒𝐈𝐓𝐔𝐀𝐂̧𝐀̃𝐎\n` +
      `𝐄𝐑𝐑𝐎\n\n` +
      `𝐍𝐔́𝐌𝐄𝐑𝐎\n` +
      `${numeroPensado}`
    )
  }
}
break

case 'cantadas': 
  case 'cantada': 
    case 'flerte':{
  try {
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
    const dados = JSON.parse(fs.readFileSync(cantadas, 'utf-8'));

    const cantadaAleatoria = dados[Math.floor(Math.random() * dados.length)];

    await reply(`💌 Cantada do dia:\n\n${cantadaAleatoria}`, { quoted: selo });
  } catch (err) {
    console.error(err);
    await reply('❌ Ocorreu um erro ao buscar a cantada.', { quoted: selo });
  }
  break;
}

case 'adivinha':
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
reply(`🫵🏻 seu dispositivo é um`);
reply(`${adivinha}`);
break

case 'piadas':
case 'piada': {
    const piadas = [
    "🐔 Sabe por que a galinha atravessou a rua?\n👉 Para chegar do outro lado 😆",
    "Por que o livro foi ao médico? 📖\n👉 Porque estava com dor nas páginas 😂",
    "Qual é o cúmulo da força? 💪\n👉 Dobrar a esquina 😅",
    "O que o zero disse pro oito? 😎\n👉 Belo cinto!",
    "Por que o computador espirrou? 💻\n👉 Porque pegou um vírus 🤧",
    "O que o programador faz quando está com fome? 🍔\n👉 Come um byte 😆",
    "Qual é o animal mais antigo? 🦓\n👉 A zebra, porque é em preto e branco 🤣",
    "Por que o Wi-Fi foi ao psicólogo? 📶\n👉 Porque tinha problemas de conexão 😭",
    "O que é um pontinho amarelo no espaço? 🌌\n👉 Um ET querendo ouro 😂",
    "Por que a matemática ficou triste? ➗\n👉 Porque tinha muitos problemas 😭",
    "O que o tomate foi fazer no banco? 🍅\n👉 Tirar extrato 😂",
    "Por que o esqueleto não brigou com ninguém? 💀\n👉 Porque não tinha estômago pra isso 😆",
    "Qual é o café mais perigoso do mundo? ☕\n👉 O ex-presso 😱",
    "O que a impressora falou para o papel? 🖨️\n👉 Esse papel é seu ou é impressão minha? 😂",
    "Por que o relógio foi para a escola? ⏰\n👉 Para aprender a dar a hora 😆",
    "O que o cachorro falou pro outro? 🐶\n👉 Au, au! 😅",
    "Por que o celular foi preso? 📱\n👉 Porque roubou dados 😎",
    "O que é um vegetariano que come carne escondido? 🥩\n👉 Um hacker 😂",
    "Por que o lápis não gosta de festas? ✏️\n👉 Porque ele fica sem ponta 😆",
    "Qual é a tecla favorita do programador? ⌨️\n👉 A barra de espaço 😎",
    "Por que o programador terminou o namoro? 💔\n👉 Porque faltou conexão 😅",
    "O que o Java disse pro JavaScript? ☕\n👉 Nada, eles não se falam 😂",
    "Por que o site foi ao ar? 🌐\n👉 Porque estava hospedado 😆",
    "Qual é o cúmulo da paciência? 🧘\n👉 Esperar o micro-ondas terminar 😭",
    "O que o papel falou pro lápis? 📝\n👉 Escreve direito, pô! 😂"
]

    const piada = piadas[Math.floor(Math.random() * piadas.length)]

    reply(`${piada}`)
}
break

case 'fatos':  case 'curiosidsdes': 
  case 'fato':  case 'curiosidsde':{
  try {
    if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
    const dados = JSON.parse(fs.readFileSync(fatos, 'utf-8'));

    const fatoAleatorio = dados[Math.floor(Math.random() * dados.length)];

    await reply(`💡 Fato do dia:\n\n${fatoAleatorio}`, { quoted: selo });
  } catch (err) {
    console.error(err);
    await reply('❌ Ocorreu um erro ao buscar o fato.', { quoted: selo });
  }
  break;
}

case "roleta":
case "cassino": {
  await reagir(from, "🎰");

  try {
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    const frutas = ["🍒", "🍋", "🍇", "🍉", "🔔", "⭐"];

    const sortear = () => frutas[Math.floor(Math.random() * frutas.length)];

    const ft1 = sortear();
    const ft2 = sortear();
    const ft3 = sortear();

    let ganhou = ft1 === ft2 && ft2 === ft3;

    if (ganhou) {
      addCoinsInVirtualBalance(sender, 20); 
    }

    const montarCassino = (linha, resultado = "") => `
🎰 *CASSINO*

┏━━━━━━━━━━━━━━┓
┃  ${linha}  ┃
┗━━━━━━━━━━━━━━┛

${resultado}
`.trim();

    const { key } = await cristal.sendMessage(
      from,
      { text: montarCassino("❓ | ❓ | ❓") },
      { quoted: info }
    );

    await sleep(700);
    await cristal.sendMessage(from, {
      text: montarCassino(`${ft1} | ❓ | ❓`),
      edit: key
    });

    await sleep(700);
    await cristal.sendMessage(from, {
      text: montarCassino(`${ft1} | ${ft2} | ❓`),
      edit: key
    });

    await sleep(700);
    await cristal.sendMessage(from, {
      text: montarCassino(
        `${ft1} | ${ft2} | ${ft3}`,
        ganhou
          ? "🎉 *VOCÊ GANHOU!"
          : "💸 *Você perdeu... tente novamente*"
      ),
      edit: key
    });

  } catch (e) {
    console.error("Erro no cassino:", e);
    reply("❌ Erro ao rodar o cassino.");
  }
}
break;

case "ppt": 
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
if (args.length < 1) return reply(`exemplo: ${prefix}ppt pedra`)
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 50)
pptb = ppy
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(linguagem.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é minha"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`eu joguei: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
}
break

case 'tabela':
cristal.sendMessage(from, {text: tabela(prefix, NomeBot )}, {quoted: selo })
break 

case 'nick':
case 'gerarnick':
case 'fazernick': 
  try {
    

    const nick = args.join(" ");
    if (!nick)
      return reply(`✍️ Escreva um nome para gerar nicks.\n\nEx: ${prefix + command} cristal`);

    if (ANT_LTR_MD_EMJ(nick))
      return reply("⚠️ Use apenas letras normais, sem emojis ou caracteres modificados!");

    const msgStatus = await cristal.sendMessage(
      from,
      { text: "*_GERANDO NICKS, AGUARDE..._*" },
      { quoted: info }
    );


    const { data } = await axios.get(
      `${SHIZUKU_SITE}/geradores/fazernick?nome=${encodeURIComponent(nick)}&apitoken=${API_KEY_CRISTAL}`
    );

    const resultados = Array.isArray(data)
  ? data.map(r => r.result || r.name).filter(n => n && n.trim() !== "")
  : [];

    if (!resultados.length) {
      await cristal.sendMessage(from, {
        text: "❌ Não consegui gerar nicks. Tente outro nome!",
        edit: msgStatus.key
      });
      return;
    }

    await cristal.sendMessage(from, {
      text: "📤 Enviando Nicks...",
      edit: msgStatus.key
    });

    const headerImageUrl = "https://files.catbox.moe/jmn5zw.jpg"; 
    const media = await prepareWAMessageMedia(
      { image: { url: headerImageUrl } },
      { upload: cristal.waUploadToServer }
    );

    const cards = resultados.slice(0, 25).map(n => ({
      header: { 
        hasMediaAttachment: false,
        imageMessage: media.imageMessage }, 
      body: { text: n },
      footer: { text: "Cristal Bot 🤖" },
      nativeFlowMessage: {
        buttons: [
          {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: n,
              copy_code: n
            })
          }
        ]
      }
    }));

    const msgCarousel = generateWAMessageFromContent(
      from,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `💈 *NICKS GERADOS — ${NomeBot}* 💈\n\nEscolha um Nick abaixo para copiar:`
              },
              carouselMessage: { cards  },
              messageVersion: 1
            }
          }
        }
      },
      {}
    );

    await cristal.relayMessage(from, msgCarousel.message, { messageId: msgCarousel.key?.id });

    await cristal.sendMessage(from, {
      text: "✅ NICKS ENVIADO COM SUCESSO ✔️",
      edit: msgStatus.key
    });

  } catch (err) {
    console.error("Erro no gerarnick:", err);
    reply("❌ Ocorreu um erro ao gerar os nicks.");
  }
break;

case 'eununca':
case 'eu nunca':
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

const frasenunca = './armor/jogos/eununca.json'

let jsonData
try {
    jsonData = JSON.parse(fs.readFileSync(frasenunca))
} catch (err) {
    return reply('❌ Erro ao ler o arquivo de frases do Eu Nunca.')
}

if (!jsonData.frases || jsonData.frases.length === 0) 
    return reply('❌ Nenhuma frase encontrada no Eu Nunca.')

const frase = jsonData.frases[Math.floor(Math.random() * jsonData.frases.length)]

const txt = `➡️ ${frase}`

mention(txt)
break

case 'forca': 
case 'startforca':
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
reagir(from, "🎗")
if(!existSomeWordForcaGame) return reply(`Não há palavras na database do bot para seres distribuidas... Chame o dono do bot para ele adicionar mais palavras 🥰`)
if(isForcaGame(from)) {
  reply(`🎗 Há uma sessão em andamento... Use ${prefix}fc para responder ou ${prefix}rrfc para reiniciar`)
  await sleep(5000)
  return sendTextForcaGame(reply, prefix, from)
}
startForcaGame(reply, prefix, from)
break

case 'myforca': 
case 'minhaforca': 
case 'myf':
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
addUsuarioForca(sender);
try { ppimg = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await cristal.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image'))}`)).data
} catch(e) { ppimg = semfoto }
sendUrlText(from, getUsuDatabaseForca(sender, barrinha), pushname, ``, ppimg, `https://wa.me/`+sender.split("@")[0], selo)
break

case 'fc':
if (!isGroup) return reply(msg.SoEmGrupos)
if(!isForcaGame(from)) return reply(`Não há nenhum jogo em andamento... Para começar, use ${prefix}forca`)
if(!q) return reply(`Retore após o comando a letra ou a palavra toda da forca, ex:
${prefix+command} ${randomLetra.toLowerCase()}`)
jogarLetraForcaGame(mention, from, sender, prefix, q);
break

case 'rfc': case 'rrfc':
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
if(!isForcaGame(from)) return reply(`Não há nenhum jogo em andamento... Para começar, use ${prefix}forca`)
if(command == "rrfc") return restartForcaGame(reply, prefix, from);
resetForcaGame(from);
reply(`🧸 Partida de forca encerrada com sucesso..`)
break

case 'candy':
case 'lava':
case 'fluffy':
case 'cool':
case 'water':
case 'comic':
case 'ice':
case 'elegant':
case 'fortune':
case 'blue':
case 'silver': {
  try {
    if (!args[0]) {
      return reply(`❌ Use assim:\n\n${prefix + command} cristal`);
    }

    const texto = args.join(' ');

    const url = `http://server.ultramaster.cloud:2020/api/flamingtext?apikey=${API_KEY_CRISTAL}&command=${command}-logo&text=${encodeURIComponent(texto)}`;

    await cristal.sendMessage(
      from,
      {
        image: { url },
        caption: `🔥 FlamingText gerado\n\n📝 Texto: *${texto}*`
      },
      { quoted: info }
    );

  } catch (err) {
    console.error(err);
    reply('❌ Erro ao gerar a imagem.');
  }
}
break;

case 'shadow': case 'metalgold': case 'cup': case 'txtborboleta':
case 'cemiterio': case 'efeitoneon': case 'harryp':
case 'lobometal': case 'neon2': case 'madeira': case 'lovemsg3':
case 'coffecup': case 'coffecup2': case 'florwooden':
case 'narutologo': case 'fire': case 'romantic': case 'smoke':  
case 'papel': case 'lovemsg': case 'lovemsg2':
try {
  if (!isGroup) return reply(msg.SoEmGrupos)
if(!q.trim()) return reply(`Digite algo, Exemplo: ${prefix+command} cristal`);  
reply(msg.Aguarde);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_PHT?texto=${q}&category=${command}&apikey=${API_KEY_BRONXYS}`);
cristal.sendMessage(from, {image: {url: ABC.resultado.imageUrl}}, {quoted: info}).catch(() => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'ffavatar':
case 'gizquadro':
case 'fpsmascote':
case 'blackpink':
case 'txtquadrinhos':
case 'logogame':
case 'angelwing':
case 'hackneon': {
  if (!isGroup) return reply(msg.SoEmGrupos)
try {if (!q) return reply('insira um título para gerar sua logo')
reply(msg.Aguarde), reagir(from, "⌛");
const logotipos = await fetchJson(`${SHIZUKU_SITE}/canvas/${command}?texto=${encodeURIComponent(q)}&apitoken=${API_KEY_CRISTAL}`);
const result_logos = logotipos?.resultado?.image;
const IMG = await getBuffer(result_logos);
await cristal.sendMessage(from, {image: IMG, caption: `✅ | Sucesso!, aqui esta a sua logo!`});
await reagir(from, "✅")
} catch (e) {
reply("ocorreu algum erro no comando");
}
}break;

case "desfocar": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}desfocar https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/imageeffect/blur?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;

  const timestamp = Date.now();
  const filePath = `./assets/temp/desfoc_${timestamp}.jpg`;

  try {
    await reagir(from, "🌫️");

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return reply("❌ Erro ao gerar a imagem.", from);
    }

    const buffer = await response.arrayBuffer();

    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "🌫️ Imagem com efeito desfocar"
    });

    fs.unlinkSync(filePath);

    await reagir(from, "✅");

  } catch (err) {
    console.error("[desfocar] Erro geral:", err);
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "circulo": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}circulo https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/imageeffect/circle?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/circulo_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "🎨 Imagem com efeito circulo"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "sepia":
case "serpia": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}serpia https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/imageeffect/sepia?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/serpia_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "🎨 Imagem com efeito serpia"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "bolsonaro": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}bolsonaro https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/montagem/bolsonaro3?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/bolsonaro_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "🎨 Imagem com efeito do bolsonaro"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "bobross": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}bobross https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/montagem/bobross?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/bobross_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "🎨 Imagem com efeito do bobross"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "karaba": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}karaba https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/montagem/karaba?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/karaba_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "Imagem com efeito de karaba"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "briggs": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}briggs https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/montagem/briggs?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/briggs_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "Imagem com efeito de briggs"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "mms": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}mms https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/montagem/mms?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/mms_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "Imagem com efeito de mms"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "ednaldo": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}ednaldo https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/montagem/ednaldobandeira?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/edinaldo_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "Imagem com efeito de edinaldo"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "spongebob": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}spongebob https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/montagem/spongebob?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/spongebob_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "Imagem com efeito de spongebob"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "killtv":
case "shottv": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}shottv https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/montagem/shottv?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/shottv_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "Imagem com efeito de shottv"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "pepe": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}pepe https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/montagem/pepe?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/pepe_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "Imagem com efeito de pepe"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "inverter": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}inverter https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/imageeffect/invert?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;
  const filePath = `./assets/temp/invert_${Date.now()}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);
    if (!response.ok) return reply("❌ Erro ao gerar imagem.", from);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "🎨 Imagem com efeito inverter"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case "bnw":
case "pretoebranco": {
  if (!args.length)
    return reply(
      `🖼️ Envie o link da imagem.\nExemplo: *${prefix}pretoebranco https://files.catbox.moe/b0u2c9.jpg*`,
      from
    );

  const imgUrl = args[0];

  const apiUrl = `http://server.ultramaster.cloud:2020/api/imageeffect/bnw?apikey=${API_KEY_CRISTAL}&link=${encodeURIComponent(imgUrl)}`;

  const timestamp = Date.now();
  const filePath = `./assets/temp/bnw_${timestamp}.jpg`;

  try {
    await reagir(from, "🎨");

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return reply("❌ Erro ao gerar a imagem.", from);
    }

    const buffer = await response.arrayBuffer();

    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      image: fs.readFileSync(filePath),
      caption: "🖤 Imagem em preto e branco"
    });

    fs.unlinkSync(filePath);

    await reagir(from, "✅");

  } catch (err) {
    console.error("[bnw] Erro geral:", err);
    reply("❌ Ocorreu um erro ao processar a imagem.", from);
  }
}
break;

case 'ffbanner': {
try {
  if (!isGroup) return reply(msg.SoEmGrupos)
  if (!q.includes("/")) return reply(`Exemplo: ${prefix + command} cristal/lucas`);

const I = q.split("/")[0];
const I2 = q.split("/")[1];
reply("*_Gerando a sua logo, aguarde..._*"), reagir(from, "⌛");
const logotipos = await fetchJson(`${SHIZUKU_SITE}/canvas/${command}?texto=${encodeURIComponent(I)}&texto2=${encodeURIComponent(I2)}&apitoken=${API_KEY_CRISTAL}`);
const biu = logotipos?.resultado?.image;
const IMG = await getBuffer(biu);
await cristal.sendMessage(from, {image: IMG, caption: `✅ | Sucesso! Aqui está a sua logo!`});
await reagir(from, "✅")
} catch (e) {
reply("ocorreu algum erro no comando"), reagir(from, "❌")
console.log("Error: ", e)
}
}
break;

case 'perfil': {

  
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  try {
    const perfil =
      await cristal.profilePictureUrl(sender_ou_n, 'image')
        .catch(() => 'https://files.catbox.moe/yet8m8.jpg');

    const bio = await cristal.fetchStatus(sender_ou_n);
    const recado = bio?.[0]?.status?.status || 'Privado ou sem recado';

    const levelgado = Math.floor(Math.random() * 102);
    const levelgostosura = Math.floor(Math.random() * 103);
    const valor = Math.floor(Math.random() * 10000);
    const gay = Math.floor(Math.random() * 102);
    const puta = Math.floor(Math.random() * 100);

    const user = sender_ou_n.split("@")[0];

    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = String(dataAtual.getFullYear()).slice(-2);
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const Foto_Perfil = await getBuffer(perfil);

    const TXT_Perfil = `╭───〔 𝙿𝙴𝚁𝙵𝙸𝙻 / 𝚄𝚂𝚄𝙰́𝚁𝙸𝙾 〕───╮
│
│ 👤 *Usuário:* @${user}
│ 📞 *Número:* ${user}
│ 💬 *Recado:* ${recado}
│ 📱 *Dispositivo:* ${adivinha || 'Desconhecido'}
│ 👥 *Grupo:* ${NomeGrupo}
│
│ 🗓️ ${dataFormatada} ⏰ ${hora || '--:--'}
├──────────────
│ 🐂 Gado: ${levelgado}%
│ 🏳️‍🌈 Gay: ${gay}%
│ 🍑 Puta: ${puta}%
│ 🔥 Gostosura: ${levelgostosura}%
│ 🍼 Valor do programa: R$${valor}
│`;

    await cristal.sendMessage(
      from,
      {
        image: Foto_Perfil,
        caption: TXT_Perfil,
        mentions: [sender_ou_n],
        contextInfo: channelcristal
      },
      { quoted: selo }
    );

  } catch (err) {
    console.log('Erro no perfil:', err);
    reply('❌ Erro ao tentar enviar o perfil.');
  }

  break;
}

case 'beijo':
case 'beijar': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  if (!menc_os2) {
    return reply("❌ Marque a pessoa que você quer beijar.");
  }

  const caminhoVideo = path.join(__dirname, "assets", "gifs", "beijo.mp4");

  if (!fs.existsSync(caminhoVideo)) {
    return reply("❌ Vídeo não encontrado em assets/gifs.");
  }

  const videoBuffer = fs.readFileSync(caminhoVideo);

  await cristal.sendMessage(
    from,
    {
      video: videoBuffer,
      gifPlayback: true,
      caption: `> 💋 @${sender.split("@")[0]} deu um beijo na(o) @${menc_os2.split("@")[0]}`,
      mentions: [sender, menc_os2],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );

  break;
}

case 'abraco':
  case 'abracar':
    case 'abraçar':
       case 'abraço':
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer abraçar, a mensagem ou o @')
          await cristal.sendMessage(
            from,
            {
              video: { url: `https://files.catbox.moe/ecw188.mp4` },
              gifPlayback: true,
              caption: `> Você acabou de dar um abraço fofo no(a) *@${menc_os2.split("@")[0]}*`,
   mentions: [sender, menc_os2],
    contextInfo: channelcristal
            },
            { quoted: selo },
          );
break;

case 'consolar':
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo90 = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo90) return reply("❌ Marque alguém ou responda a mensagem.");

  const caminhoVideo = path.join(__dirname, "assets", "gifs", "consolar.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> Você consolou @${alvo90.split("@")[0]} 🤍`,
      mentions: [alvo90],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
  break;

case 'bêbado':
case 'bebado': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");

  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "bebado.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> A porcentagem de @${alvo.split("@")[0]} estar bêbado(a) é ${pct}%${pct > 60 ? "" : ""}`,
      mentions: [alvo],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
  break;
}

case 'bêbada':
case 'bebada': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");

  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "bebada.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> A porcentagem de @${alvo.split("@")[0]} estar bêbada é ${pct}%${pct > 60 ? "" : ""}`,
      mentions: [alvo],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
  break;
}

case 'matar': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");

  const caminhoVideo = path.join(__dirname, "assets", "gifs", "matar.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> @${sender.split("@")[0]} matou @${alvo.split("@")[0]}, até a próxima vida 💀`,
      mentions: [sender, alvo],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
  break;
}

case 'reviver': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");

  const caminhoVideo = path.join(__dirname, "assets", "gifs", "reviver.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> @${sender.split("@")[0]} acabou de reviver @${alvo.split("@")[0]} ✨`,
      mentions: [sender, alvo],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
  break;
}

case 'arremessar': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");

  const caminhoVideo = path.join(__dirname, "assets", "gifs", "arremessar.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> @${alvo.split("@")[0]} foi arremessado(a) com força total, F pra ele(a)`,
      mentions: [alvo],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
  break;
}

case 'louco': {
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  if (!menc_os2) return reply('❌ Marque alguém.');

  const porcentagem = Math.floor(Math.random() * 101);
  const video = fs.readFileSync(path.join(__dirname, 'assets/gifs/louco.mp4'));

  await cristal.sendMessage(from, {
    video,
    gifPlayback: true,
    caption: `> A chance de @${menc_os2.split('@')[0]} ser louco é de *${porcentagem}%*`,
    mentions: [menc_os2],
    contextInfo: channelcristal
  }, { quoted: selo });

  break;
}

case 'sigma': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  if (!menc_os2) return reply('❌ Marque alguém.');

  const porcentagem = Math.floor(Math.random() * 101);
  const video = fs.readFileSync(path.join(__dirname, 'assets/gifs/sigma.mp4'));

  await cristal.sendMessage(from, {
    video,
    gifPlayback: true,
    caption: `> 🗿 A chance de @${menc_os2.split('@')[0]} ser sigma é de *${porcentagem}%*`,
    mentions: [menc_os2],
    contextInfo: channelcristal
  }, { quoted: selo });

  break;
}

case 'louca': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  if (!menc_os2) return reply('❌ Marque alguém.');

  const porcentagem = Math.floor(Math.random() * 101);
  const video = fs.readFileSync(path.join(__dirname, 'assets/gifs/louca.mp4'));

  await cristal.sendMessage(from, {
    video,
    gifPlayback: true,
    caption: `> 💃 A chance de @${menc_os2.split('@')[0]} ser louca é de *${porcentagem}%*`,
    mentions: [menc_os2],
    contextInfo: channelcristal
  }, { quoted: selo });

  break;
}

case 'death': {
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  if (!menc_os2) return reply('❌ Marque alguém.');

  const porcentagem = Math.floor(Math.random() * 101);
  const video = fs.readFileSync(path.join(__dirname, 'assets/gifs/death.mp4'));

  await cristal.sendMessage(from, {
    video,
    gifPlayback: true,
    caption: `> ☠️ A chance de @${menc_os2.split('@')[0]} dar *DEATH* no grupo é de *${porcentagem}%*`,
    mentions: [menc_os2],
    contextInfo: channelcristal
  }, { quoted: selo });

  break;
}

case 'corno': 
  case 'corna': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  if (!menc_os2) return reply('❌ Marque alguém.');

  const porcentagem = Math.floor(Math.random() * 101);
  const video = fs.readFileSync(path.join(__dirname, 'assets/gifs/corno.mp4'));

  await cristal.sendMessage(from, {
    video,
    gifPlayback: true,
    caption: `> 🐂 A chance de @${menc_os2.split('@')[0]} ser corno(a) é de *${porcentagem}%*`,
    mentions: [menc_os2], 
    contextInfo: channelcristal
  }, { quoted: selo });

  break;
}

case 'gay': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");

  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "gay.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> A porcentagem de @${alvo.split("@")[0]} ser gay é de ${pct}%${pct > 60 ? " 🏳️‍🌈 Gay Master!" : ""}`,
      mentions: [alvo],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
}
  break;
  
  case 'bissexual':
  case 'bi': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");

  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "bissexual.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> A porcentagem de @${alvo.split("@")[0]} ser Bissexual é de ${pct}%${pct > 60 ? " 🏳️‍🌈 Bissexual Master!" : ""}`,
      mentions: [alvo],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
}
  break;
  
  case 'lesbica': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");

  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "lesbica.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> A porcentagem de @${alvo.split("@")[0]} ser lesbica é de ${pct}%${pct > 60 ? " 🏳️‍🌈 Lesbica Master!" : ""}`,
      mentions: [alvo],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
}
  break;
  
  case 'pan':
  case 'pansexual': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");

  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "pansexual.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> A porcentagem de @${alvo.split("@")[0]} ser pansexual é de ${pct}%${pct > 60 ? " 🏳️‍🌈 pansexual Master!" : ""}`,
      mentions: [alvo],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
}
  break;

case 'hetero': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");

  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "hetero.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> A porcentagem de @${alvo.split("@")[0]} ser hétero é de ${pct}%${pct > 80 ? " Hétero Master!" : ""}`,
      mentions: [alvo],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
}
  break;

case 'tapa': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvoTapa = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvoTapa) return reply("❌ Marque alguém ou responda a mensagem.");
  const caminhoTapa = path.join(__dirname, "assets", "gifs", "tapa.mp4");
  if (!fs.existsSync(caminhoTapa)) return reply("❌ Vídeo não encontrado.");
  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoTapa),
    gifPlayback: true,
    caption: `> @${sender.split("@")[0]} deu um tapa no(a) @${alvoTapa.split("@")[0]} 👋💥`,
    mentions: [sender, alvoTapa],
    contextInfo: channelcristal
  }, { quoted: selo });
  break;
}

case 'dogolpe': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvoGolpe = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvoGolpe) return reply("❌ Marque alguém ou responda a mensagem.");
  const pctGolpe = Math.floor(Math.random() * 101);
  const caminhoGolpe = path.join(__dirname, "assets", "gifs", "dogolpe.mp4");
  if (!fs.existsSync(caminhoGolpe)) return reply("❌ Vídeo não encontrado.");
  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoGolpe),
    gifPlayback: true,
    caption: `> Chance de @${alvoGolpe.split("@")[0]} dar golpe nas pessoas: ${pctGolpe}%`,
    mentions: [alvoGolpe],
    contextInfo: channelcristal
  }, { quoted: selo });
  break;
}

case 'talarico': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvoTala = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvoTala) return reply("❌ Marque alguém ou responda a mensagem.");
  const pctTala = Math.floor(Math.random() * 101);
  const caminhoTala = path.join(__dirname, "assets", "gifs", "talarico.mp4");
  if (!fs.existsSync(caminhoTala)) return reply("❌ Vídeo não encontrado.");
  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoTala),
    gifPlayback: true,
    caption: `> Chance de @${alvoTala.split("@")[0]} ser talarico: ${pctTala}%`,
    mentions: [alvoTala],
    contextInfo: channelcristal
  }, { quoted: selo });
  break;
}

case 'vesgo': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");
  
  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "vesgo.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoVideo),
    gifPlayback: true,
    caption: `> Chance de @${alvo.split("@")[0]} ser vesgo(a): ${pct}%`,
    mentions: [alvo],
    contextInfo: channelcristal
  }, { quoted: selo });
  break;
}

case 'romance': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvo1 = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo1) return reply("❌ Marque alguém ou responda a mensagem.");
  
  const alvo2 = menc_jid2 && menc_jid2[1] ? menc_jid2[1] : null;
  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "romance.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  const msgRomance = alvo2
    ? `> Chance de @${alvo1.split("@")[0]} e @${alvo2.split("@")[0]} darem certo no amor: ${pct}%`
    : `> Chance de @${alvo1.split("@")[0]} encontrar o amor: ${pct}%`;

  const mentions = alvo2 ? [alvo1, alvo2] : [alvo1];

  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoVideo),
    gifPlayback: true,
    caption: msgRomance,
    mentions
  }, { quoted: selo });
  break;
}

case 'roleta': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]) || sender;
  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "roleta.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoVideo),
    gifPlayback: true,
    caption: `> Chance de @${alvo.split("@")[0]} usar a roleta: ${pct}%`,
    mentions: [alvo],
    contextInfo: channelcristal
  }, { quoted: selo });
  break;
}

case 'chance': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");
  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "chance.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoVideo),
    gifPlayback: true,
    caption: `> Chance de @${alvo.split("@")[0]} ser uma pessoa: ${pct}%`,
    mentions: [alvo],
    contextInfo: channelcristal
  }, { quoted: selo });
  break;
}

case 'chance2': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvo1 = menc_os2 || (menc_jid2 && menc_jid2[0]);
  const alvo2 = menc_jid2 && menc_jid2[1] ? menc_jid2[1] : null;
  if (!alvo1 || !alvo2) return reply("❌ Marque duas pessoas ou responda a mensagem de alguém e marque outro(a).");

  const pct = Math.floor(Math.random() * 101);
  const caminhoVideo = path.join(__dirname, "assets", "gifs", "chanceacao.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoVideo),
    gifPlayback: true,
    caption: `> Chance de @${alvo1.split("@")[0]} e @${alvo2.split("@")[0]} darem certo no amor: ${pct}%`,
    mentions: [alvo1, alvo2],
    contextInfo: channelcristal
  }, { quoted: selo });
  break;
}

case 'fiel': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvoFiel = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvoFiel) return reply("❌ Marque alguém ou responda a mensagem.");
  const pctFiel = Math.floor(Math.random() * 101);
  const caminhoFiel = path.join(__dirname, "assets", "gifs", "fiel.mp4");
  if (!fs.existsSync(caminhoFiel)) return reply("❌ Vídeo não encontrado.");
  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoFiel),
    gifPlayback: true,
    caption: `> Chance de @${alvoFiel.split("@")[0]} ser fiel: ${pctFiel}%`,
    mentions: [alvoFiel],
    contextInfo: channelcristal
  }, { quoted: selo });
  break;
}

case 'bonito': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvoBonito = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvoBonito) return reply("❌ Marque alguém ou responda a mensagem.");
  const pctBonito = Math.floor(Math.random() * 101);
  const caminhoBonito = path.join(__dirname, "assets", "gifs", "bonito.mp4");
  if (!fs.existsSync(caminhoBonito)) return reply("❌ Vídeo não encontrado.");
  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoBonito),
    gifPlayback: true,
    caption: `> A chance de @${alvoBonito.split("@")[0]} ser bonito(a) é de ${pctBonito}%`,
    mentions: [alvoBonito],
    contextInfo: channelcristal
  }, { quoted: selo });
  break;
}

case 'chutar': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvoChute = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvoChute) return reply("❌ Marque alguém ou responda a mensagem.");
  const caminhoChute = path.join(__dirname, "assets", "gifs", "chutar.mp4");
  if (!fs.existsSync(caminhoChute)) return reply("❌ Vídeo não encontrado.");
  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoChute),
    gifPlayback: true,
    caption: `> Você chutou @${alvoChute.split("@")[0]} 👢💥`,
    mentions: [alvoChute],
    contextInfo: channelcristal
  }, { quoted: selo });
  break;
}

case "casal": 
if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
await reagir(from, "💘");

const m1 =
    groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
const m2 =
    groupMembers[Math.floor(Math.random() * groupMembers.length)].id;

const random = Math.floor(Math.random() * 100);

const imagemCasal = "https://files.catbox.moe/zz0ryp.jpg";

await cristal.sendMessage(
from, { image: { url: imagemCasal },
caption:
`❪👩🏼‍❤️‍💋‍👨🏻ꦿฺ❫ *Casal do Dia*\n\n` +
`💑 *Par escolhido:*\n` +
`•〔@${m1.split("@")[0]}〕 & 〔@${m2.split("@")[0]}〕\n\n` +
`💘 *Compatibilidade:* 『${random}%』\n` +
`✨ Será que rola? 👀`,
mentions: [m1, m2], 
},
{ quoted: selo }
).catch(() => {
});

break

case 'casar': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvoCasar = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvoCasar) return reply("❌ Marque alguém ou responda a mensagem.");
  const caminhoCasar = path.join(__dirname, "assets", "gifs", "casar.mp4");
  if (!fs.existsSync(caminhoCasar)) return reply("❌ Vídeo não encontrado.");
  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoCasar),
    gifPlayback: true,
    caption: `> Você casou com @${alvoCasar.split("@")[0]}, feliz lua de mel 🥵💍`,
    mentions: [alvoCasar]
  }, { quoted: selo });
  break;
}

case 'soco':
  case 'socar': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);
  const alvoSoco = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvoSoco) return reply("❌ Marque alguém ou responda a mensagem.");
  const caminhoSoco = path.join(__dirname, "assets", "gifs", "soco.mp4");
  if (!fs.existsSync(caminhoSoco)) return reply("❌ Vídeo não encontrado.");
  await cristal.sendMessage(from, {
    video: fs.readFileSync(caminhoSoco),
    gifPlayback: true,
    caption: `> *Você acaba de socar @${alvoSoco.split("@")[0]}, quase o derrotou*.`,
    mentions: [alvoSoco],
    contextInfo: channelcristal
  }, { quoted: selo });
  break;
}

case 'suicidar': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const alvo = menc_os2 || (menc_jid2 && menc_jid2[0]);
  if (!alvo) return reply("❌ Marque alguém ou responda a mensagem.");

  const caminhoVideo = path.join(__dirname, "assets", "gifs", "suicidio.mp4");
  if (!fs.existsSync(caminhoVideo)) return reply("❌ Vídeo não encontrado.");

  await cristal.sendMessage(
    from,
    {
      video: fs.readFileSync(caminhoVideo),
      gifPlayback: true,
      caption: `> Você suicidou @${alvo.split("@")[0]} ☠️`,
      mentions: [alvo],
      contextInfo: channelcristal
    },
    { quoted: selo }
  );
  break;
}



case "rankcomunista":
case "rankgay":
case "rankgado":
case "rankcorno":
case "rankgostoso":
case "rankgostosa":
case "rankotakus":
case "ranknerd":
case "rankiludido":
case "ranksafado":
case "rankfofoqueiro":
case "rankdorminhoco":
case "rankmemeiro":
case "rankromantico":
case "rankdrama":
case "rankprotetor":
case "ranklenda":
case "ranktrapaceiro": {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isModoBn)
    return reply(msg.ModoBrincadeira);

  const metadata = await cristal.groupMetadata(from);
  const participantes = metadata.participants;
  const botId = cristal.user.id.split(':')[0] + '@s.whatsapp.net';
  const membrosValidos = participantes.filter(p => p.id !== botId);

  const escolhidos = [];
  const taken = new Set();
  while (escolhidos.length < 5 && escolhidos.length < membrosValidos.length) {
    const idx = Math.floor(Math.random() * membrosValidos.length);
    if (!taken.has(idx)) {
      taken.add(idx);
      escolhidos.push(membrosValidos[idx]);
    }
  }

  const comandosRank = {
    rankgay: '🏳️‍🌈 RANKING DOS MAIS GAYS 🏳️‍🌈',
    rankgado: '🐂 RANKING DOS GADOS 🐂',
    rankcorno: '🕵️‍♂️ RANKING DOS CORNOS 🕵️‍♂️',
    rankcomunista: '🟥 RANKING DOS COMUNISTAS 🟥',
    ranknerd: '🤓 RANKING DOS NERDS 🤓',
    rankiludido: '💔 RANKING DOS ILUDIDOS 💔',
    ranksafado: '😏 RANKING DOS SAFADOS 😏',
    rankfofoqueiro: '🗣️ RANKING DOS FOFOQUEIROS 🗣️',
    rankdorminhoco: '💤 RANKING DOS DORMINHOCOS 💤',
    rankmemeiro: '😂 RANKING DOS MEMEIROS 😂',
    rankromantico: '💌 RANKING DOS ROMÂNTICOS 💌',
    rankdrama: '🎭 RANKING DOS DRAMÁTICOS 🎭',
    rankprotetor: '🛡️ RANKING DOS PROTETORES 🛡️',
    ranklenda: '🏆 RANKING DAS LENDAS 🏆',
    ranktrapaceiro: '🃏 RANKING DOS TRAPACEIROS 🃏',
    rankgostoso: '🔥 RANKING DOS GOSTOSOS 🔥',
    rankgostosa: '💃 RANKING DAS GOSTOSAS 💃',
    rankotakus: '🎌 RANKING DOS OTAKUS 🎌'
  };

  const titulo = comandosRank[command] || '🏆 RANKING 🏆';
  let texto = `${titulo}\n\n`;

  escolhidos.forEach((m, i) => {
    texto += `${i + 1}° @${m.id.split("@")[0]}\n`;
  });

  await cristal.sendMessage(from, {
    text: texto,
    mentions: escolhidos.map(p => p.id)
  });

  break;
}

case 'videorapido':
case 'videolento':
case 'videoreverse':
case 'videorobo':
case 'videobw':
case 'videoespelho':
case 'videozoom':
case 'videovhs': {
if (!isGroup) return reply(msg.SoEmGrupos)
  if (!isQuotedVideo && !isQuotedVisuU2)
    return reply('❌ Responda um vídeo.')

  await cristal.sendMessage(from, {
    react: { text: '🎬', key: info.key }
  })

  const quoted =
    info.message.extendedTextMessage.contextInfo.quotedMessage

  const videoMsg =
    quoted.videoMessage ||
    quoted.viewOnceMessageV2?.message?.videoMessage

  if (!videoMsg)
    return reply('❌ Vídeo inválido.')

  const stream = await baileys.downloadContentFromMessage(videoMsg, 'video')
  let buffer = Buffer.from([])
  for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk])

  if (!fs.existsSync('./assets/temp')) fs.mkdirSync('./assets/temp')

  const input = `./assets/temp/${Date.now()}.mp4`
  const output = `./assets/temp/${Date.now()}_${command}.mp4`
  fs.writeFileSync(input, buffer)

  let filtroVideo = ''
  let filtroAudio = ''

  switch (command) {
    case 'videorapido':
      filtroVideo = 'setpts=0.5*PTS'
      filtroAudio = 'atempo=1.5'
      break

    case 'videolento':
      filtroVideo = 'setpts=1.5*PTS'
      filtroAudio = 'atempo=0.7'
      break

    case 'videoreverse':
      filtroVideo = 'reverse'
      filtroAudio = 'areverse'
      break

    case 'videorobo':
      filtroVideo = 'hue=s=0,eq=contrast=1.4'
      filtroAudio = "afftfilt=real='hypot(re,im)*sin(0)'"
      break

    case 'videobw':
      filtroVideo = 'hue=s=0'
      break

    case 'videoespelho':
      filtroVideo = 'hflip'
      break

    case 'videozoom':
      filtroVideo = 'scale=iw*1.2:ih*1.2,crop=iw:ih'
      break

    case 'videovhs':
      filtroVideo = 'noise=alls=20:allf=t+u,eq=contrast=1.3:saturation=0.8'
      break
  }

  let cmd = `ffmpeg -i ${input}`

  if (filtroVideo && filtroAudio)
    cmd += ` -vf "${filtroVideo}" -af "${filtroAudio}"`
  else if (filtroVideo)
    cmd += ` -vf "${filtroVideo}"`
  else if (filtroAudio)
    cmd += ` -af "${filtroAudio}"`

  cmd += ` ${output}`

  exec(cmd, async () => {
    await cristal.sendMessage(from, {
      video: fs.readFileSync(output),
      caption: `🎬 Efeito aplicado: ${command}`
    }, { quoted: info })

    fs.unlinkSync(input)
    fs.unlinkSync(output)
  })
}
break

case 'grave':
case 'agudo':
case 'reverse':
case 'robo':
case 'eco':
case 'helio':
case 'caverna': {
if (!isGroup) return reply(msg.SoEmGrupos)
  if (!isQuotedAudio)
    return reply('❌ Responda um áudio.')

  await cristal.sendMessage(from, {
    react: { text: '🎧', key: info.key }
  })

  const audioMsg =
    info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage

  const stream = await baileys.downloadContentFromMessage(audioMsg, 'audio')
  let buffer = Buffer.from([])
  for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk])

  if (!fs.existsSync('./assets/temp')) fs.mkdirSync('./assets/temp')

  const input = `./assets/temp/${Date.now()}.ogg`
  const output = `./assets/temp/${Date.now()}_${command}.mp3`
  fs.writeFileSync(input, buffer)

  let filtro = ''

  switch (command) {
    case 'grave':
      filtro = 'asetrate=44100*0.8,atempo=1.25'
      break
    case 'agudo':
      filtro = 'asetrate=44100*1.25,atempo=0.8'
      break
    case 'reverse':
      filtro = 'areverse'
      break
    case 'robo':
      filtro = "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)'"
      break
    case 'eco':
      filtro = 'aecho=0.8:0.9:1000:0.3'
      break
    case 'helio':
      filtro = 'asetrate=44100*1.4,atempo=0.9'
      break
    case 'caverna':
      filtro = 'aecho=0.8:0.88:1500:0.6'
      break
  }

  exec(`ffmpeg -i ${input} -af "${filtro}" ${output}`, async () => {
    await cristal.sendMessage(from, {
      audio: fs.readFileSync(output),
      mimetype: 'audio/mpeg'
    }, { quoted: info })

    fs.unlinkSync(input)
    fs.unlinkSync(output)
  })
}
break

case 'estourar': {
  if (!isQuotedAudio)
    return reply('❌ Responda um áudio.')

  await cristal.sendMessage(from, {
    react: { text: '💥', key: info.key }
  })

  const audioMsg =
    info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage

  const stream = await baileys.downloadContentFromMessage(audioMsg, 'audio')
  let buffer = Buffer.from([])
  for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk])

  if (!fs.existsSync('./assets/temp')) fs.mkdirSync('./assets/temp')

  const input = `./assets/temp/${Date.now()}.ogg`
  const output = `./assets/temp/${Date.now()}_estourado.mp3`

  fs.writeFileSync(input, buffer)

  exec(
    `ffmpeg -i ${input} -af "bass=g=18,volume=40.5" ${output}`,
    async () => {
      await cristal.sendMessage(from, {
        audio: fs.readFileSync(output),
        mimetype: 'audio/mpeg'
      }, { quoted: info })

      fs.unlinkSync(input)
      fs.unlinkSync(output)
    }
  )
}
break

case 'audiolento': {
  if (!isGroup) return reply(msg.SoEmGrupos)
  if (!isQuotedAudio)
    return reply('❌ Responda um áudio.')

  await cristal.sendMessage(from, {
    react: { text: '🐢', key: info.key }
  })

  const audioMsg =
    info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage

  const stream = await baileys.downloadContentFromMessage(audioMsg, 'audio')
  let buffer = Buffer.from([])
  for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk])

  if (!fs.existsSync('./assets/temp')) fs.mkdirSync('./assets/temp')

  const input = `./assets/temp/${Date.now()}.ogg`
  const output = `./assets/temp/${Date.now()}_lento.mp3`

  fs.writeFileSync(input, buffer)

  exec(`ffmpeg -i ${input} -filter:a "atempo=0.10" ${output}`, async () => {
    await cristal.sendMessage(from, {
      audio: fs.readFileSync(output),
      mimetype: 'audio/mpeg'
    }, { quoted: info })

    fs.unlinkSync(input)
    fs.unlinkSync(output)
  })
}
break

case 'audiorapido': {
  if (!isGroup) return reply(msg.SoEmGrupos)
  if (!isQuotedAudio)
    return reply('❌ Responda um áudio.')

  await cristal.sendMessage(from, {
    react: { text: '⚡', key: info.key }
  })

  const audioMsg =
    info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
let buffer = Buffer.from([])
  const stream = await baileys.downloadContentFromMessage(audioMsg, 'audio')
  for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk])

  if (!fs.existsSync('./assets/temp')) fs.mkdirSync('./assets/temp')

  const input = `./assets/temp/${Date.now()}.ogg`
  const output = `./assets/temp/${Date.now()}_rapido.mp3`

  fs.writeFileSync(input, buffer)

  exec(`ffmpeg -i ${input} -filter:a "atempo=1.5" ${output}`, async () => {
    await cristal.sendMessage(from, {
      audio: fs.readFileSync(output),
      mimetype: 'audio/mpeg'
    }, { quoted: info })

    fs.unlinkSync(input)
    fs.unlinkSync(output)
  })
}
break

case "letra": case "liryc": case "letram": case "letramusic": case "letramusica": {
if (!isGroup) return reply(msg.SoEmGrupos);
if(!q.trim()) return reply(`Exemplo: ${prefix+command} Ela me traiu`)
try {
reply(msg.Aguarde)
const abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/letra_musica?letra=${q.trim()}&apikey=${API_KEY_BRONXYS}`)
reply(` - Titulo: ${abc.titulo}\n\n - Compositor: ${abc.compositor}\n\n - Letra: ${abc.letra}`)
} catch (e) {
reply("Erro...")
}
}
break;

case 'horóscopo':
    case 'horoscopio':
case 'signo':
try {
    if (!isGroup) return reply(msg.SoEmGrupos);

    const q = args.join(" ").trim(); 

    if (!q) return reply(`Digite seu signo, exemplo: ${prefix + command} virgem`);

    const ABC = await fetchJson(`http://server.ultramaster.cloud:2020/api/pesquisa/horoscopo?apikey=${API_KEY_CRISTAL}&signo=${q.toLowerCase()}`);

    if (!ABC || !ABC.resultado || !ABC.resultado.signo)
        return reply("Não foi possível obter o horóscopo.");

    const signo = ABC.resultado.signo;
    const forecast = ABC.resultado.forecast;
    const dataPrevisao = ABC.resultado.date;

    let mensagem = `✨ *${q.toUpperCase()}* – ${dataPrevisao}\n\n`;
    mensagem += `📝 ${signo.title}: ${signo.description.split('. ')[0]}.\n`; 
    mensagem += `🔮 Forecast: ${forecast.split('. ')[0]}.\n`;


    if (signo.itensAdicionais && signo.itensAdicionais.length > 0) {
        mensagem += `💫 Extras:\n`;
        signo.itensAdicionais.forEach(item => {
            if (["Elemento", "Regente", "Cores"].includes(item.title)) {
                mensagem += `- ${item.title}: ${item.description}\n`;
            }
        });
    }

    reply(mensagem);

} catch (e) {
    console.log(e);
    return reply("Erro ao consultar o horóscopo.");
}
break;

case 'pensador': 
case 'frases':
case 'frase':
if (!isGroup) return reply(msg.SoEmGrupos);
setTimeout(() => {reagir(from, tempo_emoji)}, 300)
frases_ = palavrasc[Math.floor(Math.random() * palavrasc.length)]
reply(`> ${frases_}

⏤͟͟͞͞ ꦿ${NomeBot}
_${hora2}_ ${tempo_emoji}`)
break;

case 'gtts2':
case 'tts2':
try {
    if (!args.length) 
        return reply(`❌ Use assim:\n${prefix}audiotts bom dia pessoal`);

    const texto = args.join(' ');
    
    const nomeArquivo = `tts_${Date.now()}.mp3`;
    const caminhoAudio = path.resolve(`./assets/temp/${nomeArquivo}`);

    const voz = "pt-BR-AntonioNeural";

    exec(
        `edge-tts --voice "${voz}" --text "${texto}" --write-media "${caminhoAudio}"`,
        async (error) => {
            if (error) {
                console.log(error);
                return reply("❌ Erro ao gerar o áudio.");
            }

            await cristal.sendMessage(
                from,
                {
                    audio: fs.readFileSync(caminhoAudio),
                    mimetype: 'audio/mpeg',
                    ptt: true
                },
                { quoted: selo }
            );

            fs.unlinkSync(caminhoAudio);
        }
    );
} catch (e) {
    console.log(e);
    reply("❌ Erro no comando de áudio TTS.");
}
break;

case 'gtts':
case 'tts':
if (!q) return reply(`❌ Você precisa digitar algum texto para gerar o áudio!\nExemplo: ${prefix}gtts Olá, tudo bem?`);

let lang = args[0] && args[0].toLowerCase(); 
let text = args.slice(lang ? 1 : 0).join(" ");

const Text2Speech = require('./features/gtts.js');
let tts;
try {
    tts = Text2Speech(lang && Text2Speech.LANGUAGES?.[lang] ? lang : 'pt-br');
} catch {
    tts = Text2Speech('pt-br');
}

const audioPath = `./assets/temp/tts_${Date.now()}.mp3`;

tts.save(audioPath, text, async (err) => {
    if (err) {
        console.error(err);
        return reply('❌ Erro ao gerar o áudio.');
    }

    try {
        await cristal.sendMessage(from, {
            audio: fs.readFileSync(audioPath),
            mimetype: 'audio/mpeg',
            ptt: true 
        }, { quoted: info });
    } catch (err) {
        console.error(err);
        reply('❌ Erro ao enviar o áudio.');
    } finally {
        fs.unlinkSync(audioPath);
    }
});
break;

case "spotify": {
  if (!args.length)
    return reply(
      `🎧 Use assim:\n*${prefix}spotify nome da música*`,
      from
    );

  const axios = require("axios");
  const nome = args.join(" ");
  const api = `https://ninx.fun/api/pesquisa/spotify?nome=${encodeURIComponent(nome)}&apikey=Wq34P92y`;

  try {
    await reagir(from, "🎵");

    const res = await axios.get(api);
    const resultados = res.data;

    if (!Array.isArray(resultados) || resultados.length === 0)
      return reply("❌ Nenhuma música encontrada.", from);

    let texto = `🎶 *RESULTADOS PARA:* _${nome}_\n\n`;

    resultados.slice(0, 10).forEach((m, i) => {
  const titulo =
    m.título ||
    m.title ||
    m.name ||
    "Desconhecido";

  const artista =
    m.artista ||
    m.artist ||
    (Array.isArray(m.artists) ? m.artists.join(", ") : null) ||
    "Artista não informado";

  const duracao =
    m.duração ||
    m.duration ||
    (m.duration_ms
      ? new Date(m.duration_ms).toISOString().substring(14, 19)
      : "00:00");

  texto += `
${i + 1}. 🎵 *${titulo}*
👤 ${artista}
⏱ ${duracao}
🔗 ${m.url}
`;
});

    await cristal.sendMessage(from, {
      text: texto,
      contextInfo: {
        externalAdReply: {
          title: resultados[0].título || resultados[0].title,
          body: resultados[0].artista,
          mediaType: 1,
          sourceUrl: resultados[0].url
        }
      }
    }, { quoted: selo });

  } catch (err) {
    console.log(err);
    reply("❌ Erro ao buscar músicas no Spotify.", from);
  }
}
break;

case "play":
  case "play2":
  case "p": {
  try {
    
    if (!q) return reply(`> ❌ Você precisa digitar algo para pesquisar.\n> Exemplo: ${prefix}play música`);
    
    await reagir(from, "⏳");

    const r = await ytSearch(q, 1);
    if (!r || !r.length) return reply("⚠️ Nenhum vídeo encontrado.");
    
    const v = r[0];
    const cap = `📺 𝕋𝕀𝕋𝕌𝕃𝕆: *${v.titulo}* 📺
❄️ 𝔸𝕌𝕋𝕆ℝ: _${v.autor}_
⏰ 𝔻𝕌ℝ𝔸ÇÃ𝕆: ${v.duracao}
👀 𝕍𝕀𝔼𝕎𝕊: ${Number(v.views).toLocaleString()}
🔗 𝕃𝕀ℕ𝕂: ${v.url}`;

    if (isButtons) {
      const media = await prepareWAMessageMedia(
        { image: { url: v.thumbnail } },
        { upload: cristal.waUploadToServer }
      );

      const botoes = [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "🎵 𝔹𝔸𝕀𝕏𝔸ℝ 𝕄ℙ3 (Á𝕌𝔻𝕀𝕆)",
            id: `${prefix}ytmp3 ${v.url}`
          })
        },
                        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "📄 𝔹𝔸𝕀𝕏𝔸ℝ 𝕍𝕀𝔻𝔼𝕆 (𝕄ℙ4)",
            id: `${prefix}playvideo ${v.url}`
          })
        }
      ];

      const carouselMessage = {
        cards: [
          {
            header: {
              hasMediaAttachment: true,
              imageMessage: media.imageMessage
            },
            body: { text: cap },
            footer: { text: "Created by Sr.Patman:" },
            nativeFlowMessage: { buttons: botoes }
          }
        ]
      };

      await cristal.relayMessage(
        from,
        {
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [sender],
              externalAdreply: {
                title: v.title,
                body: v.author,
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailUrl: v.thumbnail,
                sourceUrl: v.url
              }
            },
            body: { text: `🎬 Resultado para: ${q}` },
            carouselMessage
          }
        },
        { quoted: selo }
      );
    } else {

      await cristal.sendMessage(from, { 
        image: { url: v.thumbnail }, 
        caption: cap + `\n\n*Comandos de download:*\n1. ${prefix}ytmp3doc\n2. ${prefix}ytmp3\n3. ${prefix}ytmp4doc\n4 ${prefix}ytmp4`,
        mentions: [sender]
      }, { quoted: selo });
    }

    await reagir(from, "✅");

  } catch (e) {
    console.log("Erro no play:", e);
    reply("⚠️ Erro ao processar a pesquisa.");
  }
}
break;

case 'playvideo': {
  if (!q?.trim()) return reply('❌ Digite o nome da música ou vídeo.')
  if (!isGroup) return reply(msg.SoEmGrupos)

  await reagir(from, "🎬")

  try {
    const query = encodeURIComponent(q.trim())

    const apiUrl = `https://shizukuapis.space/api/downloads/play-video?apikey=${API_KEY_CRISTAL}&query=${query}`

    const res = await axios.get(apiUrl, {
      timeout: 30000,
      validateStatus: () => true
    })

    if (
      !res.headers['content-type'] ||
      !res.headers['content-type'].includes('application/json')
    ) {
      return reply('⚠️ Servidor indisponível, tente novamente.')
    }

    const data = res.data

    if (!data?.status) {
      return reply('❌ Nenhum resultado encontrado.')
    }

    const r = data.resultado

    const titulo = r.titulo
    const canal = r.canal
    const duracao = r.duracao
    const views = r.views
    const thumb = r.thumbnail
    const videoUrl = r.download.url

    const thumbBuffer = await axios.get(thumb, {
      responseType: 'arraybuffer'
    }).then(res => res.data)

    await cristal.sendMessage(from, {
      video: { url: videoUrl },
      mimetype: 'video/mp4',
      jpegThumbnail: thumbBuffer,
      fileName: `${titulo}.mp4`,
      caption: `🎬 *VÍDEO ENCONTRADO*

⌚ Horário: ${hora2}

👤 Usuário: ${pushname}
📺 Canal: ${canal}
⏱️ Duração: ${duracao}
👀 Views: ${views.toLocaleString()}
🏷️ Título: *${titulo}*`
    }, { quoted: selo })

    await reagir(from, "✅")

  } catch (e) {
    console.log('❌ ERRO PLAYVIDEO:', e)
    reply('❌ Erro ao buscar o vídeo.')
  }
}
break

  case "ytmp4": {
  if (!q?.trim()) return reply("❌ Envie o link do YouTube")
  
  await reagir(from, "🎬")

  try {
    const url = encodeURIComponent(q.trim())

    const apiUrl = `https://shizukuapis.space/api/downloads/ytmp4?apikey=${API_KEY_CRISTAL}&url=${url}`

    const { data } = await axios.get(apiUrl, {
      timeout: 30000,
      validateStatus: () => true
    })

    if (!data?.status) {
      return reply("❌ Não foi possível baixar o vídeo.")
    }

    const titulo = data.result.title
    const videoUrl = data.result.url

    let videoId = q.split("v=")[1]?.split("&")[0]
    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

    const thumbBuffer = await axios.get(thumbnailUrl, {
      responseType: "arraybuffer"
    }).then(res => res.data)

    await cristal.sendMessage(from, {
      video: { url: videoUrl },
      mimetype: "video/mp4",
      jpegThumbnail: thumbBuffer,
      fileName: `${titulo}.mp4`,
      caption: `🎬 *VÍDEO ENCONTRADO*

👤 Usuário: ${pushname}
⌚ Horário: ${hora2}

🏷️ Título: *${titulo}*`
    }, { quoted: selo })

    await reagir(from, "✅")

  } catch (err) {
    console.log("❌ ERRO YTMP4:", err)
    reply("❌ Erro ao baixar o vídeo.")
  }
}
break
  
case 'ytmp3':
case 'playaudio': {
  try {
    if (!q?.trim()) {
      return reply(`❌ Envie o nome ou link do áudio.`);
    }

    await reagir(from, "🎧");

    const query = encodeURIComponent(q.trim());

    const apiUrl = `https://shizukuapis.space/api/downloads/play-audio?apikey=${API_KEY_CRISTAL}&query=${query}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.status) {
      return reply("❌ Não foi possível encontrar o áudio.");
    }

    const audioUrl = data.resultado.download.url;
    const titulo = data.resultado.titulo;

    await cristal.sendMessage(
      from,
      {
        audio: { url: audioUrl },
        mimetype: "audio/mpeg",
        ptt: false,
        fileName: `${titulo}.mp3`
      },
      { quoted: info }
    );

    await reagir(from, "✅");

  } catch (e) {
    console.error("Erro ytmp3:", e);
    reply("❌ Erro ao baixar o áudio.");
  }
}
break;

case 'ytmp4doc': {
  ;

  if (!q || !q.includes('youtu'))
    return reply(`❌ Envie o link do YouTube.\n\nEx:\n${prefix}ytmp4doc https://youtu.be/xxxx`);

  await reagir(from, '🎥');
  reply(msg.Aguarde);

  const tempDir = './assets/temp';

  if (!fs.existsSync(tempDir))
    fs.mkdirSync(tempDir, { recursive: true });

  const cmd = `yt-dlp -f "bv*+ba/b" --merge-output-format mp4 -o "${tempDir}/%(title)s.%(ext)s" "${q}"`;

  exec(cmd, async (err) => {
    if (err) {
      console.log('yt-dlp erro:', err);
      return reply('❌ Erro ao baixar o vídeo.');
    }

    const files = fs.readdirSync(tempDir).filter(f => f.endsWith('.mp4'));
    if (!files.length) return reply('❌ Vídeo não encontrado.');

    const videoPath = `${tempDir}/${files[0]}`;

    await cristal.sendMessage(
      from,
      {
        document: fs.createReadStream(videoPath),
        mimetype: 'video/mp4',
        fileName: files[0]
      },
      { quoted: info }
    );

    fs.unlinkSync(videoPath);
    await reagir(from, '✅');
  });
}
break;

case 'ytmp3doc': {
  ;

  if (!q || !q.includes('youtu')) {
    return reply(
      `❌ Envie o link do YouTube.\n\nEx:\n${prefix}ytmp3doc https://youtu.be/xxxx`,
      from,
      info
    );
  }

  const fileName = `audio_${Date.now()}.mp3`;
  const filePath = `./assets/temp/${fileName}`;

  try {
    await reagir(from, '🎵');
reply(msg.Aguarde)
    exec(
      `yt-dlp -x --audio-format mp3 -o "${filePath}" "${q}"`,
      async (err) => {
        if (err || !fs.existsSync(filePath)) {
          return reply(
            '❌ Erro ao baixar o áudio.',
            from,
            info
          );
        }

        await cristal.sendMessage(
          from,
          {
            document: fs.readFileSync(filePath),
            mimetype: 'audio/mpeg',
            fileName
          },
          { quoted: info }
        );

        fs.unlinkSync(filePath);
        await reagir(from, '✅');
      }
    );

  } catch {
    reply(
      '❌ Falha ao processar o áudio.',
      from,
      info
    );
  }
  break;
}
  
  case "ytmp4": {
  if (!q) return reply("Envie o link do YouTube")
  await reagir(from, "🎬")

  try {
    const { data } = await axios.get(
      "http://shizukuapis.space/api/downloads/ytmp4",
      { params: { url: q } }
    )

    const titulo = data.resultados.result.titulo
    const thumbnailUrl = data.resultados.result.thumbnail
    const videoUrl = data.resultados.download.url
    
    const thumbBuffer = await axios.get(thumbnailUrl, {
      responseType: "arraybuffer"
    }).then(res => res.data)

    await cristal.sendMessage(from, {
      video: { url: videoUrl },
      mimetype: "video/mp4",
      jpegThumbnail: thumbBuffer,
      caption: `𝐕𝐈𝐃𝐄𝐎 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎\n
     💳 𝑼𝑺𝑼Á𝑹𝑰𝑶:${pushname}
    ⌚𝑯𝑶𝑹𝑨𝑺: ${hora2}
      \n🎬*${titulo}*`
    }, { quoted: selo })

  } catch (err) {
    console.log("❌ ERRO YTMP4:", err)
    reply("Erro ao baixar o vídeo.")
  }
  break
}
  
case 'ytmp3':
case 'playaudio': {
  try {
    if (!q?.trim())
      return reply(`❌ Envie o link do YouTube.`);

    await reagir(from, "🎧");

    const apiUrl = `https://apisnodz.com.br/api/downloads/youtube/audio?url=${encodeURIComponent(q.trim())}`;

    const res = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; Mobile) AppleWebKit/537.36 Chrome/120.0.0.0",
        "Accept": "application/json",
        "Referer": "https://youtube.com"
      }
    });

    const json = await res.json();
    console.log("YTMP3 RETORNO:", json);

    if (!json.success || !json.resultado?.url)
      return reply("❌ Não consegui baixar o áudio.");

    await cristal.sendMessage(
      from,
      {
        audio: { url: json.resultado.url },
        mimetype: "audio/mpeg",
        ptt: false,
        fileName: json.resultado.filename,
        contextInfo: channelcristal
      },
      { quoted: info }
    );

    await reagir(from, "✅");

  } catch (e) {
    console.error("Erro ytmp3:", e);
    reply("❌ Erro ao baixar o áudio.");
  }
}
break;

 case 'ytsearch': case 'pesquisa-ytb': {
   
    if (!args[0]) {
        await reply("❌ Use: " + PREFIX + "ytsearch <termo>");
        return;
    }

    try {
        const fetch = require("node-fetch");
        const termo = args.join(" ");
        const API_KEY = "AIzaSyALfRrWskoLH2KNG7OuNUw4zuY5_0NhmJs";
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&type=video&q=${encodeURIComponent(termo)}&key=${API_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        if (!data.items || data.items.length === 0) {
            await reply("❌ Não encontrei nenhum vídeo para essa pesquisa.");
            return;
        }

        let resposta = `🔎 *Resultados do YouTube para:* ${termo}\n\n`;
        data.items.forEach((item, index) => {
            const titulo = item.snippet.title;
            const canal = item.snippet.channelTitle;
            const videoId = item.id.videoId;
            const link = `https://www.youtube.com/watch?v=${videoId}`;
            resposta += `*${index + 1}.* ${titulo}\n📺 Canal: ${canal}\n🔗 ${link}\n\n`;
        });

        await reply(resposta.trim());
    } catch (e) {
        console.error("Erro no comando .ytsearch:", e);
        await reply("⚠️ Ocorreu um erro ao buscar no YouTube.");
    }
    break;
}

case 'edit-naruto': {
  try {
    reply('「 ✦ 𝗘𝗗𝗜𝗧 ✦ 」ッ\n🔍 Buscando edit de Naruto...')

    const url = `${SHIZUKU_SITE}/api/animes-edits/edit-naruto?apitoken=${API_KEY_CRISTAL}`

    await cristal.sendMessage(
      from,
      { video: { url }, caption: 'ッ' },
      { quoted: selo }
    )
  } catch (e) {
    console.log(e)
    reply('❌ Erro ao enviar o edit.')
  }
}
break

case 'edit-sakura': {
  try {
    reply('「 ✦ 𝗘𝗗𝗜𝗧 ✦ 」ッ\n🔍 Buscando edit da Sakura...')

    const url = `${SHIZUKU_SITE}/api/animes-edits/edit-sakura?apitoken=${API_KEY_CRISTAL}`

    await cristal.sendMessage(
      from,
      {
        video: { url },
        caption: 'ッ',
        contextInfo: channelcristal
      },
      { quoted: selo }
    )

  } catch (e) {
    console.log('Erro edit-sakura:', e)
    reply('❌ Erro ao enviar o edit.')
  }
}
break

case 'edit-slayer': {
  try {
    reply('「 ✦ 𝗘𝗗𝗜𝗧 ✦ 」ッ\n🔍 Buscando edit de Demon Slayer...')

    const url = `${SHIZUKU_SITE}/api/animes-edits/edit-slayer?apitoken=${API_KEY_CRISTAL}`

    await cristal.sendMessage(
      from,
      { video: { url }, caption: 'ッ' },
      { quoted: selo }
    )
  } catch (e) {
    console.log(e)
    reply('❌ Erro ao enviar o edit.')
  }
}
break

case 'edit-dragonball': {
  try {
    reply('「 ✦ 𝗘𝗗𝗜𝗧 ✦ 」ッ\n🔍 Buscando edit de Dragon Ball...')

    const url = `${SHIZUKU_SITE}/api/animes-edits/edit-dragonball?apitoken=${API_KEY_CRISTAL}`

    await cristal.sendMessage(
      from,
      { video: { url }, caption: 'ッ' },
      { quoted: selo }
    )
  } catch (e) {
    console.log(e)
    reply('❌ Erro ao enviar o edit.')
  }
}
break

case 'edit-chainsaw': {
  try {
    reply('「 ✦ 𝗘𝗗𝗜𝗧 ✦ 」ッ\n🔍 Buscando edit de Chainsaw Man...')

    const url = `${SHIZUKU_SITE}/api/animes-edits/edit-chainsaw?apitoken=${API_KEY_CRISTAL}`

    await cristal.sendMessage(
      from,
      { video: { url }, caption: 'ッ' },
      { quoted: selo }
    )
  } catch (e) {
    console.log(e)
    reply('❌ Erro ao enviar o edit.')
  }
}
break

case 'edit-kaisen': {
  try {
    reply('「 ✦ 𝗘𝗗𝗜𝗧 ✦ 」ッ\n🔍 Buscando edit de Jujutsu Kaisen...')

    const url = `${SHIZUKU_SITE}/api/animes-edits/edit-kaisen?apitoken=${API_KEY_CRISTAL}`

    await cristal.sendMessage(
      from,
      { video: { url }, caption: 'ッ' },
      { quoted: selo }
    )
  } catch (e) {
    console.log(e)
    reply('❌ Erro ao enviar o edit.')
  }
}
break

case 'edit-bleach': {
  try {
    reply('「 ✦ 𝗘𝗗𝗜𝗧 ✦ 」ッ\n🔍 Buscando edit de Bleach...')

    const url = `${SHIZUKU_SITE}/api/animes-edits/edit-bleach?apitoken=${API_KEY_CRISTAL}`

    await cristal.sendMessage(
      from,
      { video: { url }, caption: 'ッ' },
      { quoted: selo }
    )
  } catch (e) {
    console.log(e)
    reply('❌ Erro ao enviar o edit.')
  }
}
break

case 'edit-hunter': {
  try {
    reply('「 ✦ 𝗘𝗗𝗜𝗧 ✦ 」ッ\n🔍 Buscando edit de Hunter x Hunter...')

    const url = `${SHIZUKU_SITE}/api/animes-edits/edit-hunter?apitoken=${API_KEY_CRISTAL}`

    await cristal.sendMessage(
      from,
      { video: { url }, caption: 'ッ' },
      { quoted: selo }
    )
  } catch (e) {
    console.log(e)
    reply('❌ Erro ao enviar o edit.')
  }
}
break

case 'edit-aleatorio': {
  try {
    const termo = args.join(' ')

    reply(`「 ✦ 𝗘𝗗𝗜𝗧 𝗦𝗘𝗔𝗥𝗖𝗛 ✦ 」ッ
🔍 Buscando vídeo`)

    const url = `${SHIZUKU_SITE}/api/animes-edits/edit-aleatorios?apitoken=${API_KEY_CRISTAL}`

    await cristal.sendMessage(
      from,
      {
        video: { url },
        caption: `ッ`

      },
      { quoted: selo }
    )

  } catch (err) {
    console.log('Erro edit:', err)
    reply('❌ Erro ao enviar o edit.')
  }
}
break

case 'editvid':
case 'edit2': {
  try {
    const termo = args.join(' ')
    if (!termo)
      return reply(`❌ Use: ${prefix}edit2 naruto obs: Muitos não vão funcionar, por que os links caíram`)

    reply(`🔎 Buscando vídeos de: *${termo}*`)

    const urlApi = `http://hub.kryzeny.com:8423/pinterest/videos/${encodeURIComponent(termo)}`

    const { data } = await axios.get(urlApi, { timeout: 15000 })

    if (!data || !Array.isArray(data.videos))
      return reply('❌ Nenhum vídeo encontrado.')

    const videosValidos = data.videos
      .map(v => {
        const possiveisUrls = [
          v.videoUrl,
          v['URL do vídeo'],
          v['url do vídeo'],
          v['vide oUrl'],
          v['videoUr l'],
          v['videoUrl '],
          v['URL do vídeo ']
        ]

        const urlFinal = limparUrl(possiveisUrls.find(Boolean))

        return {
          titulo:
            v.title ||
            v['título'] ||
            termo,

          thumb:
            v.thumbnail ||
            v.miniatura ||
            null,

          url: urlFinal
        }
      })
      .filter(v => v.url && v.url.startsWith('http'))

    if (videosValidos.length === 0)
      return reply('❌ Nenhum vídeo válido encontrado.')

    const escolhido =
      videosValidos[Math.floor(Math.random() * videosValidos.length)]

    await cristal.sendMessage(
      from,
      {
        video: { url: escolhido.url },
        caption: `🎬 *${termo}*\n\n📌 ${escolhido.titulo}`,
        mimetype: 'video/mp4'
      },
      { quoted: selo }
    )

  } catch (err) {
    console.log('Erro edit2:', err)
    reply('❌ Erro ao buscar vídeo.')
  }
}
break

case "pinterest3":
case "pin3": {
try {
if (!q?.trim()) 
  return reply(`❌ Envie o link do vídeo do Pinterest.\nEx: ${prefix}pinterest3 https://pin.it/xxxx`);

await reagir(from, "⏳");

const { data } = await axios.get(
  "https://shizukuapis.space/api/downloads/pinterest-video",
  { params: { url: q.trim() } }
);

const resultado = data?.resultado;
if (!resultado?.video)
  return reply("❌ Não foi possível obter o vídeo.");

const caption = `🎬 *pinterest Vídeo*

📌 *Título:* ${resultado.title || "Sem título"}
`;

await cristal.sendMessage(
  from,
  {
    video: { url: resultado.video },
    mimetype: "video/mp4",
    caption
  },
  { quoted: info }
);

await reagir(from, "✅");

} catch (e) {
console.log("Erro pinterest vídeo:", e);
reply("❌ Erro ao baixar o vídeo do Pinterest.");
}
}
break;

case 'pinterest2':

if (!q) return reply(`exemplo: ${prefix + command} cat`);
await reply(msg.Aguarde)
imgUrl = `https://shizukuapis.space/api/pinterest?text=${encodeURIComponent(q)}&apitoken=${API_KEY_CRISTAL}`
  
await cristal.sendMessage(from, {
image: { url: imgUrl },
caption: `aqui esta a sua imagem!`
}, { quoted: info })
  .catch(err => {
reply('Ocorreu um erro ao buscar a imagem. Tente novamente mais tarde.');
});
break;

case 'raizq':
  case 'raizquadrada':
    if (!isGroup) return reply(msg.SoEmGrupos)
if(!Number(q.replace("√", ""))) return reply("Retorne após o comando o número que você quer encontrar a raiz quadrada")
radical = Number(q.replace("√", ""))
if(!raiz(radical)) {
  divi = divisores(radical)
  if(divi.length <= 0) return reply("Nenhum divisor encontrado...")
  primeiro = []
  for(a of divi) {
    if(raiz(a)) primeiro.push({search: a, resultado: findRaiz(a)})
  }
  if(primeiro.length <= 0) return reply("Nenhuma raiz encontrada...")
  result_x = primeiro[primeiro.length - 1].resultado
  resto = radical / primeiro[primeiro.length - 1].search
  dividir = divisores(resto)
  if(divisores.length > 0) {
    segundo = []
    for(b of dividir) {
      if(raiz(b)) segundo.push({search: b, resultado: findRaiz(b)})
    }
    if(segundo.length > 0) {
      result_x *= segundo[segundo.length - 1].resultado
      result_x += `√` + (resto / segundo[segundo.length - 1].search)
    } else result_x += `√` + resto
  } else result_x += `√` + resto
} else result_x = findRaiz(radical)
reply(`🧮 _Segundo meus cálculos, a √${q.replace("√", "")} é -> *"${result_x}"*_ ヅ`)
break

case "dicionario":
  case "dicio": {
    if (!isGroup) return reply(msg.SoEmGrupos)
    if (!args[0]) {
        await reply("❌ Use: " + PREFIX + "dicionario <palavra>");
        return;
    }

    const palavra = args.join(" ");
    const fetch = require("node-fetch");
    const cheerio = require("cheerio");

    try {
        const url = `https://www.dicio.com.br/${encodeURIComponent(palavra)}/`;
        const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
        if (!res.ok) {
            await reply("❌ Não encontrei essa palavra no dicionário.");
            return;
        }

        const html = await res.text();
        const $ = cheerio.load(html);


        let definicao = $(".significado").map((i, el) => $(el).text().trim()).get().join("\n\n");

        if (!definicao) definicao = "Não foi possível encontrar a definição.";

        let textoCompleto = `📖 Palavra: *${palavra}*\n\n` +
                            `🔹 Definição:\n${definicao}\n\n` +
                            `🔗 Fonte: ${url}`;

    
        const partes = textoCompleto.match(/[\s\S]{1,3000}/g);
        for (let parte of partes) {
            await reply(parte);
        }

    } catch (e) {
        console.error("Erro no comando .dicio:", e);
        await reply("⚠️ Ocorreu um erro ao buscar a definição.");
    }
    break;
}
  

case "pinterest":
  case "pin": {
  
  try {
    await reagir(from, "📸");

    if (!q) {
      await reply(
        `❌ Digite algo.\nEx: ${prefix}pinterest corsa`,
        from,
        info
      );
      break;
    }

    global.pinterestCache = global.pinterestCache || {};
    global.pinterestCache[sender] = [];

    const api = `http://shizukuapis.space/api/pinterest?text=${encodeURIComponent(q)}&apitoken=${API_KEY_CRISTAL}`;
    
    const cards = [];

    for (let i = 0; i < 1; i++) {
      const r = await axios.get(api, { responseType: "arraybuffer" });

      global.pinterestCache[sender].push(r.data);

      const media = await prepareWAMessageMedia(
        { image: r.data },
        { upload: cristal.waUploadToServer }
      );

      cards.push({
        header: proto.Message.InteractiveMessage.Header.create({
          ...media,
          title: `🔎 ${q} – Imagem ${i + 1}`,
          gifPlayback: false,
          hasMediaAttachment: true
        }),
        body: {
          text: `📸 Resultado ${i + 1}\n🔎 Pesquisa: ${q}`
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "📌 OPÇÕES",
                sections: [
                  {
                    title: "📷 Pinterest",
                    rows: [
                      {
                        header: "🔄 Nova Busca",
                        title: "Buscar outra imagem",
                        id: `${prefix}pinterest ${q}`
                      }
                    ]
                  }
                ]
              })
            }
          ]
        }
      });
    }

    const msg = generateWAMessageFromContent(
      from,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `📸 *PINTEREST – RESULTADOS PARA:* ${q}`
              },
              carouselMessage: { cards },
              messageVersion: 1
            }
          }
        }
      },
      {}
    );

    await cristal.relayMessage(from, msg.message, {
      messageId: msg.key.id
    });

    await reagir(from, "✅");

  } catch (e) {
    console.error("❌ ERRO PINTEREST:", e);
    await reply("🚨 Erro ao gerar carrossel.", from, info);
  }
  break;
}


case 'playstore':
case 'ps': {
  try {
    const query = args.join(' ')
    if (!query)
      return reply('❌ Digite o nome de um app.\nEx: ,playstore Netflix')

    reply('🔍 Buscando aplicativos na Play Store...')

    const url = `http://server.ultramaster.cloud:2020/api/pesquisa/playstore?apikey=${API_KEY_CRISTAL}&query=${encodeURIComponent(query)}`

    const res = await axios.get(url, {
      timeout: 20000,
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
      },
      validateStatus: () => true 
    })

    if (!res.data || typeof res.data !== 'object') {
      console.log('Resposta inválida:', res.data)
      return reply('❌ A API retornou uma resposta inválida.')
    }

    if (!res.data.resultado || res.data.resultado.length === 0)
      return reply('❌ Nenhum aplicativo encontrado.')

    const apps = res.data.resultado.slice(0, 5)

    let texto = `📱 *PLAY STORE*\n🔍 Pesquisa: *${query}*\n\n`

    apps.forEach((app, i) => {
      texto +=
`🔹 *${i + 1}. ${app.nome}*
👨‍💻 Dev: ${app.desenvolvedor}
⭐ Avaliação: ${app.estrelas}
🔗 ${app.link}

`
    })

    await cristal.sendMessage(
      from,
      {
        image: { url: apps[0].imagem },
        caption: texto.trim()
      },
      { quoted: selo }
    )

  } catch (err) {
    console.log('Erro playstore completo:', err)
    reply('❌ Erro interno ao buscar aplicativos.')
  }
}
break

case "tempo":
case "Temperatura":
case "clima": {
    try {
        if (!args.length) {
            return reply(
                `❌ Use assim:\n${prefix}clima Belo Horizonte`
            );
        }

        const fetch = require("node-fetch");

        const cidadeTexto = args.join(" ");
        const cidade = encodeURIComponent(cidadeTexto);

        const url = `https://wttr.in/${cidade}?format=j1`;
        const res = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0" }
        });

        if (!res.ok) {
            return reply("❌ Não consegui acessar a previsão do tempo agora.");
        }

        const data = await res.json();

        const atual = data.current_condition[0];

        const mensagem = 
`🌤️ *Clima em ${cidadeTexto}*

🌡️ *Temperatura:* ${atual.temp_C}°C
🥵 *Sensação:* ${atual.FeelsLikeC}°C
☁️ *Condição:* ${atual.weatherDesc[0].value}
💧 *Umidade:* ${atual.humidity}%
🌬️ *Vento:* ${atual.windspeedKmph} km/h

📡 Fonte: wttr.in`;

        await reply(mensagem);

    } catch (e) {
        console.error("Erro no comando clima:", e);
        await reply("⚠️ Erro ao buscar a previsão do tempo.");
    }
    break;
}

case 'globo':
case 'g1': {
  try {
if (!isGroup) return reply(msg.SoEmGrupos)
    const url = `http://server.ultramaster.cloud:2020/api/noticias/globo?apikey=${API_KEY_CRISTAL}`
    const { data } = await axios.get(url)

    if (data.statusCode !== 200 || !data.resultado || data.resultado.length === 0)
      return reply('❌ Nenhuma notícia encontrada no momento.')

    let texto = `📰 *ÚLTIMAS NOTÍCIAS – G1*\n\n`

    data.resultado.slice(0, 5).forEach((n, i) => {
      texto += `🗞️ *${i + 1}. ${n.noticia}*\n`
      texto += `📂 *Categoria:* ${n.categoria}\n`
      if (n.desc) texto += `📝 *Resumo:* ${n.desc}\n`
      texto += `⏰ *Postado:* ${n.postado}\n`
      texto += `🔗 *Link:* ${n.link}\n\n`
      texto += `───────────────\n\n`
    })

    reply(texto)

  } catch (err) {
    console.error(err)
    reply('❌ Erro ao buscar as notícias.')
  }
}
break

case 'esportes': {
  try {
    await cristal.sendMessage(from, {
      react: { text: "📰", key: info?.key }
    });

    const fetch = require("node-fetch");
    const apiUrl = "https://shizukuapis.space/api/noticias/esportes";

    const res = await fetch(apiUrl);
    const json = await res.json();

    if (!json.status || !json.result || json.result.length === 0) {
      return reply("❌ Nenhuma notícia encontrada no momento.");
    }

    const noticia = json.result[0];

    const imagem = noticia.image && noticia.image.startsWith("http")
      ? noticia.image
      : "https://files.catbox.moe/r8zwnt.png";

    const texto = `
🏆 *NOTÍCIA DE ESPORTES*

📰 *${noticia.title}*

📝 ${noticia.description}

🗞 Fonte: ${noticia.source?.name || "Desconhecida"}
`.trim();

    const media = await prepareWAMessageMedia(
      { image: { url: imagem } },
      { upload: cristal.waUploadToServer }
    );

    const botoes = [
      {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: "🌐 LER NOTÍCIA COMPLETA",
          url: noticia.url
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "🔄 PRÓXIMA NOTÍCIA",
          id: `${prefix}esportes`
        })
      }
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      nativeFlowMessage: { buttons: botoes },
      footer: { text: `${NomeBot}` }
    };

    await cristal.relayMessage(
      from,
      {
        interactiveMessage: {
          contextInfo: {
            participant: sender,
            quotedMessage: {
              extendedTextMessage: { text: "Buscando notícia esportiva..." }
            }
          },
          carouselMessage: { cards: [card] }
        }
      },
      {}
    );

  } catch (e) {
    console.log("Erro no comando esportes:", e);
    reply("❌ Erro ao buscar notícia esportiva.");
  }
}
break;

case "Notícias2":  
   case "noticias2": {
     if (!isGroup) return reply(msg.SoEmGrupos)
    if (!args[0]) {
        await reply(`❌ Use: " + prefix + "noticias <categoria>\nEx: ${prefix}noticias politica`);
        return;
    }

    const fetch = require("node-fetch");
    const cheerio = require("cheerio");

    const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();


    const categoriasMap = {
        politica: "https://g1.globo.com/politica/",
        economia: "https://g1.globo.com/economia/",
        tecnologia: "https://g1.globo.com/tecnologia/",
        futebol: "https://globoesporte.globo.com/futebol/",
        internacional: "https://g1.globo.com/mundo/",
        saude: "https://g1.globo.com/ciencia-e-saude/",
        ciencia: "https://g1.globo.com/ciencia-e-saude/",
    };

    const categoriaRaw = normalize(args[0]);
    const url = categoriasMap[categoriaRaw];

    if (!url) {
        await reply(`⚠️ Categoria "${args[0]}" não disponível. Use uma das seguintes: ${Object.keys(categoriasMap).join(", ")}`);
        return;
    }

    try {
        const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
        if (!res.ok) {
            await reply("❌ Não consegui acessar a página no momento.");
            return;
        }

        const html = await res.text();
        const $ = cheerio.load(html);

        let primeiroArtigo, titulo, link, resumo;

        if (categoriaRaw === "futebol") {

            primeiroArtigo = $("a.feed-post-link").first();
            titulo = primeiroArtigo.text().trim();
            link = primeiroArtigo.attr("href");
            resumo = primeiroArtigo.closest(".feed-post").find(".feed-post-body-resumo").text().trim() || "Resumo não disponível";
        } else {
          
            primeiroArtigo = $("a.feed-post-link").first();
            titulo = primeiroArtigo.text().trim();
            link = primeiroArtigo.attr("href");
            resumo = primeiroArtigo.closest(".feed-post").find(".feed-post-body-resumo").text().trim() || "Resumo não disponível";
        }

        if (!titulo || !link) {
            await reply(`⚠️ Não encontrei notícias recentes para a categoria "${args[0]}".`);
            return;
        }

        const mensagem =
`📰 ${categoriaRaw.charAt(0).toUpperCase() + categoriaRaw.slice(1)} - Notícia Recente:

Título: ${titulo}
Resumo: ${resumo}
Link: ${link}`;

        await reply(mensagem);

    } catch (e) {
        console.error("Erro no comando noticias:", e);
        await reply("⚠️ Ocorreu um erro ao buscar as notícias.");
    }

    break;
}

case "noticias":
case "Notícias": {
  try {
    if (!isGroup) return reply(msg.SoEmGrupos);

    await cristal.sendMessage(from, {
      react: { text: "📰", key: info?.key }
    });

    const imagem =
      "https://files.catbox.moe/ac4dzq.jpg";

    const texto = `
📰 *MENU DE NOTÍCIAS*

Escolha uma categoria para ver a notícia mais recente 👇
`.trim();

    const media = await prepareWAMessageMedia(
      { image: { url: imagem } },
      { upload: cristal.waUploadToServer }
    );

    const botoes = [
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "🏛 Política",
          id: `${prefix}noticias2 politica`
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "💰 Economia",
          id: `${prefix}noticias2 economia`
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "💻 Tecnologia",
          id: `${prefix}noticias2 tecnologia`
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "⚽ Futebol",
          id: `${prefix}noticias2 futebol`
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "🌍 Internacional",
          id: `${prefix}noticias2 internacional`
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "🧪 Ciência & Saúde",
          id: `${prefix}noticias2 ciencia`
        })
      }
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      nativeFlowMessage: { buttons: botoes },
      footer: { text: `${NomeBot}` }
    };

    await cristal.relayMessage(
      from,
      {
        interactiveMessage: {
          contextInfo: {
            participant: sender,
            quotedMessage: {
              extendedTextMessage: { text: "Menu de notícias" }
            }
          },
          carouselMessage: { cards: [card] }
        }
      },
      {}
    );

  } catch (e) {
    console.log("Erro no menu de noticias:", e);
    reply("❌ Erro ao abrir o menu de notícias.");
  }
}
break;

case "gemini":
case "ia-gemini":
  try {
    if (!isGroup) return reply(msg.SoEmGrupos)
    const pergunta = args.join(" ");
    if (!pergunta) {
      await cristal.sendMessage(messageDetails.key.remoteJid, {
        text: `❓ *Uso correto:* ${prefix}gemini [sua pergunta]\n\nExemplo: ${prefix}gemini o que é inteligência artificial?`
      });
      return;
    }

    await cristal.sendMessage(messageDetails.key.remoteJid, { text: "🧠 *Gerando uma resposta válida...*" });

    const apiUrl = `${SHIZUKU_SITE}/api/ias/gemini?query=${encodeURIComponent(pergunta)}&apitoken=${API_KEY_CRISTAL}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const resposta =
      data?.resposta ||
      data?.resultado ||
      "⚠️ Não consegui obter resposta da IA Gemini. Tente novamente.";

    await cristal.sendMessage(messageDetails.key.remoteJid, {
      text: `💬 *Resposta da Gemini IA:*\n\n${resposta}`
    });

  } catch (error) {
    console.error("❌ Erro ao consultar IA Gemini:", error);
    await cristal.sendMessage(messageDetails.key.remoteJid, {
      text: "❌ Ocorreu um erro ao consultar a IA Gemini. Tente novamente mais tarde."
    });
  }
  break;

case "bing":
  try {
    if (!isGroup) return reply(msg.SoEmGrupos)
    const query = args.join(" ");
    if (!query) {
      await cristal.sendMessage(messageDetails.key.remoteJid, {
        text: `🔎 *Uso correto:* ${prefix}bing [sua pesquisa]\n\nExemplo: ${prefix}bing o que é javascript?`
      });
      return;
    }

    await cristal.sendMessage(messageDetails.key.remoteJid, { text: `🧠 Consultando IA Bing sobre: *${query}*...` });

    const apiUrl = `${SHIZUKU_SITE}/ias/bing?pesquisa=${encodeURIComponent(query)}&apitoken=${API_KEY_CRISTAL}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const resposta =
      data?.resultado ||
      data?.result ||
      "⚠️ Não consegui obter resposta da IA Bing. Tente novamente mais tarde.";

    await cristal.sendMessage(messageDetails.key.remoteJid, {
      text: `💡 *Resposta da Bing IA:*\n\n${resposta}`
    });

  } catch (error) {
    console.error("❌ Erro ao consultar IA Bing:", error);
    await cristal.sendMessage(messageDetails.key.remoteJid, {
      text: "❌ Ocorreu um erro ao consultar a IA Bing. Tente novamente mais tarde."
    });
  }
  break;

case "wikipedia":
case "wiki": {
    if (!args[0]) {
        await reply("❌ Use: " + prefix + "wiki <termo>");
        return;
    }

    try {
       const fetch = require("node-fetch");
        const termo = args.join(" ");
        const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termo)}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.extract) {
            const resposta = `📖 *Wikipedia: ${data.title}*\n\n${data.extract}\n\n🔗 ${data.content_urls.desktop.page}`;
            await reply(resposta);
        } else {
            await reply("❌ Não encontrei nada sobre isso na Wikipédia.");
        }
    } catch (e) {
        console.error("Erro no comando .wiki:", e);
        await reply("⚠️ Ocorreu um erro ao buscar na Wikipédia.");
    }
    break;
}

case 'cristal3':
case 'cris3':
try {
  if (!isGroup) return reply(msg.SoEmGrupos)
const fetchJson = async (url) => (await fetch(url)).json();
if (!q) return reply('Insira um titulo para sua pesquisa');
reply("*_🔎 Pesquisando..._*")
 let api = await fetchJson(SHIZUKU_SITE + "/api/ias/gpt?texto=" + encodeURIComponent(q) + "&apitoken="+API_KEY_CRISTAL);
 const respostaApi = api?.resultado?.data[0]?.resposta;
 let enviarResposta = await reply(respostaApi);
} catch (error) {
console.log("erro apresentado em" + error)
}
break;

case 'cristal2':
case 'cris2': {
reagir(from, "🌐")
if (!q) return reply(`Pergunte algo, e o ${command} irá responder...`)
try {
const ABC = await fetchJson(`https://shizukuapis.space/api/ias/gpt-2?query=${encodeURIComponent(q)}&apitoken=${API_KEY_CRISTAL}`)
cristal.sendMessage(from, {image: {url: `https://telegra.ph/file/150adfa5f55028be88a67.jpg`}, caption: `‎‧₊˚✧[${ABC.resposta}]✧˚₊‧`}, {quoted: selo })
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao tentar processar a solicitação.')
}
}
break

case "cristal":
case "cris": {
  try {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!q || typeof q !== "string")
      return reply(`❌ Envie uma pergunta para a Cristal AI.\nEx: ${prefix}cristal3 oi`);

    await reagir(from, "🤖");

    const axios = require("axios");

    const url = `https://apisnodz.com.br/api/ias/copilot?prompt=${encodeURIComponent(q)}`;
    const res = await axios.get(url);

    if (!res.data || res.data.success !== true)
      return reply("❌ A IA não respondeu.");

    const resposta = String(res.data.resultado || "Sem resposta.");

    const msg = `
${resposta}
`.trim();

    await cristal.sendMessage(
      from,
      {
        text: msg,
        linkPreview: false 
      },
      { quoted: info }
    );

    await reagir(from, "✅");

  } catch (e) {
    console.log("Erro:", e);
    reply("❌ Erro ao acessar a IA.");
  }
}
break;

case 'chatgpt2':
case 'gpt2': {
reagir(from, "🌐")
if (!q) return reply(`Pergunte algo, e o ${command} irá responder...`)
try {
const ABC = await fetchJson(`https://shizukuapis.space/api/ias/gpt-2?query=${encodeURIComponent(q)}&apitoken=${API_KEY_CRISTAL}`)
cristal.sendMessage(from, {image: {url: `https://telegra.ph/file/150adfa5f55028be88a67.jpg`}, caption: `‎‧₊˚✧[${ABC.resposta}]✧˚₊‧`}, {quoted: selo })
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao tentar processar a solicitação.')
}
}
break

case 'gpt':
  case 'chatgpt':
try {
  if (!isGroup) return reply(msg.SoEmGrupos)
const fetchJson = async (url) => (await fetch(url)).json();
if (!q) return reply('Insira um titulo para sua pesquisa');
reply("*_🔎 Pesquisando..._*")
 let api = await fetchJson(SHIZUKU_SITE + "/api/ias/gpt?texto=" + encodeURIComponent(q) + "&apitoken="+API_KEY_CRISTAL);
 const respostaApi = api?.resultado?.data[0]?.resposta;
 let enviarResposta = await reply(respostaApi);
} catch (error) {
console.log("erro apresentado em" + error)
}
break;

case 'llama':
case 'llama-ai': {
  if (!isGroup) return reply(msg.SoEmGrupos)
  if (!args.length) {
    return reply(`❌ use assim:\nExemplo: ${prefix}llama Olá, tudo bem?`);
  }

  const prompt = encodeURIComponent(args.join(' '));
  const url = `https://api.gurusensei.workers.dev/llama?prompt=${prompt}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(`Erro HTTP: ${response.status} ${response.statusText}`);
      return reply('❌ Erro ao acessar a API. Tente mais tarde.');
    }

    const json = await response.json();

    if (json?.response?.response && typeof json.response.response === 'string') {
      return reply(json.response.response);
    } else {
      reply('❌ A resposta da API veio vazia ou malformada.');
    }

  } catch (error) {
    console.error('Erro:', error);
    reply('❌ Ocorreu um erro. Tente novamente.');
  }
}
break;
  
case "play4":
case "play5": {
  if (!isGroup) return reply(msg.SoEmGrupos, from);

  if (!args.length) {
    return reply(
      `🎵 Envie o nome da música que deseja baixar.\n\nExemplo: *${prefix}play Brocasito - Tantos Planos*`,
      from
    );
  }

  const pesquisa = args.join(" ");
  const fileName = `audio_${Date.now()}.mp3`;
  const filePath = `./assets/temp/${fileName}`;

  try {
    await reagir(from, '🎵');
    
reply(msg.Aguarde)

    exec(`yt-dlp "ytsearch1:${pesquisa}" -x --audio-format mp3 -o "${filePath}"`, async (err) => {
      if (err || !fs.existsSync(filePath)) {
        return reply('❌ Não foi possível baixar o áudio.', from);
      }

      await cristal.sendMessage(from, {
        audio: fs.readFileSync(filePath),
        mimetype: 'audio/mpeg',
        fileName
      });

      fs.unlinkSync(filePath);
      await reagir(from, '✅');
      reply(`✅ *Download concluído!*`, from);
    });

  } catch (error) {
    console.error('❌ Erro no comando play4:', error);
    reply('❌ Ocorreu um erro ao processar o áudio.', from);
  }
}
break;

case 'receita':
case 'cybercook': {
  try {
    const query = args.join(' ')
    if (!query)
      return reply(`🍰 Digite o nome da receita!\n\nEx: ${prefix}receita Bolo de Chocolate`)

    const url = `http://server.ultramaster.cloud:2020/api/pesquisa/cybercook?apikey=${API_KEY_CRISTAL}&query=${encodeURIComponent(query)}`

    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
      }
    })

    const text = await res.text()

    if (text.startsWith('<')) {
      return reply('❌ A API retornou uma página inválida.\nTente novamente mais tarde.')
    }

    const json = JSON.parse(text)

    if (!json.resultado || json.resultado.length === 0)
      return reply('❌ Nenhuma receita encontrada.')

    let msg = `🍰 *RECEITAS ENCONTRADAS* 🍰\n━━━━━━━━━━━━━━━━━━━\n\n`

    json.resultado.slice(0, 5).forEach((r, i) => {
      msg += `🥄 *${i + 1}. ${r.title}*\n`
      msg += `👨‍🍳 ${r.by}\n`
      msg += `⭐ ${r.assessment.starEmoji}\n`
      msg += `🔗 ${r.url}\n\n`
    })

    await cristal.sendMessage(
      from,
      {
        text: msg,
        contextInfo: channelcristal
      },
      { quoted: selo }
    )

  } catch (e) {
    console.log('Erro cybercook:', e)
    reply('❌ Erro ao buscar a receita.')
  }
}
break

case "topmusic":
  case "topmusica":{
  if (!isGroup) return reply(msg.SoEmGrupos, from);

  try {
    await reagir(from, '🎵');
    reply(`📡 Buscando as top 10 músicas mais populares do YouTube...`, from);

    exec(`yt-dlp "ytsearch10:trending music" --get-title`, async (err, stdout) => {
      if (err) {
        console.error('❌ Erro no topmusic:', err);
        return reply('❌ Não foi possível buscar as top músicas.', from);
      }

      const linhas = stdout.split("\n").filter(Boolean);
      if (!linhas.length) return reply('⚠️ Nenhuma música encontrada.', from);

      let mensagem = `🎶 *Top 10 músicas mais populares:* \n\n`;
      linhas.forEach((titulo, index) => {
        mensagem += `#${index + 1} • ${titulo}\n\n\n`;
      });

      reply(mensagem, from);
      await reagir(from, '✅');
    });

  } catch (error) {
    console.error('❌ Erro no comando topmusic:', error);
    reply('❌ Ocorreu um erro ao buscar as top músicas.', from);
  }
}
break;

case "play3": 
  if (!isGroup) return reply(msg.SoEmGrupos, from);

  if (!args.length) return reply(
    `🎵 Envie o nome da música que deseja baixar.\nEx: *${prefix}play3 Brocasito - Tantos Planos*`,
    from
  );
  
  const fileNamee = `lyricsplay_${Date.now()}.mp3`;
  const filePathh = `./assets/temp/${fileNamee}`;

  try {
    await reagir(from, '🎵');

    exec(`yt-dlp "ytsearch1:${q}" -x --audio-format mp3 -o "${filePathh}"`, async (err) => {
      if (err || !fs.existsSync(filePathh)) return reply('❌ Não foi possível baixar o áudio.', from);

      await cristal.sendMessage(from, {
        audio: fs.readFileSync(filePathh),
        mimetype: 'audio/mpeg',
        fileName: fileNamee
      });

      fs.unlinkSync(filePathh);

      
      try {
        const apiUrl = `https://api.bronxyshost.com.br/api-bronxys/letra_musica?letra=${encodeURIComponent(q.trim())}&apikey=${API_KEY_BRONXYS}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        let lyrics = data.letra || "⚠️ Não foi possível recuperar a letra desta música.";
       
        const msgLyrics = lyrics.substring(0, 1500) + (lyrics.length > 1500 ? "\n\n...continua" : "");

        reply(`📄 *Letra de ${q.trim()}:*\n\n${msgLyrics}`, from);

      } catch (errLyrics) {
        console.error('❌ Erro ao buscar letra via API:', errLyrics);
        reply('⚠️ Erro ao buscar a letra da música.', from);
      }

      await reagir(from, '✅');
    
    });

  } catch (error) {
    console.error('❌ Erro no comando play3:', error);
    reply('❌ Ocorreu um erro ao processar o comando.', from);
  }
break;


case "tiktokdl": {
try {
    if (!q) return reply("❌ Envie o link do TikTok.");

    await reagir(from, "⏳");

    const api = `https://shizukuapis.space/download/tiktokdl?url=${encodeURIComponent(q)}&apitoken=${API_KEY_CRISTAL}`;
    const res = await fetch(api);
    const json = await res.json();

    const title = json?.resultado?.title || "Vídeo do TikTok";
    const thumb =
        json?.resultado?.thumb ||
        "https://files.catbox.moe/0eeamt.jpg";

    const cap = `
🎵 𝐓𝐈𝐊𝐓𝐎𝐊 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎

📌 ${title}

Escolha uma opção abaixo ⬇️
`.trim();

    const media = await prepareWAMessageMedia(
        { image: { url: thumb } },
        { upload: cristal.waUploadToServer }
    );

    const botoes = [
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "🎬 𝐕𝐈𝐃𝐄𝐎",
                id: `${prefix}tiktok ${q}`
            })
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "🎧 Á𝐔𝐃𝐈𝐎",
                id: `${prefix}tiktokaudio ${q}`
            })
        }
    ];

    const carouselMessage = {
        cards: [
            {
                header: {
                    hasMediaAttachment: true,
                    imageMessage: media.imageMessage
                },
                body: { text: cap },
                footer: { text: "Created by Sr.Patman" },
                nativeFlowMessage: { buttons: botoes }
            }
        ]
    };

    await cristal.relayMessage(
        from,
        {
            interactiveMessage: {
                body: { text: "🎵 Resultado TikTok" },
                carouselMessage
            }
        },
        {}
    );

    await reagir(from, "✅");

} catch (e) {
    console.log("Erro playtt:", e);
    reply("⚠️ Erro ao buscar TikTok.");
}
}
break;

case 'tiktokaudio':
case 'tiktokaud': {
  if (!q?.trim()) return reply("Envie o link do TikTok");
  await reagir(from, "🎧");

  try {
    const { data } = await axios.get(
      "https://shizukuapis.space/api/downloads/tiktok-audio",
      { params: { url: q.trim() } }
    );

    const { titulo, autor, duracao, audio } = data.resultado;

    const caption = `🎵 *TikTok Áudio*\n
🎶 Título: ${titulo}
👤 Autor: ${autor}
⏱️ Duração: ${duracao}s`;

    await cristal.sendMessage(from, {
      audio: { url: audio },
      mimetype: "audio/mpeg"
    }, { quoted: info });

  } catch (e) {
    console.log("Erro ttaudio:", e);
    reply("Erro ao baixar o áudio do TikTok");
  }
  break;
}

case "tiktok":
  case "tiktokvid":{
  if (!args[0]) {
    return reply(from, "❌ Envie o link do TikTok", info);
  }

  await reagir(from, "⏳");

  const apiUrl = `http://server.ultramaster.cloud:2020/api/download/tiktok/v2?apikey=${API_KEY_CRISTAL}&url=${encodeURIComponent(args[0])}`;

  try {
  
    const apiRes = await axios.get(apiUrl);
    const videoUrl = apiRes.data?.resultado?.video;

    if (!videoUrl) {
      throw new Error("Link de vídeo não encontrado");
    }

    const videoRes = await axios.get(videoUrl, {
      responseType: "arraybuffer",
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const buffer = Buffer.from(videoRes.data);

    if (buffer.length < 1000) {
      throw new Error("Vídeo inválido ou vazio");
    }

    await cristal.sendMessage(from, {
      video: buffer,
      caption: "🎬 ★TikTok baixado com sucesso ✰"
    }, { quoted: info });

    await reagir(from, "✅");

  } catch (err) {
    console.error("ERRO TIKTOK:", err.message);

    await reply(
      from,
      "❌ Erro ao baixar o vídeo.\nTente outro link ou novamente mais tarde.",
      info
    );

    await reagir(from, "❌");
  }
}
break;

case "ttsearch":
case 'edit': {
  try {
    const query = args.join(' ').trim()

    if (!query)
      return reply(`❌ Digite o termo para buscar.\nEx: ${prefix}edit Pou`)

    const url = `http://server.ultramaster.cloud:2020/api/pesquisa/tiktok-videos?apikey=${API_KEY_CRISTAL}&query=${encodeURIComponent(query)}`

    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    })

    const text = await res.text()

    let json
    try {
      json = JSON.parse(text)
    } catch (parseErr) {
      console.error('[edit] Falha ao parsear JSON:', parseErr)
      return reply('❌ A API retornou uma resposta inválida ou fora do formato esperado. Tente novamente mais tarde.')
    }

    if (json.error) {
      return reply(`❌ Erro da API: ${json.error}`)
    }

    if (!json.resultado || json.resultado.length === 0) {
      return reply('❌ Nenhum vídeo encontrado para esse termo. Tente algo mais genérico como trending ou funny.')
    }

    const vid = json.resultado[Math.floor(Math.random() * json.resultado.length)]

    const caption = `🎬 *Título:* ${vid.title || 'Sem título'}
👤 *Autor:* ${vid.music?.author || 'Desconhecido'}
👁️ *Views:* ${vid.views?.toLocaleString() || 0}
❤️ *Likes:* ${vid.like?.toLocaleString() || 0}
💬 *Comentários:* ${vid.comment?.toLocaleString() || 0}
🔗 *Link:* ${vid.link}`

    await cristal.sendMessage(
      from,
      {
        video: { url: vid.no_watermark },
        caption
      },
      { quoted: selo }
    )

  } catch (err) {
    console.error('[edit] Erro geral no comando:', err)
    reply('❌ Ocorreu um erro ao buscar o vídeo.')
  }
}
break

case "instadl":
case "ig": {
  try {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!q) return reply(`> ❌ Você precisa digitar algo para pesquisar.\n> Exemplo: ${prefix}ig https://www.instagram.com/reel/CODIGO/`);

    await reagir(from, "⏳");

    const apiUrl = `https://shizukuapis.space/api/downloads/instagram-video?url=${encodeURIComponent(q)}`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!data.status || !data.result || data.result.length === 0) 
      return reply("⚠️ Nenhum vídeo encontrado ou link inválido.");

    const post = data.result[0]; 
    const cap = `📸 𝕋𝕀𝕋𝕌𝕃𝕆: Instagram Video\n
🔗  ℒ𝕀ℕ𝕂: ${q}`;

    if (isButtons) {
      const media = await prepareWAMessageMedia(
        { image: { url: post.thumbnail } },
        { upload: cristal.waUploadToServer }
      );

      const botoes = [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "📥 𝕍Í𝔻𝔼𝕆",
            id: `${prefix}insta ${q}`
          })
        }
      ];

      const carouselMessage = {
        cards: [
          {
            header: {
              hasMediaAttachment: true,
              imageMessage: media.imageMessage
            },
            body: { text: cap },
            footer: { text: "Created by Sr.Patman👑:" },
            nativeFlowMessage: { buttons: botoes }
          }
        ]
      };

      await cristal.relayMessage(
        from,
        {
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                title: `Instagram Video`,
                body: data.criador || "Post do Instagram",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailUrl: post.thumbnail,
                sourceUrl: q
              }
            },
            body: { text: `📌 Resultado do seu link` },
            carouselMessage
          }
        },
        { quoted: selo }
      );
    } else {
      await cristal.sendMessage(from, { 
        image: { url: post.thumbnail }, 
        caption: cap + `\n\n*Comando para download:*\n1. ${prefix}igdl`,
        mentions: [sender]
      }, { quoted: selo });
    }

    await reagir(from, "✅");

  } catch (e) {
    console.log("Erro no insta:", e);
    reply("⚠️ Erro ao processar o vídeo do Instagram.");
  }
}
break;

case "instagram": 
  case "insta":{
  try {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!q) return reply(`> ❌ Você precisa enviar o link do Instagram.\n> Exemplo: ${prefix}instagram https://www.instagram.com/reel/CODIGO/`);

    await reagir(from, "⏳");

    const apiUrl = `https://shizukuapis.space/api/downloads/instagram-video?url=${encodeURIComponent(q)}`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!data.status || !data.result || data.result.length === 0) 
      return reply("⚠️ Nenhum vídeo encontrado ou link inválido.");

    const post = data.result[0];

    await cristal.sendMessage(
      from,
      { 
        video: { url: post.video },
        caption: `📸 Instagram Video`,
        mentions: [sender]
      },
      { quoted: selo }
    );

    await reagir(from, "✅");

  } catch (e) {
    console.log("Erro no igdl:", e);
    reply("⚠️ Erro ao enviar o vídeo do Instagram.");
  }
}
break;

case "pinterestdl":
case "downpin": {
  if (!args[0])
    return reply(
      `📌 Envie o link do Pinterest.\nExemplo:\n${prefix}pinterest https://pin.it/19vLCeUwE`,
      from
    );

  const url = args[0];
  const api = `http://server.ultramaster.cloud:2020/api/download/pinterest-download?apikey=${API_KEY_CRISTAL}&url=${encodeURIComponent(url)}`;

  const filePath = `./assets/temp/pinterest_${Date.now()}.mp4`;

  try {
    await reagir(from, "⏳");

    const res = await fetch(api);
    const json = await res.json();

    if (!json?.resultado?.dl_link)
      return reply("❌ Não foi possível obter o vídeo.", from);

    const videoRes = await fetch(json.resultado.dl_link);
    const buffer = await videoRes.arrayBuffer();

    fs.writeFileSync(filePath, Buffer.from(buffer));

    await cristal.sendMessage(from, {
      video: fs.readFileSync(filePath),
      caption: `🎬 *${json.resultado.title || "Vídeo do Pinterest"}*`,
      mimetype: "video/mp4"
    });

    fs.unlinkSync(filePath);
    await reagir(from, "✅");

  } catch (err) {
    reply("❌ Erro ao baixar o vídeo do Pinterest.", from);
  }
}
break;

case "mediafire":
case "mf": {
try {
  if (!isGroup) return reply(msg.SoEmGrupos)
if (!q?.trim())
  return reply(`❌ Envie o link do MediaFire.\nEx: ${prefix}mediafire https://www.mediafire.com/file/xxxx`);

await reagir(from, "⏳");

const { data } = await axios.get(
  "https://shizukuapis.space/api/downloads/mediafire-dl",
  { params: { url: q.trim() } }
);

const arquivo = data?.result?.[0];
if (!arquivo?.url)
  return reply("❌ Não foi possível obter o arquivo.");
reply(msg.Aguarde)
const caption = `📦 *MediaFire Download*

📄 *Nome:* ${arquivo.filename}
📊 *Tamanho:* ${arquivo.filesizeH}
📁 *Tipo:* ${arquivo.type}
`;

await cristal.sendMessage(
  from,
  {
    document: { url: arquivo.url },
    mimetype: arquivo.mimetype || "application/octet-stream",
    fileName: arquivo.filename,
    caption
  },
  { quoted: info }
);

await reagir(from, "✅");

} catch (e) {
console.log("Erro mediafire:", e);
reply("❌ Erro ao baixar o arquivo do MediaFire.");
}
}
break;

case "wallpaper": 
  case "wallpp":{
try {
  if (!isGroup) return reply(msg.SoEmGrupos)
if (!q?.trim())
  return reply("❌ Digite um tema.\nEx: !wallpaper carros");

await reagir(from, "⏳");

const { data } = await axios.get(
  "https://shizukuapis.space/api/pesquisas/wallpaper-search",
  { params: { query: q.trim() } }
);

if (!data?.resultado?.length)
  return reply("❌ Nenhuma imagem encontrada.");

reply(`「 ✦ 𝑲𝑨𝒀𝑹𝑶𝑺 ✦ 」`);

let enviados = 0;
const LIMITE = 7; 

for (const item of data.resultado) {
  if (enviados >= LIMITE) break;

  const imagemHD = item.image?.find(img => img.includes("w635")) 
                 || item.image?.[0];

  if (!imagemHD) continue;

  await cristal.sendMessage(
    from,
    {
      image: { url: imagemHD },
      caption: `🖼️ Wallpaper: ${item.type || q}`
    },
    { quoted: selo }
  );

  enviados++;
}

await reagir(from, "✅");

} catch (e) {
console.log("Erro wallpaper:", e);
reply("❌ Erro ao buscar wallpapers.");
}
}
break;

case "anime": 
  case "animes": 
    case "anm":{
try {
  if (!isGroup) return reply(msg.SoEmGrupos)
  await reagir(from, "🎌");

  const { data } = await axios.get(
    "https://shizukuapis.space/api/outros/quotesanime"
  );

  if (!data.status || !data.resultados?.length) {
    return reply("❌ Nenhuma frase encontrada.");
  }

  const quote =
    data.resultados[Math.floor(Math.random() * data.resultados.length)];

  const texto = `
🎌 *Quote Anime*

🗣️ *Personagem:* ${quote.karakter}
📺 *Anime:* ${quote.anime}
🎬 *Episódio:* ${quote.episode}

💬 "${quote.quotes}"
  `.trim();

  await cristal.sendMessage(
    from,
    {
      image: { url: quote.gambar },
      caption: texto
    },
    { quoted: info }
  );

  await reagir(from, "✅");

} catch (e) {
  console.log("Erro quotesanime:", e);
  reply("❌ Erro ao buscar quote de anime.");
}
break;
}

case "traduzir":
case "translate": {
try {
  if (!isGroup) return reply(msg.SoEmGrupos)
  if (args.length < 2) {
    return reply(
      `🌍 Uso correto:\n\n` +
      `${prefix}traduzir en Quem é você?\n` +
      `${prefix}translate es Bom dia`
    )
  }

  const idioma = args.shift().toLowerCase()
  const texto = args.join(" ")

  const api = await fetchJson(
    `http://server.ultramaster.cloud:2020/api/outros/translate?text=${encodeURIComponent(texto)}&language=${idioma}&apikey=${API_KEY_CRISTAL}`
  )

  if (!api || api.statusCode !== 200 || !api.resultado) {
    return reply("❌ Não foi possível traduzir o texto.")
  }

  const original = api.resultado.originalText
  const traducao = api.resultado.response?.join("\n") || "Tradução indisponível"

  let msg = `🌐 *TRADUTOR*\n\n`
  msg += `📝 Texto original:\n${original}\n\n`
  msg += `🔁 Tradução (${idioma}):\n${traducao}`

  reply(msg)

} catch (e) {
  console.error(e)
  reply("❌ Erro ao traduzir o texto. Tente novamente.")
}
break;
}

case 'cinema':
  case 'cartaz': 
    case 'filme cartaz':{
  try {
if (!isGroup) return reply(msg.SoEmGrupos)
    const url = `http://server.ultramaster.cloud:2020/api/outros/cinema?apikey=${API_KEY_CRISTAL}`
    const { data } = await axios.get(url)

    if (data.statusCode !== 200 || !data.resultado || data.resultado.length === 0)
      return reply('❌ Nenhum filme encontrado no momento.')

    let texto = `🎬 *FILMES EM CARTAZ / ESTREIAS*\n\n`

    data.resultado.forEach((filme, index) => {
      texto += `🎞️ *${index + 1}. ${filme.title}*\n`
      texto += `📅 *Estreia:* ${filme.releaseDate}\n`
      texto += `🎭 *Gênero:* ${filme.genre}\n`
      texto += `⭐ *Classificação:* ${filme.rating}\n`
      texto += `🎬 *Direção:* ${filme.directors || 'N/A'}\n`
      texto += `👥 *Elenco:* ${filme.cast || 'N/A'}\n`
      texto += `📝 *Sinopse:* ${filme.synopsis}\n\n`
      texto += `───────────────\n\n`
    })

    reply(texto)

  } catch (err) {
    console.error(err)
    reply('❌ Erro ao buscar os filmes.')
  }
}
break

case 'encurta3':
case 'encurtalink3': {
  try {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!args[0]) {reply(`❌ Use assim:\n\n${prefixo}encurta3 https://google.com`);
      return 
    }

    const url = args[0];

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return reply('❌ Insira um link válido que comece com http:// ou https://');
    }

    const fetch = require('node-fetch');
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
    );

    const shortUrl = await response.text();

    reply(
      `✅ *Link encurtado com sucesso!*\n\n` +
      `🔗 Original:\n${url}\n\n` +
      `➡️ Encurtado:\n${shortUrl}`
    );

  } catch (err) {
    console.error(err);
    reply('❌ Ocorreu um erro ao encurtar o link.');
  }
}
break;

case "personagem": {
  await reagir(from, "🈴");
  try {
    if (!isGroup) return reply(msg.SoEmGrupos);
    const termo = body.split(" ").slice(1).join(" ").trim();
    if (!termo) {
      return reply("❌ Envie o nome de um personagem.\n\n📌 Ex: *personagem naruto*");
    }

    const fetch = require("node-fetch");

    const query = `
      query ($search: String) {
        Character(search: $search) {
          name {
            full
            native
          }
          image {
            large
          }
          description
          siteUrl
        }
      }
    `;

    const variables = { search: termo };

    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    const json = await response.json();
    const personagem = json?.data?.Character;

    if (!personagem) {
      return reply(`❌ Nenhum personagem encontrado para *"${termo}"*.`);
    }

    const nome = personagem.name.full || "Desconhecido";
    const nomeJap = personagem.name.native || "—";
    const imagem =
      personagem.image?.large ||
      "https://files.catbox.moe/ygsirs.jpg";

    let descricao = personagem.description
      ? personagem.description.replace(/<[^>]*>/g, "").replace(/\n+/g, "\n")
      : "Descrição não disponível.";

    if (descricao.length > 400) {
      descricao = descricao.substring(0, 400) + "...";
    }

    const link = personagem.siteUrl;

    const texto = `
🧍 *${nome}*
🇯🇵 ${nomeJap}

📖 *Descrição:*
${descricao}
`.trim();

    const media = await prepareWAMessageMedia(
      { image: { url: imagem } },
      { upload: cristal.waUploadToServer }
    );

    const botoes = [
      {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: "IR",
          url: link
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "🔎 Buscar outro",
          id: `${prefix}personagem ${q}`
        })
      }
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      nativeFlowMessage: { buttons: botoes },
      footer: { text: `${NomeBot}` }
    };

    await cristal.relayMessage(
      from,
      {
        interactiveMessage: {
          contextInfo: {
            participant: sender,
            quotedMessage: {
              extendedTextMessage: { text: "Buscando personagem..." }
            }
          },
          carouselMessage: { cards: [card] }
        }
      },
      {}
    );

  } catch (e) {
    console.error("Erro no comando personagem:", e);
    reply("❌ Erro ao buscar o personagem no momento.");
  }
}
break;

case "fontsite":
case "codigofonte":
case "gethtml": {
  try {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!q) {
      return reply(
        `❌ Envie um link válido.\n\n📌 Exemplo:\n${prefix + command} https://exemplo.com`
      );
    }

    let siteUrl = q.trim();

    if (!/^https?:\/\//i.test(siteUrl)) {
      siteUrl = "https://" + siteUrl;
    }

    try {
      new URL(siteUrl);
    } catch {
      return reply("❌ URL inválida. Verifique e tente novamente.");
    }

    await reply("🔎 Buscando código-fonte do site...");

    const response = await axios.get(siteUrl, {
      timeout: 15000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "text/html,application/xhtml+xml"
      }
    });

    let html = response.data.toString();

    const dominio = new URL(siteUrl).hostname.replace(/\./g, "_");
    const fileName = `codigo_${dominio}.html`;
    const filePath = path.join(__dirname, fileName);

    if (html.length > 3500) {
      fs.writeFileSync(filePath, html);

      await cristal.sendMessage(
        from,
        {
          document: fs.readFileSync(filePath),
          mimetype: "text/html",
          fileName: fileName,
          caption:
            `🌐 *Código-fonte capturado com sucesso!*\n\n` +
            `🔗 Site: ${siteUrl}\n` +
            `📦 Tamanho: ${(html.length / 1024).toFixed(2)} KB`
        },
        { quoted: selo }
      );

      fs.unlinkSync(filePath);
    } else {

      let preview = html
        .replace(/\s{2,}/g, " ")
        .substring(0, 3500);

      reply(
        `🌐 *Código-fonte do site:*\n` +
        `${siteUrl}\n\n` +
        "```html\n" +
        preview +
        "\n```"
      );
    }
  } catch (e) {
    console.error("Erro fontsite:", e);
    reply(
      "❌ Não foi possível obter o código-fonte.\n\n" +
      "⚠️ Motivos possíveis:\n" +
      "• Site bloqueou requisições\n" +
      "• URL incorreta\n" +
      "• Timeout ou erro de conexão"
    );
  }
}
break;

case 'getquoted':
case 'getinfo': 
case 'get': 
 case 'info': 
reply(JSON.stringify(info, null, 3))
break

case 'metadinha2': {
  if (!isGroup) return reply(msg.SoEmGrupos);
await cristal.sendMessage(from, {react: {text: `👫`, key: info.key}})
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
cristal.sendMessage(from, { image: { url: random.male }, caption: `Perfil Masculino 🤵` }, {quoted: selo })
cristal.sendMessage(from, { image: { url: random.female }, caption: `Perfil Feminino 👰` }, { quoted: selo })
}
break

case 'fakemsg': 
  case 'msgfake': {
  if (!isGroup) return reply(msg.SoEmGrupos);

  if (!q.includes('|')) {
    return reply(
`Crie mensagens fakes com qualquer pessoa!
—
Use assim:
${prefix + command} @vitima|mensagem1|mensagem2

Exemplo:
${prefix + command} @cristal|oi amor|oi vida`
    )
  }

  const mentioned =
    info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]

  if (!mentioned) {
    return reply('❌ Você precisa mencionar alguém.')
  }

  const args = q.split('|')
  if (args.length < 3) {
    return reply('❌ Use exatamente dois "|" no comando.')
  }

  const msgVitima = args[1].trim()
  const msgBot = args[2].trim()

  if (!msgVitima || !msgBot) {
    return reply('❌ As mensagens não podem estar vazias.')
  }

  await cristal.sendMessage(
    from,
    { text: msgBot },
    {
      quoted: {
        key: {
          fromMe: false,
          participant: mentioned
        },
        message: {
          conversation: msgVitima
        }
      }
    }
  )
}
break

case "decodificar": {
  try {
        if (!isVip && !So_Dono) 
        return reply(msg.NaoVipp);
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!q?.trim())
      return reply(`❌ Envie o código binário para decodificar.\nEx: ${prefix}decodificar 011011110110`);

    await reagir(from, "⏳");

    const axios = require("axios");

    const url = `https://apisnodz.com.br/api/tools/decodificar?query=${encodeURIComponent(q.trim())}`;
    const res = await axios.get(url);

    if (!res.data || !res.data.success)
      return reply("❌ Erro ao decodificar o código.");

    const resultado = res.data.resultado;

    const txt = `
${resultado}
`.trim();

    await cristal.sendMessage(from, { text: txt }, { quoted: info });

    await reagir(from, "✅");

  } catch (e) {
    reply("❌ Erro ao processar a decodificação.");
  }
}
break;

case "codificar": {
  try {
        if (!isVip && !So_Dono) 
        return reply(msg.NaoVipp);
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!q || typeof q !== "string")
      return reply("❌ Envie um texto para codificar.\nEx: !codificar oi");

    await reagir(from, "⏳");

    const axios = require("axios");

    const url = `https://apisnodz.com.br/api/tools/codificar?query=${encodeURIComponent(q)}`;
    const res = await axios.get(url);

    if (!res.data || res.data.success !== true)
      return reply("❌ Não foi possível codificar o texto.");

    const resultado = String(res.data.resultado || "Erro");

    const mensagem = `
${resultado}
`.trim();

    await cristal.sendMessage(
      from,
      {
        text: mensagem,
        linkPreview: false
      },
      { quoted: info }
    );

    await reagir(from, "✅");

  } catch (e) {
    console.log("Erro no codificar:", e);
    reply("❌ Erro interno ao codificar.");
  }
}
break;

case "chatgpt3":
case "gpt3": {
  try {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!q || typeof q !== "string")
      return reply(`❌ Envie uma pergunta para a IA.\nEx: ${prefix}gpt3 oi`);

    await reagir(from, "🤖");

    const axios = require("axios");

    const url = `https://apisnodz.com.br/api/ias/copilot?prompt=${encodeURIComponent(q)}`;
    const res = await axios.get(url);

    if (!res.data || res.data.success !== true)
      return reply("❌ A IA não respondeu.");

    const resposta = String(res.data.resultado || "Sem resposta.");

    const msg = `
${resposta}
`.trim();

    await cristal.sendMessage(
      from,
      {
        text: msg,
        linkPreview: false 
      },
      { quoted: info }
    );

    await reagir(from, "✅");

  } catch (e) {
    console.log("Erro:", e);
    reply("❌ Erro ao acessar a IA.");
  }
}
break;

case 'totext': 
  case 'transcrever': {
  try {
if (!isGroup) return reply(msg.SoEmGrupos);
    const quotedMessage = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMessage || (!quotedMessage.audioMessage && !quotedMessage.voiceMessage))
      return reply("❌ Por favor, marque um áudio ou PTT e depois envie o comando para transcrever.");

    const { key } = await cristal.sendMessage(from, { text: msg.Aguarde }, { quoted: selo });

    const audioMsg = quotedMessage.audioMessage || quotedMessage.voiceMessage;
    const stream = await downloadContentFromMessage(audioMsg, 'audio');
    let bufferArray = [];
    for await (const chunk of stream) bufferArray.push(chunk);
    const audioBuffer = Buffer.concat(bufferArray);

    const filePath = `./assets/temp/totext-${sender}.opus`;
    fs.writeFileSync(filePath, audioBuffer);

    const FormData = require('form-data');
    const fetch = require('node-fetch');
    const form = new FormData();
    form.append("reqtype", "fileupload");
    form.append("fileToUpload", fs.createReadStream(filePath));

    const uploadRes = await fetch("https://catbox.moe/user/api.php", { method: "POST", body: form });
    const audioUrl = await uploadRes.text();
    if (!audioUrl.startsWith("http")) return reply("❌ Falha no upload do áudio.");

    const apiUrl = `https://shizukuapis.space/api/transcrever?link=${encodeURIComponent(audioUrl)}&apitoken=${API_KEY_CRISTAL}`;
    const res = await fetch(apiUrl);
    const json = await res.json();

    if (!json.status) return reply("❌ Não foi possível transcrever o áudio.");

    await cristal.sendMessage(from, { text: `📝 *Transcrição concluída:*\n\n${json.resultado.texto}`, edit: key }, { quoted: info });

    fs.unlinkSync(filePath);

  } catch (e) {
    console.error("Erro totext:", e);
    reply("❌ Erro ao transcrever o áudio. Tente novamente.");
  }
}
break;

case 'removebg': {
  try {
if (!isVip && !So_Dono) 
        return reply(msg.NaoVipp);
    if (!isGroup) return reply(msg.SoEmGrupos);
    let imgUrl;

    if (isQuotedImage) {

      const quoted = info.message.extendedTextMessage.contextInfo.quotedMessage;
      const stream = await downloadContentFromMessage(quoted.imageMessage, 'image');
      let buffer = Buffer.from([]);
      for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);

      const fs = require('fs');
      const filePath = `./assets/temp/removebg-${Date.now()}.jpg`;
      fs.writeFileSync(filePath, buffer);

      const FormData = require('form-data');
      const fetch = require('node-fetch');
      const form = new FormData();
      form.append("reqtype", "fileupload");
      form.append("fileToUpload", fs.createReadStream(filePath));

      const uploadRes = await fetch("https://catbox.moe/user/api.php", { method: "POST", body: form });
      imgUrl = await uploadRes.text();
      fs.unlinkSync(filePath);

    } else if (type === 'imageMessage') {

      const stream = await downloadContentFromMessage(info.message.imageMessage, 'image');
      let buffer = Buffer.from([]);
      for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);

      const fs = require('fs');
      const filePath = `./assets/temp/removebg-${Date.now()}.jpg`;
      fs.writeFileSync(filePath, buffer);

      const FormData = require('form-data');
      const fetch = require('node-fetch');
      const form = new FormData();
      form.append("reqtype", "fileupload");
      form.append("fileToUpload", fs.createReadStream(filePath));

      const uploadRes = await fetch("https://catbox.moe/user/api.php", { method: "POST", body: form });
      imgUrl = await uploadRes.text();
      fs.unlinkSync(filePath);

    } else {
      return reply("❌ Envie ou responda uma imagem para remover o fundo.");
    }

    const fetch = require('node-fetch');
    const apiUrl = `https://shizukuapis.space/api/remover-bg?img=${encodeURIComponent(imgUrl)}&apitoken=${API_KEY_CRISTAL}`;
    const res = await fetch(apiUrl);
    const json = await res.json();

    if (!json.status || !json.resultado?.data?.url)
      return reply("❌ Não consegui remover o fundo da imagem.");

    await cristal.sendMessage(from, {
      image: { url: json.resultado.data.url },
      caption: "🖼 Fundo removido com sucesso!"
    }, { quoted: info });

  } catch (err) {
    console.error("Erro removebg:", err);
    reply("❌ Ocorreu um erro ao remover o fundo da imagem.");
  }
}
break;

case 'gerarimg': {
  try {
    if(!isGroup) return reply(msg.SoEmGrupos)
    if (!q) return reply("❌ Digite um texto.");

    const url = `https://shizukuapis.space/api/outros/text2img?text=${encodeURIComponent(q)}`;

    const imgBuffer = Buffer.from(
      await (await fetch(url)).arrayBuffer()
    );

    await cristal.sendMessage(from, {
      image: imgBuffer,
      caption: ""
    }, { quoted: info });

  } catch (e) {
    console.error("Erro text2img:", e);
    reply("❌ Erro ao gerar imagem.");
  }
}
break;

case "ascli": {
  try {
    if(!isGroup) return reply(msg.SoEmGrupos)
    if (!args[0]) {
      return reply(
        `❌ Envie um texto para gerar o ASCII.\n\nExemplo:\n${prefix}ascii cristal`
      );
    }

    const texto = args.join(" ");
    const axios = require("axios");

    const apiUrl = `https://zero-two-apis.com.br/api/ascii?query=${encodeURIComponent(texto)}&apikey=${API_KEY_ZEROTWO}`;

    const { data } = await axios.get(apiUrl);

    if (!data.status || !data.resultado) {
      return reply("❌ Não foi possível gerar o ASCII.");
    }

    await reply(data.resultado);

  } catch (err) {
    reply("❌ Erro ao gerar o ASCII.");
  }
}
break;

case "ascli2": {
  try {
    if(!isGroup) return reply(msg.SoEmGrupos)
    if (!args[0]) {
      return reply(
        `❌ Envie um texto para gerar o ASCII.\n\nExemplo:\n${prefix}ascii2 cristal`
      );
    }

    const texto = args.join(" ");
    const axios = require("axios");

    const apiUrl = `https://shizukuapis.space/api/outros/ascii?text=${encodeURIComponent(texto)}`;

    const { data } = await axios.get(apiUrl);

    if (
      !data.status ||
      !data.resultado ||
      !data.resultado[0] ||
      !data.resultado[0].result
    ) {
      return reply("❌ Não foi possível gerar o ASCII.");
    }

    const ascii = "```" + "\n" + data.resultado[0].result + "\n```";

    await reply(ascii);

  } catch (err) {
    reply("❌ Erro ao gerar o ASCII.");
  }
}
break;

case "gdrive":
case "drive": {
  try {
    if (!args[0]) {
      return reply(
        "❌ Envie o link do Google Drive.\n\nExemplo:\n!gdrive https://drive.google.com/file/d/ID/view"
      );
    }

    const axios = require("axios");

    const apiUrl = `https://zero-two-apis.com.br/api/dl/gdrive?url=${encodeURIComponent(args[0])}&apikey=${API_KEY_ZEROTWO}`;

    const { data } = await axios.get(apiUrl);

    if (!data.resultado || !data.resultado.downloadUrl) {
      return reply("❌ Não foi possível obter o arquivo do Google Drive.");
    }

    const downloadUrl = data.resultado.downloadUrl;
    const fileName = data.resultado.fileName || "arquivo";
    const mime = data.resultado["tipo mimeográfico"] || "application/octet-stream";

    if (mime.startsWith("image/")) {
      await cristal.sendMessage(
        from,
        {
          image: { url: downloadUrl },
          caption: `✅ *Arquivo do Google Drive*\n📄 ${fileName}`
        },
        { quoted: info }
      );
      return;
    }

    if (mime.startsWith("video/")) {
      await cristal.sendMessage(
        from,
        {
          video: { url: downloadUrl },
          caption: `✅ *Arquivo do Google Drive*\n📄 ${fileName}`
        },
        { quoted: info }
      );
      return;
    }

    await cristal.sendMessage(
      from,
      {
        document: { url: downloadUrl },
        mimetype: mime,
        fileName: fileName,
        caption: "✅ *Arquivo do Google Drive baixado com sucesso!*"
      },
      { quoted: info }
    );

  } catch (err) {
    reply("❌ Erro ao baixar o arquivo do Google Drive.");
  }
}
break;

case 'meme':
case 'audiomeme': {
  if(!isGroup) return reply(msg.SoEmGrupos)
  if (!q) return reply(`Digite o nome do áudio meme.\n\nEx: ${prefix}audiomeme la ele`);

  try {
    reply(msg.Aguarde);

    const res = await fetchJson(
      `https://apisnodz.com.br/api/pesquisas/audiomeme?query=${encodeURIComponent(q)}`
    );

    if (!res?.success || !res?.resultado?.audio) {
      return reply('❌ Áudio não encontrado.');
    }

    const { audio, filename } = res.resultado;

    await cristal.sendMessage(from, {
      audio: { url: audio },
      mimetype: 'audio/mpeg',
      fileName: filename
    }, { quoted: info });

  } catch (e) {
    return reply('❌ Erro ao buscar o áudio meme.');
  }
}
break;

case 'cep': {
  if (!isVip && !So_Dono) 
        return reply(msg.NaoVipp);

  if (!q) return reply(`Digite um CEP para consultar.\n\nEx: ${prefix}cep 01001000`);
  try {
    const res = await fetchJson(`https://krystal-apis.shop/api/consulta/cep?cep=${q}&apikey=Resposta-key`);
    if (!res?.resultado?.cep) return reply("❌ Não foi possível encontrar o endereço. Verifique o CEP digitado.");

    const r = res.resultado;
    const texto = `
🔎 *Consulta de CEP*

📍 *Local:* ${r.local}
🏘️ *Complemento:* ${r.complemento || 'Não informado'}
📌 *Bairro:* ${r.bairro}
🌆 *Cidade:* ${r.localidade} - ${r.uf}
🗂️ *CEP:* ${r.cep}

🧾 *IBGE:* ${r.ibge}
🏛️ *GIA:* ${r.gia || 'Não informado'}
☎️ *DDD:* ${r.ddd}
🧮 *SIAFI:* ${r.siafi}
    `.trim();

    await cristal.sendMessage(from, {
      text: texto,
      contextInfo: {
        externalAdReply: {
          title: 'Resultado da Consulta de CEP',
          body: `CEP: ${r.cep}`,
          thumbnailUrl: 'https://i.imgur.com/FoYqP3s.png',
          sourceUrl: `https://buscacepinter.correios.com.br/app/endereco/index.php`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: selo});

  } catch (e) {
    console.error(e);
    reply("❌ Erro ao consultar o CEP.");
  }
  }
  break

case 'ping2': 
  await reagir(from, '⌛');
  let r = (Date.now() / 1000) - info.messageTimestamp
  let uptime = process.uptime()
  let hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
  var ping = `╭━━ ⪩m
▢ 🤖 ⃟きPING ⃟${NomeBot} 🤖
▢ ╭═══⊷
▢ ⌁ 👤 User: ${sender.split("@")[0]}
▢ ⌁ 🖥 Sistema: ${infoSystem.type()}
▢ ⌁ ⏱️ Hora: ${hora1}
▢ ⌁ ♻️ Uptime: ${kyun(uptime)}
▢ ⌁ 💾 RAM: ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)} DE ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)} GB
▢ ╰═══⊷
╰━━━ ⪨`;

  let imgUrl = `https://zero-two-apis.com.br/api/pingcanvas?title=%20Cristal%20bot&nome=%C2%BB%200.878ms%20%C2%AB&hex=%23FF0095&hex2=%23ffffff&perfil=https://files.catbox.moe/jmn5zw.jpg&message=SEJA%20SUA%20MELHOR%20VERS%C3%83O,%20SE%20N%C3%83O%20ALGUEM%20SERA...&fundo=https://telegra.ph/file/39cef93cac54f4371d96e.jpg&apikey=${API_KEY_ZEROTWO}`

  await cristal.sendMessage(from, {
    image: { url: imgUrl },
    caption: ping
  }, { quoted: info })
break

//Admins

case 'ordens':
case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(msg.SoEmGrupos)
ad = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ad += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
mentions(ad, groupAdmins, true)
break

case 'deletar': 
  case 'del': 
    case 'd':
      case 'apagar':
        case 'apaga':
        case 'delet':
          case 'delete':
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
const ctx = info.message?.extendedTextMessage?.contextInfo
if(!ctx?.stanzaId) return reply("❌ Marque a mensagem que deseja apagar.")
 const keyToDelete = { remoteJid: from, fromMe: false, id: ctx.stanzaId, participant: ctx.participant }
await cristal.sendMessage(from, { delete: keyToDelete })
break;

case "nomegp": {
  try {
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
    if (!q)
      return reply("❌ Digite o novo nome do grupo.");

    await reagir(from, "🏷️");

    await cristal.groupUpdateSubject(from, q);

    reply(
      `✅ *Nome do grupo alterado com sucesso!*\n\n📌 Novo nome:\n${q}`
    );

  } catch (e) {

    if (String(e).includes("forbidden")) {
      reply("❌ Não tenho permissão para alterar o nome do grupo.");
    } else {
      reply("❌ Erro inesperado ao alterar o nome do grupo.");
    }
  }
  break;
}

case "descgp": {
  try {
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);

    if (!q) 
      return reply(from, "❌ Digite a nova descrição do grupo.");

    await reagir(from, "📝");

    await cristal.groupUpdateDescription(from, q);

    await reply(
      from,
      `✅ *Descrição do grupo atualizada com sucesso!*\n\n📜 *Nova descrição:*\n${q}`
    );

  } catch (e) {
    console.log("Erro descgp:", e);
    reply(from, "❌ Erro ao alterar a descrição do grupo.");
  }
  break;
}

case 'grupo': {
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
 if (!args[0]) return reply(`
Use:
${prefix}grupo a → fechar mensagens
${prefix}grupo f → abrir mensagens
${prefix}grupo lock → travar configurações do grupo
${prefix}grupo unlock → liberar configurações
  `.trim());

if(args[0] === 'f') {
await cristal.groupSettingUpdate(from, 'announcement');
reply("🔒 Grupo fechado com sucesso");
} else if (args[0] === 'a') {
await cristal.groupSettingUpdate(from, 'not_announcement');
reply("🔓 Grupo aberto com sucesso.");
} else if (args[0] === 'lock') {
await cristal.groupSettingUpdate(from, 'locked');
reply("🛑 Configurações travadas.");
} else if (args[0] === 'unlock') {
 await cristal.groupSettingUpdate(from, 'unlocked');
reply("✅ Configurações liberadas.");
} else {
reply("❌ Opção inválida.");
}
}
break;

case 'novolink':
case 'redefinirlink': {
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
await reply("🔄 Redefinindo o link do grupo...")
await cristal.groupRevokeInvite(from)
let novoLink = await cristal.groupInviteCode(from)
reply(`✅ *Link do grupo redefinido com sucesso!*\n\n🔗 Novo link:\nhttps://chat.whatsapp.com/${novoLink}`)
await pararDigitando(from)
}
break

case 'revelafoto':
case 'rft':
case "revelar": {
  try {
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
    const quoted =
      info.message?.extendedTextMessage?.contextInfo?.quotedMessage

    if (!quoted)
      return reply(
        "❌ Responda a uma *foto ou vídeo de visualização única*."
      )

    const frases = [
      "Aguarde um momento por favor bb 💕",
      "Calma aí que já vou revelar 👀",
      "Segura essa ansiedade 😂",
      "Já tô trazendo a fofoca 📸",
      "Relaxa que tá chegando 🔥",
      "Preparando a revelação 💫",
      "Abrindo o cofre 🔓"
    ]

    await reply(frases[Math.floor(Math.random() * frases.length)])

    let mediaMsg
    let tipo

    if (quoted.viewOnceMessageV2?.message) {
      mediaMsg = quoted.viewOnceMessageV2.message
      tipo = Object.keys(mediaMsg)[0]

    } else if (quoted.viewOnceMessage?.message) {
      mediaMsg = quoted.viewOnceMessage.message
      tipo = Object.keys(mediaMsg)[0]

    } else if (quoted.imageMessage?.viewOnce) {
      mediaMsg = { imageMessage: quoted.imageMessage }
      tipo = "imageMessage"

    } else if (quoted.videoMessage?.viewOnce) {
      mediaMsg = { videoMessage: quoted.videoMessage }
      tipo = "videoMessage"
    }

    if (!mediaMsg || !tipo)
      return reply("❌ Essa mensagem não é de visualização única.")

    const buffer = await downloadMediaMessage(
      { message: mediaMsg },
      "buffer",
      {},
      { logger: console }
    )

    if (tipo === "imageMessage") {
      await cristal.sendMessage(from, {
        image: buffer,
        caption: "📸 *Revelado!*"
      }, { quoted: info })

    } else if (tipo === "videoMessage") {
      await cristal.sendMessage(from, {
        video: buffer,
        mimetype: "video/mp4",
        caption: "🎥 *Revelado!*"
      }, { quoted: info })
    }

  } catch (e) {
    console.error("Erro no revelar:", e)
    await reply("❌ Erro ao revelar a mídia.")
  }
}
break

case 'linkgp': {
try {
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
await cristal.sendMessage(from, {react: {text: "🔗", key: info?.key}});

let foto;
try {
foto = await cristal.profilePictureUrl(from, 'image');
} catch {
foto = "https://files.catbox.moe/ygsirs.jpg";
}

const link = `https://chat.whatsapp.com/${await cristal.groupInviteCode(from)}`;

const txt = `
🔗 *LINK OFICIAL DO GRUPO — ${NomeGrupo}*

🔗 link: ${link}

Clique no botão abaixo para copiar o link:\n
`.trim();

const media = await prepareWAMessageMedia(
 { image: { url: foto } },
 { upload: cristal.waUploadToServer }
);

const botoes = [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📋 COPIAR LINK DO GRUPO",
copy_code: link
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "📂 ABRIR LISTA MENU",
id: `${prefix}menu`
})
}
];

const card = {
header: {
hasMediaAttachment: true,
imageMessage: media.imageMessage
},
headerType: "IMAGE",
body: { text: txt },
nativeFlowMessage: { buttons: botoes },
footer: { text: "Cristal Bot" }
};

await cristal.relayMessage(
from,
{
interactiveMessage: {
contextInfo: {
participant: sender,
quotedMessage: {
extendedTextMessage: { text: "Gerando link do grupo..." }
}
},
carouselMessage: { cards: [card] }
}
},
{}
);

} catch (e) {
console.log("Erro no linkgp:", e);
reply("Erro ao gerar o link do grupo.");
}
}
break;

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':
  if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
  try {
    
    let texto = `📌 *INFORMAÇÕES DO GRUPO*\n\n`
    texto += `🏷 Nome: ${NomeGrupo}\n`
    texto += `🆔 ID: ${from}\n`
    texto += `👥 Membros: ${TotalMembros}\n`
    texto += `🛡 Admins: ${TotalAdmins}\n`
    texto += `👑 Criador: ${Dono_Do_Grupo ? '@' + Dono_Do_Grupo.split('@')[0] : 'Desconhecido'}\n\n`
    texto += `📝 *Descrição:*\n${DescGp}`

    try {
      const fotoGrupo = await cristal.profilePictureUrl(from, "image")

      await cristal.sendMessage(
        from,
        {
          image: { url: fotoGrupo },
          caption: texto,
          mentions: Dono_Do_Grupo ? [Dono_Do_Grupo] : []
        },
        { quoted: info }
      )

    } catch {

      await cristal.sendMessage(
        from,
        {
          text: texto,
          mentions: Dono_Do_Grupo ? [Dono_Do_Grupo] : []
        },
        { quoted: info }
      )
    }

  } catch (err) {
    console.error("Erro infogp:", err)
    reply("❌ Erro ao obter informações do grupo.")
  }
break

case 'rmfotogp':
case 'apagarft': 
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
await reply("🗑️ Apagando foto do grupo...")
await cristal.removeProfilePicture(from)
reply("✅ Foto do grupo removida com sucesso!")
await pararDigitando(from)
break

case 'fotogp':
case 'novafotogp':
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);

let img = null

if (isQuotedImage) {
img = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
} else if (isImage) {
img = info.message.imageMessage
} else {
return reply(`❌ Marque uma imagem ou envie uma imagem com o comando:\n\n${prefix + command}`)
}
await reply("🖼️ Atualizando foto do grupo...")
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

await cristal.updateProfilePicture(from, buffer)
reply("✅ Foto do grupo atualizada com sucesso!")
await pararDigitando(from)
break

case 'welcome2':
case 'bemvindo2': {

  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdmin);

  if (!args[0])
    return reply(`Use corretamente:\n${prefix + command} 1 (ativar)\n${prefix + command} 0 (desativar)`);

  const opcao = Number(args[0]);

  if (opcao === 1) {
    if (dataGp[0].wellcome.bemvindo2)
      return reply('⚠️ O welcome2 já está ativado.');

    dataGp[0].wellcome.bemvindo2 = true;
    setGp(dataGp);
    reply(MSG.Ativado);

  } else if (opcao === 0) {
    if (!dataGp[0].wellcome.bemvindo2)
      return reply('⚠️ O welcome2 já está desativado.');

    dataGp[0].wellcome.bemvindo2 = false;
    setGp(dataGp);
    reply(MSG.Desativado);

  } else {
    reply(`❌ Opção inválida.\nUse ${prefix + command} 1 ou 0`);
  }

  break;
}

case 'autofigu':
    if(!isGroup) return reply(msg.SoEmGrupos) 
    if(!isGroupAdmins && !So_Dono) return reply(msg.SoDono) 

    if(args.length < 1) return reply(`Digite corretamente:\nComando: ${prefix + command} 1 para ativar ou 0 para desativar`)

    if(Number(args[0]) === 1) {
        if(autofiguAtivo) return reply('O recurso Autofigu já está ativado no grupo.')
        dataGp[0].autofigu = true
        setGp(dataGp)
        autofiguAtivo = true
        reply('✅ Autofigu ativado! O bot vai criar figurinha automaticamente de imagens ou vídeos de até 9.9s.')
    } else if(Number(args[0]) === 0) {
        if(!autofiguAtivo) return reply('O recurso Autofigu já está desativado no grupo.')
        dataGp[0].autofigu = false
        setGp(dataGp)
        autofiguAtivo = false
        reply('⚠️ Autofigu desativado.')
    } else {
        reply(`Digite corretamente, ${prefix + command} 1 para ativar ou 0 para desativar`)
    }
break;

case 'promover':
case 'adm':
case 'daradm': {
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
let alvo =
  info.message?.extendedTextMessage?.contextInfo?.participant ||
  info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] ||
  (args[0] && args[0].replace(/\D/g, '') + '@s.whatsapp.net')

if (!alvo) {
return reply(`❌ Marque alguém, responda uma mensagem ou use:\n${prefix + command} 5511999999999`)
}

alvo = jidNormalizedUser(alvo)

try {
await cristal.groupParticipantsUpdate(from, [alvo], "promote")

reply(
`✅ esse usuario agora é administrador.`,
{ mentions: [alvo] }
)
} catch (e) {
console.log(e)
reply("❌ Não foi possível promover o usuário.")
}
}
break

case 'rebaixar':
case 'removeradm':
case 'tiraradm': 
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);

let alvo =
  info.message?.extendedTextMessage?.contextInfo?.participant ||
  info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] ||
  (args[0] && args[0].replace(/\D/g, '') + '@s.whatsapp.net')

if (!alvo) {
return reply(`❌ Marque alguém, responda uma mensagem ou use:\n${prefix + command} 5511999999999`)
}

alvo = jidNormalizedUser(alvo)

try {
await cristal.groupParticipantsUpdate(from, [alvo], "demote")

reply(
`✅ Esse usuario não é mais administrador.`,
{ mentions: [alvo] }
)
} catch (e) {
console.log(e)
reply("❌ Não foi possível remover o admin.")
}
break

case 'apresentar':
case 'apr':
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);

const textoApresentar = `👋 *Bem-vindo(a) ao grupo:* ${NomeGrupo}

👾 • *ENTROU, SE APRESENTE*
📸 • FOTO
👻 • NOME
📌 • CIDADE
🗓️ • IDADE

⚠️ *Leia as regras do grupo!*

${NomeGrupo}`

;

await cristal.sendMessage(from, { text: textoApresentar }, { quoted: selo });
break;

case 'bemvindo':
case 'welcome':

  if (!isGroup) return reply(msg.SoEmGrupos)
  if (!isGroupAdmins && !SoDono) return reply(msg.SoAdmin)
  if (!isBotGroupAdmins) return reply(msg.BotAdmin)
  if (!args[0]) return reply('1 pra ligar / 0 pra desligar')

  if (Number(args[0]) === 1) {
    if (isBemvindo) return reply('Já está ativo')
    dataGp[0].wellcome.bemvindo1 = true
    setGp(dataGp)
    reply(MSG.Ativado)

  } else if (Number(args[0]) === 0) {
    if (!isBemvindo) return reply('Já está desativado')
    dataGp[0].wellcome.bemvindo1 = false
    setGp(dataGp)
    reply(MSG.Desativado)

  } else {
    reply('1 para ativar, 0 para desativar')
  }

  break

case 'totag':
case 'cita':
case 'hidetag': {
  if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
  let DFC = ""
  const rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
  const MRC_TD = MembrosGP.map(i => i.id)
  const comandoRegex = new RegExp(`^\\s*\\${prefix}${command}\\s*`, "i")
  const pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage
  const blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage
  const purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage
  const yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage
  const aud_d = isQuotedAudio ? rsm?.audioMessage : ""
  const figu_d = isQuotedSticker ? rsm?.stickerMessage : ""
  const red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? rsm?.conversation : info.message?.conversation || "";
  const green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text

  if (pink && !aud_d && !purple) {
    pink.caption = q.length > 1 ? q.trim() : (pink.caption || '').replace(comandoRegex, '').trim()
    pink.image = { url: pink.url }
    pink.mentions = MRC_TD
    DFC = pink
  }

  else if (blue && !aud_d && !purple) {
    blue.caption = q.length > 1 ? q.trim() : (blue.caption || '').replace(comandoRegex, '').trim()
    blue.video = { url: blue.url }
    blue.mentions = MRC_TD
    DFC = blue
  }

else if (red && !aud_d && !purple) {  
  const cu = red.replace(comandoRegex, "").trim()

  const cristalst = {  
    text: cu || '',  
    mentions: MRC_TD  
  }  

  DFC = cristalst  
}

  else if (!aud_d && !figu_d && green && !purple) {  
  const kuh = green.replace(comandoRegex, "").trim()

  const brown = {  
    text: kuh || '',  
    mentions: MRC_TD  
  }  

  DFC = brown  
}

  else if (purple) {
    purple.document = { url: purple.url }
    purple.mentions = MRC_TD
    DFC = purple
  }

  else if (yellow && !aud_d) {
    yellow.caption = q.length > 1 ? q.trim() : (yellow.caption || '').replace(comandoRegex, '').trim()
    yellow.document = { url: yellow.url }
    yellow.mentions = MRC_TD
    DFC = yellow
  }

  else if (figu_d && !aud_d) {
    figu_d.sticker = { url: figu_d.url }
    figu_d.mentions = MRC_TD
    DFC = figu_d
  }

  else if (aud_d) {
    aud_d.audio = { url: aud_d.url }
    aud_d.mentions = MRC_TD
    aud_d.ptt = false
    DFC = aud_d
  }

  if (DFC) {
    await cristal.sendMessage(from, DFC).catch(e => console.log(e))
  } else {
    reply("⚠️ Nenhuma mensagem válida encontrada para citar ou marcar todos.")
  }
}
break 

case 'marcar':
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
async function marcac() {
bla = []
blad = `‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎- ${NomeBot} Marcando os membros do grupo. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break

case "limpar": {
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);

  const brancoGrande = "\n ".repeat(80);

  for (let i = 0; i < 4; i++) {
    await cristal.sendMessage(from, { text: brancoGrande });
    await new Promise(r => setTimeout(r, 400));
  }
await reply("LIMPADO COM SUCESSO ✅")
}
break;

case 'so_adm':
  case 'soadm':
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(SoAdmins) return reply('Ja esta ativo')
dataGp[0].So_Admins = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!SoAdmins) return reply('Ja esta Desativado')
dataGp[0].So_Admins = false
setGp(dataGp)
reply('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'remover': 
case 'ban': 
case 'banir':
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
try {
if (!menc_os2 || menc_jid2[1]) 
return reply("Marque a mensagem do usuário ou mencione ele.");
if (!JSON.stringify(MembrosGP).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu.");
 
if (botNumber.includes(menc_os2)) {
await cristal.groupParticipantsUpdate(from, [sender], "demote");
return reply("Você tentou me banir! Agora perdeu o cargo de administrador.");
}

if (MeuNumero?.includes(menc_os2)) {
await cristal.groupParticipantsUpdate(from, [sender], "demote");
return reply("Você tentou banir meu dono, Agora perdeu o cargo de administrador.");
}

await cristal.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi removido(a) com sucesso.`, mentions: [menc_os2] });
await cristal.groupParticipantsUpdate(from, [menc_os2], "remove");  
 } catch (e) {
console.error(e);
reply("erro ao tentar remover o usuário.");
 }
break; 

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply(msg.Ativado)
cristal.sendMessage(from, {react: {text: "🔗", key: info?.key}});
dataGp[0].antilinkhard = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('O recurso de antilink hardcore já está desativado.')
cristal.sendMessage(from, {react: {text: "👀", key: info?.key}});
dataGp[0].antilinkhard = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'novolink':
case 'nlink':
case 'redefinir':
setTimeout(() => {reagir(from, "🧵")}, 300)
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
try {
await cristal.groupRevokeInvite(from)
await sleep(1000)
link = await cristal.groupInviteCode(from)
sendButton(from, {text: `[❗] link redefinido com sucesso 💢`, footer: NomeDoBot}, cristal, sender, [{type: `copy_text`, text: `𝙇𝙄𝙉𝙆 𝘼𝙌𝙐𝙄`, url: `https://chat.whatsapp.com/`+link}], selo)
} catch(e) { console.log(e)
reply("Erro ao tentar redefinir o link") }
break

case 'recrutar':
case 'convidar':
case 'adicionar':
case 'add': {

  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdmin);
  if (!isBotGroupAdmins) return reply(msg.BotAdmin);

  if (!q) 
    return reply(`❌ Informe o número.\nExemplo: *${prefix}add 559999999999*`);

  const usu = q.replace(/\D/g, '') + "@s.whatsapp.net";

  try {
    await cristal.groupParticipantsUpdate(from, [usu], "add");

    setTimeout(() => {
      reagir(from, "✅");
    }, 300);

    reply("✅ Usuário adicionado ao grupo com sucesso!");

  } catch (err) {
    console.error(err);
    reply("❌ Não foi possível adicionar o usuário.\nTalvez ele tenha bloqueado convites ou não permita ser adicionado.");
  }

  break;
}

case 'advertencia':
case 'advertir':
case 'adverter':
case 'adv':
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
if (!menc_os2) return reply("❗ Marque o membro que deseja advertir")

if (menc_os2 === botNumber)
  return reply("🤖 Você não pode me advertir.")

if (menc_os2 === MeuNumero)
  return reply("👑 Você não pode advertir o dono do bot.")

if (groupAdmins.includes(menc_os2))
  return reply("🛑 Você não pode advertir administradores.")

let advertDB = carregarAdvertencias()

if (!advertDB[from]) advertDB[from] = []

let ADVT = advertDB[from]

let AB = ADVT.findIndex(i => i.id === menc_os2)

if (AB >= 0) {

  if (ADVT[AB].adv < 2) {
  ADVT[AB].adv += 1
  salvarAdvertencias(advertDB)

  return mention(
    `⚠️ Atenção @${menc_os2.split("@")[0]}\n` +
    `📌 Advertência: ${ADVT[AB].adv}/3\n\n` +
    `Na próxima advertência você será banido ❌`
  )

} else {

  ADVT.splice(AB, 1)
  salvarAdvertencias(advertDB)

  try {
    await cristal.groupParticipantsUpdate(from, [menc_os2], "remove")
  } catch (e) {
    console.error(e)
    reply("Erro ao tentar remover o usuário.")
  }

  return
}
} else {

  ADVT.push({ id: menc_os2, adv: 1 })
  salvarAdvertencias(advertDB)

  return mention(
    `⚠️ Atenção @${menc_os2.split("@")[0]}\n` +
    `📌 Advertência: 1/3\n\n` +
    `Ao atingir 3 advertências você será banido ❌`
  )
}
break

case 'rmadv': {
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);
if (!menc_os2) return reply("cd o alvo pra mim tirar a adivertencia?")
let advertDB = carregarAdvertencias()
if (!advertDB[from]) advertDB[from] = []
let ADVT = advertDB[from]
let AB = ADVT.findIndex(i => i.id === menc_os2)
if (AB < 0)
  return reply("❌ Este usuário não possui advertências.")
ADVT.splice(AB, 1)
salvarAdvertencias(advertDB)
reply("✅ Advertência removida com sucesso.")
}
break

case 'advlist': 
  case 'listadv':
    case 'listaadv': 
      case 'advlista': {
if(!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono)
return reply(msg.SoAdmin);
if (!isBotGroupAdmins) 
return reply(msg.BotAdmin);

let advertDB = carregarAdvertencias()

if (!advertDB[from]) advertDB[from] = []

let ADVT = advertDB[from]

if (ADVT.length <= 0)
  return reply("📭 Não há membros com advertência neste grupo.")

mention(
`🗂 *Lista de usuários com advertência neste grupo:*

${ADVT.map((i, index) => 
`»${index + 1}«
👤 *Usuário:* @${i.id.split("@")[0]}
⚠️ *Advertências:* ${i.adv}/3`
).join('\n-\n')}`
)
}
break

case 'anti-mencao':
case 'antimencao':
case 'antimenc':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdm)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiMencionar) return reply('Ja esta ativo')
dataGp[0].antimencao = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti menção neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiMencionar) return reply('Ja esta Desativado')
dataGp[0].antimencao = false
setGp(dataGp)
reply('Desativou o recurso de anti menção de status neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'ativar': {
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdm)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
let fotogp;
  try {await reagir(from, "👑");
 fotogp = await cristal.profilePictureUrl(from, 'image').catch(_ => fotogp = "https://files.catbox.moe/6msjfi.jpg")

 const media = await prepareWAMessageMedia(
      { image: { url: fotogp } },
      { upload: cristal.waUploadToServer }
    );

    const texto = `*SISTEMAS DO GRUPO*

Selecione o sistema que deseja ativar:`

    const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "Gerenciar Ativações",
          sections: [
            {
              title: "Funções",
              rows: [
                { title: "Antilink", id: `${prefix}antilink 1` },
                { title: "Bemvindo 1", id: `${prefix}bemvindo 1` },
                { title: "Bemvindo 2", id: `${prefix}bemvindo2 1`},
                { title: "So Admins", id: `${prefix}so_adm 1`},
                { title: "Anti-menção", id: `${prefix}antimencao 1`}
              ]
            }
          ]
        })
      }
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      footer: { text: "Created by Sr.Patman👑" },
      nativeFlowMessage: { buttons: botoes }
    };

    await cristal.relayMessage(from, {
      interactiveMessage: {
        carouselMessage: { cards: [card] },
        body: { text: "Escolha um botão para ativar" }
      }
    }, {})

  } catch (e) {
    console.log(e)
    reply("Erro ao mostrar sistemas.")
  }
}
break;

case 'desativar': {
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdm)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
let fotogp2;
  try {await reagir(from, "💔");
 fotogp2 = await cristal.profilePictureUrl(from, 'image').catch(_ => fotogp2 = "https://files.catbox.moe/6msjfi.jpg")

 const media = await prepareWAMessageMedia(
      { image: { url: fotogp2 } },
      { upload: cristal.waUploadToServer }
    );

    const texto = `*SISTEMAS DO GRUPO*

Selecione o sistema que deseja desativar:`

    const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "gerenciar Desativação",
          sections: [
            {
              title: "Funções",
              rows: [
                { title: "Antilink", id: `${prefix}antilink 0` },
                { title: "Bemvindo 1", id: `${prefix}bemvindo 0` },
                { title: "Bemvindo 2", id: `${prefix}bemvindo2 0`},
                { title: "So Admins", id: `${prefix}so_adm 0`},
                { title: "Anti-menção", id: `${prefix}antimencao 0`}
              ]
            }
          ]
        })
      }
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      footer: { text: "Created by Sr.Patman👑" },
      nativeFlowMessage: { buttons: botoes }
    };

    await cristal.relayMessage(from, {
      interactiveMessage: {
        carouselMessage: { cards: [card] },
        body: { text: "Escolha um botão para desativar" }
      }
    }, {})

  } catch (e) {
    console.log(e)
    reply("Erro ao mostrar sistemas.")
  }
}
break;

case 'antifoto':
case 'antiimg': {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!isGroupAdmins) return reply(msg.SoAdm);
    if (!isBotGroupAdmins) return reply(msg.BotAdmin);

    if (!args[0]) return reply('📌 Use 1 para ativar ou 0 para desativar o Anti-Imagem neste grupo.');

    const opcao = Number(args[0]);

    if (opcao === 1) {
        if (isAntiImg) return reply('✅ O recurso de Anti-Imagem já está ativado neste grupo.');
        dataGp[0].antiimg = true;
        setGp(dataGp);
        reply('✅ Recurso de Anti-Imagem ativado com sucesso neste grupo!');
    } else if (opcao === 0) {
        if (!isAntiImg) return reply('❌ O recurso de Anti-Imagem já está desativado neste grupo.');
        dataGp[0].antiimg = false;
        setGp(dataGp);
        reply('✅ Recurso de Anti-Imagem desativado com sucesso neste grupo!');
    } else {
        reply('❌ Opção inválida! Use 1 para ativar ou 0 para desativar.');
    }
}
break;

case 'antivideo': {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!isGroupAdmins) return reply(msg.SoAdm);
    if (!isBotGroupAdmins) return reply(msg.BotAdmin);
    if (args.length < 1) return reply('1 para ativar / 0 para desativar');
    
    if (Number(args[0]) === 1) {
        if (isAntiVid) return reply('Já está ativo');
        dataGp[0].antivideo = true;
        setGp(dataGp);
        reply('Ativou com sucesso o recurso de anti video neste grupo ✔️');
    } else if (Number(args[0]) === 0) {
        if (!isAntiVid) return reply('Já está desativado');
        dataGp[0].antivideo = false;
        setGp(dataGp);
        reply('Desativou com sucesso o recurso de anti video neste grupo ✔️');
    } else {
        reply('1 para ativar, 0 para desativar');
    }
}
break;

case 'antiaudio': {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!isGroupAdmins) return reply(msg.SoAdm);
    if (!isBotGroupAdmins) return reply(msg.BotAdmin);
    if (args.length < 1) return reply('1 para ativar / 0 para desativar');
    
    if (Number(args[0]) === 1) {
        if (isAntiAudio) return reply('Já está ativo');
        dataGp[0].antiaudio = true;
        setGp(dataGp);
        reply('Ativou com sucesso o recurso de anti audio neste grupo ✔️');
    } else if (Number(args[0]) === 0) {
        if (!isAntiAudio) return reply('Já está desativado');
        dataGp[0].antiaudio = false;
        setGp(dataGp);
        reply('Desativou com sucesso o recurso de anti audio neste grupo ✔️');
    } else {
        reply('1 para ativar, 0 para desativar');
    }
}
break;

case 'antisticker': {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!isGroupAdmins) return reply(msg.SoAdm);
    if (!isBotGroupAdmins) return reply(msg.BotAdmin);
    if (args.length < 1) return reply('1 para ativar / 0 para desativar');
    
    if (Number(args[0]) === 1) {
        if (isAntiSticker) return reply('Já está ativo');
        dataGp[0].antisticker = true;
        setGp(dataGp);
        reply('Ativou com sucesso o recurso de anti sticker neste grupo ✔️');
    } else if (Number(args[0]) === 0) {
        if (!isAntiSticker) return reply('Já está desativado');
        dataGp[0].antisticker = false;
        setGp(dataGp);
        reply('Desativou com sucesso o recurso de anti sticker neste grupo ✔️');
    } else {
        reply('1 para ativar, 0 para desativar');
    }
}
break;

case 'antidocumento':
case 'antidoc': {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!isGroupAdmins) return reply(msg.SoAdm);
    if (!isBotGroupAdmins) return reply(msg.BotAdmin);
    if (args.length < 1) return reply('1 para ativar / 0 para desativar');
    
    if (Number(args[0]) === 1) {
        if (Antidoc) return reply('Já está ativo');
        dataGp[0].antidoc = true;
        setGp(dataGp);
        reply('Ativou com sucesso o recurso de anti documento neste grupo ✔️');
    } else if (Number(args[0]) === 0) {
        if (!Antidoc) return reply('Já está desativado');
        dataGp[0].antidoc = false;
        setGp(dataGp);
        reply('Desativou com sucesso o recurso de anti documento neste grupo ✔️');
    } else {
        reply('1 para ativar, 0 para desativar');
    }
}
break;

case 'antictt':
case 'anticontato': {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!isGroupAdmins) return reply(msg.SoAdm);
    if (!isBotGroupAdmins) return reply(msg.BotAdmin);
    if (args.length < 1) return reply('1 para ativar / 0 para desativar');
    
    if (Number(args[0]) === 1) {
        if (isAntiCtt) return reply('Já está ativo');
        dataGp[0].antictt = true;
        setGp(dataGp);
        reply('Ativou com sucesso o recurso de anticontato neste grupo 📝');
    } else if (Number(args[0]) === 0) {
        if (!isAntiCtt) return reply('Já está desativado');
        dataGp[0].antictt = false;
        setGp(dataGp);
        reply('Desativou com sucesso o recurso de anticontato neste grupo ✔️');
    } else {
        reply('1 para ativar, 0 para desativar');
    }
}
break;

case 'antinotas':
if (!isGroup) return reply(msg.SoEmGrupos);
if (!isGroupAdmins) return reply(msg.SoAdm);
if (!isBotGroupAdmins) return reply(msg.BotAdmin);
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Já Esta ativo')
dataGp[0].antinotas = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('Ja esta Desativado.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9adm':
case 'x9':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins && !SoDono) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isX9) return reply('Ja esta ativo')
dataGp[0].x9 = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isX9) return reply('Ja esta Desativado')
dataGp[0].x9 = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'simih': {
  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isGroupAdmins) return reply(msg.SoAdm);
  if (!isBotGroupAdmins) return reply(msg.BotAdmin);

  if (!args[0]) return reply('Use:\n1 = ativar\n0 = desativar')

  if (Number(args[0]) === 1) {
    if (isSimih) return reply('🤖 O simih já está ativo neste grupo.')
    dataGp[0].simih = true
    setGp(dataGp)
    reply('✅ Simih ativado!')
  } 
  else if (Number(args[0]) === 0) {
    if (!isSimih) return reply('⚠️ O simih já está desativado.')
    dataGp[0].simih = false
    setGp(dataGp)
    reply('❌ Simih desativado.')
  } 
  else {
    reply('❌ Use apenas:\n1 = ativar\n0 = desativar')
  }
}
break

case 'msgtemp':
case 'ephemeral':
case 'msgtemporaria':
    if (!isGroup) return reply(msg.SoEmGrupos)
  if (!isGroupAdmins) return reply(msg.SoAdm)
  if (!isBotGroupAdmins) return reply(msg.BotAdmin)

    if(args.length < 1) return reply(`⚙️ Use: ${prefix + command} 1 para ativar ou 0 para desativar`);

    try {
        if(Number(args[0]) === 1){
            await cristal.groupToggleEphemeral(from, 604800); 
            reply('✅ Mensagens temporárias ativadas (7 dias) no grupo.');
        } else if(Number(args[0]) === 0){
            await cristal.groupToggleEphemeral(from, 0);
            reply('⚠️ Mensagens temporárias desativadas.');
        } else {
            reply(`⚙️ Use: ${prefix + command} 1 para ativar ou 0 para desativar`);
        }
    } catch(err){
        console.error('Erro ao alterar ephemeral:', err);
        reply('❌ Não foi possível alterar o modo de mensagens temporárias.');
    }
break;

case 'modobn':
case 'modobrincadeiras': {

  if (!isGroup) return reply(msg.SoEmGrupos);
  if (!isGroupAdmins) return reply(msg.SoAdm);
  if (!isBotGroupAdmins) return reply(msg.BotAdmin);

  if (!args[0])
    return reply(`Use:\n${prefix + command} 1 (ativar)\n${prefix + command} 0 (desativar)`)

  const opcao = Number(args[0])

  if (opcao === 1) {
    if (isModoBn) return reply('🎮 O modo brincadeiras já está ativado.')

    dataGp[0].modobn = true
    setGp(dataGp)
    reply('🎉 Modo brincadeiras ativado no grupo!')

  } else if (opcao === 0) {
    if (!isModoBn) return reply('⚠️ O modo brincadeiras já está desativado.')

    dataGp[0].modobn = false
    setGp(dataGp)
    reply('🚫 Modo brincadeiras desativado no grupo.')

  } else {
    reply('❌ Use apenas 1 ou 0')
  }

  break
}

case "modoparceria": {

  
  if (!isGroupAdmins) return reply(msg.SoAdm);
  if (!isBotGroupAdmins) return reply(msg.BotAdmin);

  if (!args[0])
    return reply(
      `Use corretamente:\n${prefix + command} 1 (ativar)\n${prefix + command} 0 (desativar)`
    )

  const opcao = Number(args[0])

  const db = lerParceria()

  if (!db.grupos[from]) {
    db.grupos[from] = {
      ativo: false,
      parcerias: {}
    }
  }

  if (opcao === 1) {

    if (db.grupos[from].ativo)
      return reply('⚠️ O modo parceria já está ativado.')

    db.grupos[from].ativo = true
    salvarParceria(db)

    reply(MSG.Ativado)

  }
  else if (opcao === 0) {

    if (!db.grupos[from].ativo)
      return reply('⚠️ O modo parceria já está desativado.')

    db.grupos[from].ativo = false
    salvarParceria(db)

    reply(MSG.Desativado)

  }
  else {
    reply(`❌ Opção inválida.\nUse ${prefix + command} 1 ou 0`)
  }

  break
}

case "addparceria": {
  try {
    
  if (!isGroupAdmins) return reply(msg.SoAdm);
  if (!isBotGroupAdmins) return reply(msg.BotAdmin);

    const db = lerParceria()

    if (!db.grupos[from] || !db.grupos[from].ativo)
      return reply("❌ O modo parceria está desativado neste grupo.")

    let jidParceiro = null
    let link = null
    let amount = 1

    if (mentionedJid && mentionedJid.length > 0) {
      jidParceiro = mentionedJid[0]
      link = args[1]
      amount = Number(args[2]) || 1
    } 

    else if (args[0] && /^\d+$/.test(args[0])) {
      jidParceiro = args[0] + "@s.whatsapp.net"
      link = args[1]
      amount = Number(args[2]) || 1
    }

    if (!jidParceiro || !link)
      return reply(
        "Use:\n" +
        "• addparceria @user link\n" +
        "• addparceria 55999999999 link"
      )

    if (!db.grupos[from]) {
      db.grupos[from] = { ativo: true, parcerias: {} }
    }

    db.grupos[from].parcerias[jidParceiro] = {
      link,
      criadoPor: sender,
      date: new Date().toLocaleString("pt-BR"),
      used: 0,
      amount
    }

    salvarParceria(db)

    reply(
      `✅ Parceria adicionada com sucesso!\n\n` +
      `👤 Parceiro: @${jidParceiro.split("@")[0]}\n` +
      `🔗 Link: ${link}\n` +
      `📊 Limite: ${amount}`
    )

  } catch (e) {
    console.error(e)
    reply("❌ Erro ao adicionar parceria.")
  }
  break
}

case "rparceria":
case "removerparceria": {
  try {
    
  if (!isGroupAdmins) return reply(msg.SoAdm);
  if (!isBotGroupAdmins) return reply(msg.BotAdmin);

    const db = lerParceria()
    const grupo = db.grupos[from]

    if (!grupo || !Object.keys(grupo.parcerias).length)
      return reply("❌ Não há parcerias registradas neste grupo.")

    let jidParceiro = null
    let linkInformado = null

    if (mentionedJid && mentionedJid.length > 0) {
      jidParceiro = mentionedJid[0]
      linkInformado = args[1]
    } 

    else if (args[0] && /^\d+$/.test(args[0])) {
      jidParceiro = args[0] + "@s.whatsapp.net"
      linkInformado = args[1]
    }

    if (!jidParceiro)
      return reply(
        "Use:\n" +
        "• removerparceria @user\n" +
        "• removerparceria 55999999999"
      )

    const parceria = grupo.parcerias[jidParceiro]

    if (!parceria)
      return reply("❌ Essa parceria não existe.")

    if (linkInformado && parceria.link !== linkInformado) {
      return reply("❌ O link informado não corresponde à parceria.")
    }

    delete grupo.parcerias[jidParceiro]
    salvarParceria(db)

    reply(
      `🗑️ Parceria removida com sucesso!\n\n` +
      `👤 usuario: @${jidParceiro.split("@")[0]}`
    )

  } catch (e) {
    console.error(e)
    reply("❌ Erro ao remover parceria.")
  }
  break
}

case "parcerias": {
  
  if (!isGroupAdmins) return reply(msg.SoAdm);
  if (!isBotGroupAdmins) return reply(msg.BotAdmin);

  const db = lerParceria()
  const grupo = db.grupos[from]

  if (!grupo || !Object.keys(grupo.parcerias).length)
    return reply("• Não há parcerias registradas neste grupo! 🤷‍♀️")

  const groupData = await cristal.groupMetadata(from)

  let texto = `✨️ 𝙋𝙖𝙧𝙘𝙚𝙧𝙞𝙖𝙨 — ${groupData.subject}\n\n`

  let i = 1
  for (const jid in grupo.parcerias) {
    const p = grupo.parcerias[jid]

    texto +=
      ` 『 ${i} 』-> @${jid.split("@")[0]}\n` +
      ` • Link: ${p.link}\n` +
      ` • Uso: ${p.used}/${p.amount}\n` +
      ` • Criado por: @${p.criadoPor.split("@")[0]}\n` +
      ` • Data: ${p.date}\n\n`
    i++
  }

  texto += `> ⏤͟͟͞͞ ${NomeBot}`

  reply(texto)
  break
}


//prefixo 
case "prefixo":
case "prefix":
  try {
    await reagir(from, "⌨️");

    const texto = `
╭━━「 ⌨️ PREFIXO 」
┃
┃ ➪ Prefixo atual:
┃ *〖 ${prefix} 〗*
┃
╰━━━━━━━━━━━━`;

    const media = await prepareWAMessageMedia(
      { image: FotoMenu },
      { upload: cristal.waUploadToServer }
    );

    const card = {
      header: proto.Message.InteractiveMessage.Header.create({
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      }),
      body: { text: texto },
      footer: { text: `${NomeBot}` },
      nativeFlowMessage: {
        buttons: [
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "≡ MENU",
              id: `${prefix}menu`
            })
          },
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "📡 PING",
              id: `${prefix}ping`
            })
          }
        ]
      }
    };

    const msg = generateWAMessageFromContent(
      from,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              carouselMessage: { cards: [card] }
            }
          }
        }
      },
      {}
    );

    await cristal.relayMessage(from, msg.message, {
      messageId: msg.key.id
    });

    await reagir(from, "✅");

  } catch (e) {
    console.error("Erro prefixo:", e);
    reply("❌ Erro ao mostrar o prefixo.");
  }
break;

default:

//funcao 
if (!contadormsg[sender]) {
  contadormsg[sender] = {
    text: 0,
    audio: 0,
    sticker: 0,
    image: 0,
    video: 0,
    document: 0
  }
}

if (isAudio) contadormsg[sender].audio++
else if (isSticker) contadormsg[sender].sticker++
else if (isImage) contadormsg[sender].image++
else if (isVideo) contadormsg[sender].video++
else if (type === 'documentMessage') contadormsg[sender].document++
else contadormsg[sender].text++

fs.writeFileSync('./datab/contadormsg.json', JSON.stringify(contadormsg, null, 2))


if (!isCmd) return;

const CmdSimilar = ListaComandos(command);

if (!CmdSimilar || (CmdSimilar.similarity || 0) < 40) {

  await cristal.sendMessage(from, {
    react: { text: "❓", key: info.key }
  });

  const txt = CmdSimilar?.command
    ? `${prefix}${CmdSimilar.command}`
    : `Nenhum`;

  const sem = `${(CmdSimilar?.similarity || 0).toFixed(1)}%`;

  const ErrorComando = `
❖══════⚠️══════
 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙄𝙉𝙑Á𝙇𝙄𝘿𝙊
╚══════⚠️═════❖

🚫 O comando digitado não existe.

👤 Usuário: @${sender.split("@")[0]}
🌀 Similaridade: ${txt}
🪫 Porcentagem: ${sem}
🕓 Horário: ${hora2}

📘 Use *${prefix}menu*
━━━━━━━━━━━━━━━━━━━━━━━
`;

  await cristal.sendMessage(
    from,
    {
      text: ErrorComando,
      mentions: [sender],
      contextInfo: channelcristal
    },
    { quoted: info }
  );

  return;
}

}}catch (e) {
console.log("Erro geral no cristal.js:", e);

if (String(e).includes("aborted")) {
console.log("A API caiu ou não foi possível executar esta ação.");
}

 if (String(e).includes("aborted")) {
let file = require.resolve("./cristalect");
delete require.cache[file];
require(file);
}
}
};
}

let file2 = require.resolve(__filename)
fs.watchFile(file2, () => {
fs.unwatchFile(file2)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file2]
require(file2)
})

iniciarBot().catch(async(e) => {
console.log(colors.red("Erro apresentado no arquivo: './cristal - Error: "+e))
})
