const fs = require("fs")
const path = require("path")
const mutadosPath = path.join(__dirname, "./datab/mutados.json")

async function verificaMutados(sock, info) {
try {
if (!info.key.remoteJid.endsWith("@g.us")) return

const from = info.key.remoteJid
const sender = info.key.participant

if (!fs.existsSync(mutadosPath)) return

const mutados = JSON.parse(fs.readFileSync(mutadosPath))
if (!mutados[from] || !mutados[from][sender]) return

// Apaga qualquer mensagem do mutado
await sock.sendMessage(from, { delete: info.key })

mutados[from][sender].infra++

if (mutados[from][sender].infra >= 3) {
await sock.groupParticipantsUpdate(from, [sender], "remove")

await sock.sendMessage(from, {
text: `🚫 Usuário @${sender.split("@")[0]} foi removido por insistir mesmo mutado.`,
mentions: [sender]
})

delete mutados[from][sender]
}

fs.writeFileSync(mutadosPath, JSON.stringify(mutados, null, 2))

} catch (e) {
console.error("Erro mutado:", e)
}
}