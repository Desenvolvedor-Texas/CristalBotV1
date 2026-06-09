const fs = require("fs");
const { jidNormalizedUser } = require("@whiskeysockets/baileys");

async function X9groupadm(kayrosmd, sock) {
  try {
    const groupId = sock.id;

    let alvo;
    if (sock.action === "add" || sock.action === "remove") {
      alvo = jidNormalizedUser(sock.participants[0]);
    } else if (sock.action === "promote" || sock.action === "demote") {
      alvo = (sock.participants && sock.participants[0])
                ? jidNormalizedUser(sock.participants[0])
                : sock.author; 
    }

    const X9group = `../../armor/grupos/ATIVACOES/${groupId}.json`;
    if (!fs.existsSync(X9group)) return;

    const jsonGp = JSON.parse(fs.readFileSync(X9group));
    if (!jsonGp[0]?.x9) return;

    const mentions = [sock.author, alvo];

    if (sock.action === "demote" || sock.action === "promote") {
      await kayrosmd.sendMessage(groupId, { 
        text: `❕Ação detectada: O Participante @${sock.author.split("@")[0]} ${
          sock.action === "demote" ? "rebaixou" : "promoveu"
        } um participante ${alvo.split("@")[0]}`,
        mentions
      });
    }

    if (sock.action === "remove") {
      await kayrosmd.sendMessage(groupId, { 
        text: `❕Ação detectada: O Participante @${sock.author.split("@")[0]} removeu um participante ${alvo.split("@")[0]}`,
        mentions
      });
    }

    if (sock.action === "add") {
      await kayrosmd.sendMessage(groupId, { 
        text: `❕Ação detectada: O Participante @${sock.author.split("@")[0]} adicionou ou permitiu a entrada de um participante ${alvo.split("@")[0]}`,
        mentions
      });
    }

  } catch (e) {
    console.error('[ERRO NO X9]:', e);
  }
}

module.exports = X9groupadm;