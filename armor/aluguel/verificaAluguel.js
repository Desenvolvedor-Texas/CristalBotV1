const grupos = require("../../armor/aluguel/grupos.json")
const chaves = require("../../armor/aluguel/keys.json")

module.exports = function verificaAluguel(groupId) {
  const agora = Date.now()

  // aluguel direto
  if (grupos.some(g => g.id === groupId && g.expira > agora)) {
    return true
  }

  // chave
  if (chaves.some(c => c.grupo === groupId && c.usada && c.expira > agora)) {
    return true
  }

  return false
}