const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  Browsers,
  jidNormalizedUser,
  DisconnectReason
} = require("@whiskeysockets/baileys");

const colors = require("colors");
const P = require("pino");
const readline = require("readline");
const { banner2, banner3, data, hora, fs, Config2 } = require("./exports");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(text) {
  return new Promise(resolve => rl.question(text, resolve));
}

const FIXED_IMG = "https://files.catbox.moe/b0u2c9.jpg";
const X9groupadm = require("./armor/js/verificax9");

async function Bot() {
  const pastaAuth = "./dono/Qr-CristalV1";
  const { state, saveCreds } = await useMultiFileAuthState(pastaAuth);
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state,
    logger: P({ level: "silent" }),
    printQRInTerminal: false,
    markOnlineOnConnect: false,
    browser: Browsers.ubuntu("Safari"),
    syncFullHistory: true
  });

  // ===== LOGIN COM PAIRING CODE =====
  if (!state.creds.registered) {
    console.log(colors.cyan("\nNenhuma sessão encontrada. Vamos conectar seu número.\n"));
    try {
      let number = await question(colors.yellow("Digite seu número (ex: 5599999999999): "));
      number = number.replace(/\D/g, "");
      const code = await sock.requestPairingCode(number);
      console.log(colors.cyan(`\nCódigo de pareamento:\n\n   ${code}\n`));
      rl.close();
    } catch (err) {
      console.log(colors.red("Erro ao gerar código:"), err);
    }
  }

  // ===== EVENTOS =====
  sock.ev.process(async (events) => {

    // ===== MENSAGENS =====
    if (events["messages.upsert"]) {
      try {
        require("./cristal.js")(sock, events["messages.upsert"]);
      } catch (e) {
        console.log(colors.red("Erro ao processar mensagem:"), e);
      }
    }

    // ===== GRUPO =====
    if (events["group-participants.update"]) {
      try {
        const cristal = events["group-participants.update"];
        const participante = cristal.participants?.[0];
        if (!participante) return;

        const participanteLimpo = jidNormalizedUser(participante);

        // ===== BEM-VINDO =====
        if (cristal.action === "add") {
          const legendaAdd = `🙈• 𝐒𝐄𝐉𝐀 𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎(𝐀)!!

🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
【✔】ʟᴏʟɪ🍭 【✔】ɢᴀᴅᴏ🐃
【✔】ɢᴀʏ🏳️‍🌈 【✔】ʟᴇsʙɪᴄᴀ✂️
【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
🥂`;
          await sock.sendMessage(cristal.id, {
            image: { url: FIXED_IMG },
            caption: legendaAdd,
            mentions: [participanteLimpo]
          });
        }

        // ===== SAIU =====
        if (cristal.action === "remove") {
          await sock.sendMessage(cristal.id, {
            image: { url: FIXED_IMG },
            caption: "Eitaa, um ser insignificante acabou de sair do grupo...",
            mentions: [participanteLimpo]
          });
        }

        // ===== X9 (LOGO ABAIXO DO BEM-VINDO) =====
        await X9groupadm(sock, cristal);

      } catch (e) {
        console.error("[ERRO GRUPO]:", e);
      }
    }

    // ===== CREDENCIAIS =====
    if (events["creds.update"]) {
      await saveCreds();
    }
  });

  // ===== CONEXÃO =====
  sock.ev.on("connection.update", ({ connection, lastDisconnect }) => {
    const statusCode = lastDisconnect?.error?.output?.statusCode;

    if (connection === "open") {
      console.log(banner3?.string);
      console.log(banner2?.string);
      console.log(colors.green("CONECTADO COM SUCESSO"));
    }

    if (connection === "close" && statusCode !== DisconnectReason.loggedOut) {
      setTimeout(() => Bot(), 2000);
    }
  });

  return sock;
}

// ===== HOT RELOAD =====
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(colors.red(`Alterações salvas - ${__filename}`));
  delete require.cache[file];
  require(file);
});

Bot().catch(console.error);
