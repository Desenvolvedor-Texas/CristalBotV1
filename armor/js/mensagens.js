

const mensagensSoAdm = [
  "ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ."
];

const mensagensSoDono = [
  "❌ Esse menu é exclusivo do *meu dono*!"
];

const mensagensSoEmGrupos = [
"⚠️ Por favor, use esse comando apenas em grupos."
];

const mensagensBotAdmin = [
"Eu preciso ser adm, se não será impossível realizar o seu pedido!"
];


const mensagensAguarde = [
    "Quase pronto...*Estou finalizando a entrega do seu pedido*."
];

const mensagensDownload = [
    "⏱️🔗 *Realizando Download.*",
    "⚡📦 *Transferindo!**Estou enviando o arquivo."
];

const mensagensNaoVipp = [
  "🚫 Apenas *VIPs* podem usar este comando.Peça ao dono para ativar seu VIP."
];
const mensagensModoBrincadeira = [
"🚫 As brincadeiras estão desativadas neste grupo.\nPeça um adm para ativar o modobn 1"
];

const msg = {
    SoAdm: mensagensSoAdm[Math.floor(Math.random() * mensagensSoAdm.length)],
    SoDono: mensagensSoDono[Math.floor(Math.random() * mensagensSoDono.length)],
    BotAdmin: mensagensBotAdmin[Math.floor(Math.random() * mensagensBotAdmin.length)],
    SoEmGrupos: mensagensSoEmGrupos[Math.floor(Math.random() * mensagensSoEmGrupos.length)],
    Download: mensagensDownload[Math.floor(Math.random() * mensagensDownload.length)],
    Aguarde: mensagensAguarde[Math.floor(Math.random() * mensagensAguarde.length)],
    IsVipp: mensagensNaoVipp[Math.floor(Math.random() * mensagensNaoVipp.length)],
    ModoBrincadeira: mensagensModoBrincadeira[Math.floor(Math.random() * mensagensModoBrincadeira.length)] 
};


const Cmd = (command, NomeGrupo, prefix) => ({
    Ativado: `
 🟢  𝐀𝐓𝐈𝐕𝐀𝐃𝐎 🟢 

✦  **𝐑𝐞𝐜𝐮𝐫𝐬𝐨 𝐀𝐭𝐢𝐯𝐚𝐝𝐨 𝐜𝐨𝐦 𝐒𝐮𝐜𝐞𝐬𝐬𝐨!**

📜  **𝐂𝐨𝐦𝐚𝐧𝐝𝐨:**  『 ${command} 』
🏷️  **𝐆𝐫𝐮𝐩𝐨:**  『 ${NomeGrupo} 』

━━━━━━━━━━━━━━━━━━━

⚙️  **𝐏𝐚𝐫𝐚 𝐃𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 𝐨 𝐑𝐞𝐜𝐮𝐫𝐬𝐨**
✍️  **𝐔𝐬𝐞:**

➤  *${prefix}${command} 0*

╰━━━━━━━━━━━━━━━━━╯
`,
    Desativado: `
🔴  𝐃𝐄𝐒𝐀𝐓𝐈𝐕𝐀𝐃𝐎 🔴 

✦  **𝐑𝐞𝐜𝐮𝐫𝐬𝐨 𝐃𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐝𝐨!**

📜  **𝐂𝐨𝐦𝐚𝐧𝐝𝐨:**  『 ${command} 』
🏷️  **𝐆𝐫𝐮𝐩𝐨:**  『 ${NomeGrupo} 』

━━━━━━━━━━━━━━━━━━━

⚙️  **𝐏𝐚𝐫𝐚 𝐀𝐭𝐢𝐯𝐚𝐫 𝐍𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞**
✍️  **𝐔𝐬𝐞:**

➤  *${prefix}${command} 1*

╰━━━━━━━━━━━━━━━━━━━━━╯
`
});


module.exports = { msg, Cmd };
