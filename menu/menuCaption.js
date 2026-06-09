const { NickDono, NomeBot, prefix } = require(`../dono/dono.json`);

const menu = (prefix, sender, NickDono, NomeBot, data, hora, NumberDono, version) => {
	
return `
╭┄╼❐ 𓊈 𝐈𝐍𝐅𝐎 𓊉
╏❄⪼𝐃𝐎𝐍𝐎: ${NickDono}
╏❄⪼𝐁𝐎𝐓: ${NomeBot} 
╏❄⪼𝐏𝐑𝐄𝐅𝐈𝐗𝐎: ${prefix}
╏❄⪼𝐄𝐒𝐓𝐀𝐃𝐎: Online 
╏❄⪼𝐔𝐒𝐔𝐀𝐑𝐈𝐎: @${sender?.split("@")[0]}

╰┄╼❐

╭┄╼❐     𓊈 𝐌𝐄𝐍𝐔 𓊉
╏❄⪼${prefix}menu
╏❄⪼${prefix}menuadm
╏❄⪼${prefix}menudono
╏❄⪼${prefix}menudown
╏❄⪼${prefix}menufig
╏❄⪼${prefix}menuia
╏❄⪼${prefix}menuvip
╏❄⪼${prefix}menubot
╏❄⪼${prefix}menubn
╰┄╼❐`;

};
exports.menu = menu;

const menuadm = (prefix, sender) => {
return `
╭︵‿︵‿୨🔥୧‿︵‿︵╮
┃ 
┃  👑 Meu Dono: ${NickDono}
┃  🤖 Meu nome: ${NomeBot}
┃  ⌨️ prefixo: ${prefix}
┃  📡 Status: Online
┃  👤 Usuário: @${sender?.split("@")[0]}
┃ 
╰︶﹏︶﹏୨📍୧︶﹏︶╯

╭┄╼❐    𓊈 🛡️ 𝐌𝐄𝐍𝐔 𝐀𝐃𝐌 🛡️ 𓊉
╏❄⪼ ${prefix}totag
╏❄⪼ ${prefix}marcar
╏❄⪼ ${prefix}ativar
╏❄⪼ ${prefix}desativar
╏❄⪼ ${prefix}ephemeral 1/0
╏❄⪼ ${prefix}antilink 1/0
╏❄⪼ ${prefix}antifoto 1/0
╏❄⪼ ${prefix}antivideo 1/0
╏❄⪼ ${prefix}antiaudio 1/0
╏❄⪼ ${prefix}x9adm 1/0
╏❄⪼ ${prefix}simih 1/0
╏❄⪼ ${prefix}antisticker 1/0
╏❄⪼ ${prefix}modoparceria 1/0
╏❄⪼ ${prefix}antidoc 1/0
╏❄⪼ ${prefix}antictt 1/0
╏❄⪼ ${prefix}autofigu 1/0
╏❄⪼ ${prefix}so_adm 1/0
╏❄⪼ ${prefix}bemvindo 1/0
╏❄⪼ ${prefix}bemvindo2 1/0
╏❄⪼ ${prefix}apresentar
╏❄⪼ ${prefix}ban (@)
╏❄⪼ ${prefix}fotogp (marcar)
╏❄⪼ ${prefix}rmfotogp 
╏❄⪼ ${prefix}apagar (marcar msg)
╏❄⪼ ${prefix}adm (@)
╏❄⪼ ${prefix}removeradm (@)
╏❄⪼ ${prefix}revelar (marcar msg)
╏❄⪼ ${prefix}adv (@)
╏❄⪼ ${prefix}rmadv (@)
╏❄⪼ ${prefix}advlist
╏❄⪼ ${prefix}addparceria (numero/link/limite) 
╏❄⪼ ${prefix}rparceria (numero) 
╏❄⪼ ${prefix}parcerias
╏❄⪼ ${prefix}linkgp
╏❄⪼ ${prefix}novolink (redefinir)
╏❄⪼ ${prefix}limpar
╏❄⪼ ${prefix}descgp (descrição)
╏❄⪼ ${prefix}nomegp (nome)
╏❄⪼ ${prefix}infogp
╏❄⪼ ${prefix}grupo lock/unlock
╏❄⪼ ${prefix}grupo a/f
╰┄╼❐`;

};
exports.menuadm = menuadm;


const menuStickers = (prefix, sender) => {
return `
  ╭︵‿︵‿୨🔥୧‿︵‿︵╮
┃ 
┃  👑 Meu Dono: ${NickDono}
┃  🤖 Meu nome: ${NomeBot}
┃  ⌨️ prefixo: ${prefix}
┃  📡 Status: Online
┃  👤 Usuário: @${sender?.split("@")[0]}
┃ 
╰︶﹏︶﹏୨📍୧︶﹏︶╯
╭🌟・───────・🌟╮
│   🖼️ 𓊈 𝐌𝐄𝐍𝐔 𝐅𝐈𝐆 𓊉 🖼️
╰🌟・───────・🌟╯

╭┄┄┄┄┄┄┄┄┄┄❐
╏❄⪼ ${prefix}s
╏❄⪼ ${prefix}stk
╏❄⪼ ${prefix}sticker
╏❄⪼ ${prefix}st
╏❄⪼ ${prefix}toimg
╏❄⪼ ${prefix}figuale
╏❄⪼ ${prefix}figurinhas
╏❄⪼ ${prefix}figu_engracada
╏❄⪼ ${prefix}figu_roblox
╏❄⪼ ${prefix}figu_raiva
╏❄⪼ ${prefix}figu_anime
╏❄⪼ ${prefix}figu_memes
╏❄⪼ ${prefix}figu_coreana
╏❄⪼ ${prefix}figu_bebe
╏❄⪼ ${prefix}figu_desenho
╏❄⪼ ${prefix}figu_animais
╏❄⪼ ${prefix}figu_flork
╏❄⪼ ${prefix}figu_emoji
╏❄⪼ ${prefix}rename
╏❄⪼ ${prefix}attp
╏❄⪼ ${prefix}attp2
╏❄⪼ ${prefix}take
╏❄⪼ ${prefix}bratimg
╏❄⪼ ${prefix}brat
╰┄┄┄┄┄┄┄┄┄┄❐`;
};
exports.menuStickers = menuStickers;

const menuDono = (prefix, sender) => {
return `
  ╭︵‿︵‿୨🔥୧‿︵‿︵╮
┃ 
┃  👑 Meu Dono: ${NickDono}
┃  🤖 Meu nome: ${NomeBot}
┃  ⌨️ prefixo: ${prefix}
┃  📡 Status: Online
┃  👤 Usuário: @${sender?.split("@")[0]}
┃ 
╰︶﹏︶﹏୨📍୧︶﹏︶╯

╭💎━━━━━━━━━━━━💎╮
│   🎩  𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎  🎩
╰💎━━━━━━━━━━━━💎╯

│ 🎩  𝐄𝐒𝐒𝐄𝐍𝐂𝐈𝐀𝐋 🎩
╏❄⪼ ${prefix}cristalzip
╏❄⪼ ${prefix}getcase (cmd)
╏❄⪼ ${prefix}caselinha (cmd)
╏❄⪼ ${prefix}cobrar (numero)
╏❄⪼ ${prefix}addvip (numero)
╏❄⪼ ${prefix}vervip 
╏❄⪼ ${prefix}delvip (numero)
╏❄⪼ ${prefix}bio-bot (bio)
╏❄⪼ ${prefix}name-perfil-bot 
╏❄⪼ ${prefix}rm-fotobot
╏❄⪼ ${prefix}setperfil
╏❄⪼ ${prefix}listgp
╏❄⪼ ${prefix}seradm
╏❄⪼ ${prefix}sermemb
╏❄⪼ ${prefix}block (numero)
╏❄⪼ ${prefix}unblock (numero)
╏❄⪼ ${prefix}entrar
╏❄⪼ ${prefix}sair
╏❄⪼ ${prefix}get
╏❄⪼ ${prefix}idgp
╏❄⪼ ${prefix}arquivos (arquivo)
╏❄⪼ ${prefix}figuid (fig)
╏❄⪼ ${prefix}addhash (fig)
╏❄⪼ ${prefix}listahashb
╏❄⪼ ${prefix}verificarhash
╏❄⪼ ${prefix}listahash
╏❄⪼ ${prefix}delhash


│⚙️ 𝐒𝐈𝐒𝐓𝐄𝐌𝐀
╏❄⪼ ${prefix}viewmsg (1/0)
╏❄⪼ ${prefix}boton
╏❄⪼ ${prefix}botoff
╏❄⪼ ${prefix}so_dono
╏❄⪼ ${prefix}botoes
╏❄⪼ ${prefix}verificado
╏❄⪼ ${prefix}dono1 (numero)
╏❄⪼ ${prefix}dono2 (numero)
╏❄⪼ ${prefix}dono3 (numero)
╏❄⪼ ${prefix}dono4 (numero)
╏❄⪼ ${prefix}dono5 (numero)
╏❄⪼ ${prefix}dono6 (numero)
╏❄⪼ ${prefix}setprefix (prefix)
╏❄⪼ ${prefix}fotomenu (foto)
╏❄⪼ ${prefix}nome-bot (nome)
╏❄⪼ ${prefix}nick-dono (nome)
╏❄⪼ ${prefix}reiniciar
╏❄⪼ ${prefix}criarjson (nome)
╏❄⪼ ${prefix}rmjson (nome)
╏❄⪼ ${prefix}wprivacygp --help
╏❄⪼ ${prefix}wprivacyph --help
╏❄⪼ ${prefix}transmitir (msg)
╏❄⪼ ${prefix}bcgroup (msg)
╏❄⪼ ${prefix}antiprivado
╏❄⪼ ${prefix}antiprivado2
╏❄⪼ ${prefix}antiprivado3
╏❄⪼ ${prefix}savemp3 (nome.mp3, nome.ogg etc)
╏❄⪼ ${prefix}delmp3 (nome.mp3, nome.ogg etc)
╏❄⪼ ${prefix}listmp3
╏❄⪼ ${prefix}ls
╏❄⪼ ${prefix}ls -s
╏❄⪼ ${prefix}antiligar
╏❄⪼ ${prefix}reviverqr
╏❄⪼ ${prefix}exec (cmd)
╏❄⪼ ${prefix}eval

│ 📚 𝐉𝐎𝐆𝐎𝐒
╏❄⪼ ${prefix}addforca
╏❄⪼ ${prefix}rmforca
╏❄⪼ ${prefix}rmtema
╏❄⪼ ${prefix}listword

│ 💳 𝐀𝐋𝐔𝐆𝐔𝐄𝐋
╏❄⪼ ${prefix}addrent
╏❄⪼ ${prefix}tirarrent
╏❄⪼ ${prefix}delrent
╏❄⪼ ${prefix}cortesia24
╏❄⪼ ${prefix}listrent
╏❄⪼ ${prefix}lastrent
`;

};
exports.menuDono = menuDono;

const menuDown = (prefix, sender) => {
return `
  ╭︵‿︵‿୨🔥୧‿︵‿︵╮
┃ 
┃  👑 Meu Dono: ${NickDono}
┃  🤖 Meu nome: ${NomeBot}
┃  ⌨️ prefixo: ${prefix}
┃  📡 Status: Online
┃  👤 Usuário:  @${sender?.split("@")[0]}
┃ 
╰︶﹏︶﹏୨📍୧︶﹏︶╯

╭⬇️・───────・⬇️╮
   𝐌𝐄𝐍𝐔 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒 
╰⬇️・───────・⬇️╯

╭┄┄┄┄┄┄┄┄┄┄❐
╏❄⪼ ${prefix}gerarlink (marcar)
╏❄⪼ ${prefix}gerarlink2 (marcar)
╏❄⪼ ${prefix}p (nome)
╏❄⪼ ${prefix}play (nome)
╏❄⪼ ${prefix}play2 (nome)
╏❄⪼ ${prefix}play3 (nome)
╏❄⪼ ${prefix}play4 (nome)
╏❄⪼ ${prefix}play5 (nome
╏❄⪼ ${prefix}ytmp3 (musica)
╏❄⪼ ${prefix}ytmp4 (link)
╏❄⪼ ${prefix}ytdoc (link)
╏❄⪼ ${prefix}ytpm3doc (link)
╏❄⪼ ${prefix}ytmp4doc (link)
╏❄⪼ ${prefix}ytsearch (nome)
╏❄⪼ ${prefix}pesquisa-ytb (nome)
╏❄⪼ ${prefix}instadl (link)
╏❄⪼ ${prefix}instagram (link)
╏❄⪼ ${prefix}toktokdl (link)
╏❄⪼ ${prefix}tiktok (link)
╏❄⪼ ${prefix}tiktokaud (link)
╏❄⪼ ${prefix}ttsearch (nome)
╏❄⪼ ${prefix}spotify (nome)
╏❄⪼ ${prefix}edit2 (nome)
╏❄⪼ ${prefix}edit2  (nome)
╏❄⪼ ${prefix}edit aleatorio
╏❄⪼ ${prefix}edit-hunter
╏❄⪼ ${prefix}edit-bleach
╏❄⪼ ${prefix}edit-kaisen
╏❄⪼ ${prefix}edit-chainsaw
╏❄⪼ ${prefix}edit-dragonball
╏❄⪼ ${prefix}edit-slayer
╏❄⪼ ${prefix}edit-naruto
╏❄⪼ ${prefix}edit-sakura
╏❄⪼ ${prefix}gtts (frase)
╏❄⪼ ${prefix}tts (frase)
╏❄⪼ ${prefix}gtts2 (frase
╏❄⪼ ${prefix}tts2 (frase)
╏❄⪼ ${prefix}topmusic 
╏❄⪼ ${prefix}topmusica
╏❄⪼ ${prefix}mediafire (link)
╰┄┄┄┄┄┄┄┄┄┄❐

╭🔊・───────・🔊╮
 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐀́𝐔𝐃𝐈𝐎𝐒 
╰🔊・───────・🔊╯
╭┄┄┄┄┄┄┄┄┄┄❐
╏❄⪼ ${prefix}audiorapido
╏❄⪼ ${prefix}audiolento
╏❄⪼ ${prefix}estourar
╏❄⪼ ${prefix}agudo
╏❄⪼ ${prefix}grave
╏❄⪼ ${prefix}eco
╏❄⪼ ${prefix}robo
╏❄⪼ ${prefix}reverse
╏❄⪼ ${prefix}caverna
╏❄⪼ ${prefix}helio
╰┄┄┄┄┄┄┄┄┄┄❐

╭🎥・───────・🎥╮
 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐕𝐈𝐃𝐄𝐎𝐒 
╰🎥・───────・🎥╯
╭┄┄┄┄┄┄┄┄┄┄❐
╏❄⪼ ${prefix}videolento
╏❄⪼ ${prefix}videorapido
╏❄⪼ ${prefix}videoreverse
╏❄⪼ ${prefix}videorobo
╏❄⪼ ${prefix}videobw
╏❄⪼ ${prefix}videoespelho
╏❄⪼ ${prefix}videozoom
╏❄⪼ ${prefix}videovhs
╰┄┄┄┄┄┄┄┄┄┄❐`;
};
exports.menuDown = menuDown;

const menuBn = (prefix, sender) => {
return `
  ╭︵‿︵‿୨🔥୧‿︵‿︵╮
┃ 
┃  👑 Meu Dono: ${NickDono}
┃  🤖 Meu nome: ${NomeBot}
┃  ⌨️ prefixo: ${prefix}
┃  📡 Status: Online
┃  👤 Usuário: @${sender?.split("@")[0]}
┃ 
╰︶﹏︶﹏୨📍୧︶﹏︶╯
╭🌟・───────・🌟╮
🎮 𓊈 𝐌𝐄𝐍𝐔 𝐉𝐎𝐆𝐎𝐒 𓊉 🎮
╰🌟・───────・🌟╯

╭┄┄┄┄┄┄┄┄┄┄❐
╏❄⪼ ${prefix}ppt
╏❄⪼ ${prefix}startforca
╏❄⪼ ${prefix}minhaforca
╏❄⪼ ${prefix}fc
╏❄⪼ ${prefix}rrfc
╏❄⪼ ${prefix}adivinharnmr
╏❄⪼ ${prefix}advn-nmr
╏❄⪼ ${prefix}rankativo
╏❄⪼ ${prefix}rankinativo
╏❄⪼ ${prefix}eununca
╏❄⪼ ${prefix}fatos
╏❄⪼ ${prefix}curiosidsdes
╏❄⪼ ${prefix}cantadas
╏❄⪼ ${prefix}adivinha
╏❄⪼ ${prefix}cassino
╏❄⪼ ${prefix}piadas
╏❄⪼ ${prefix}
╏❄⪼ ${prefix}
╏❄⪼ ${prefix}
╏❄⪼ ${prefix}
╏❄⪼ ${prefix}
╏❄⪼ ${prefix}
╏❄⪼ ${prefix}
╰┄┄┄┄┄┄┄┄┄┄❐

╭🌟・─────────────・🌟╮
🎭 𓊈 𝐌𝐄𝐍𝐔 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒 𓊉 🎭
╰🌟・─────────────・🌟╯

╭┄┄┄┄┄┄┄┄┄┄❐
╏❄⪼ ${prefix}perfil (@)
╏❄⪼ ${prefix}beijar (@)
╏❄⪼ ${prefix}abraçar (@)
╏❄⪼ ${prefix}matar (@)
╏❄⪼ ${prefix}bebado (@)
╏❄⪼ ${prefix}bebada (@)
╏❄⪼ ${prefix}arremessar (@)
╏❄⪼ ${prefix}reviver (@)
╏❄⪼ ${prefix}gay (@)
╏❄⪼ ${prefix}dogolpe (@)
╏❄⪼ ${prefix}tapa (@)
╏❄⪼ ${prefix}consolar (@)
╏❄⪼ ${prefix}talarico (@)
╏❄⪼ ${prefix}fiel (@)
╏❄⪼ ${prefix}louco (@)
╏❄⪼ ${prefix}louca (@)
╏❄⪼ ${prefix}sigma (@)
╏❄⪼ ${prefix}corno (@)
╏❄⪼ ${prefix}corna (@)
╏❄⪼ ${prefix}death (@)
╏❄⪼ ${prefix}chutar (@)
╏❄⪼ ${prefix}bonito (@)
╏❄⪼ ${prefix}casal
╏❄⪼ ${prefix}casar (@)
╏❄⪼ ${prefix}soco (@)
╏❄⪼ ${prefix}suicidar (@)
╏❄⪼ ${prefix}vesgo (@)
╏❄⪼ ${prefix}romance (@)
╏❄⪼ ${prefix}chance (@)
╏❄⪼ ${prefix}chance2 (@)
╏❄⪼ ${prefix}roleta (@)
╏❄⪼ ${prefix}rankcomunista
╏❄⪼ ${prefix}rankgay
╏❄⪼ ${prefix}rankcorno
╏❄⪼ ${prefix}rankgado
╏❄⪼ ${prefix}rankgostosa
╏❄⪼ ${prefix}rankgostoso
╏❄⪼ ${prefix}rankotakus
╏❄⪼ ${prefix}ranknerd
╏❄⪼ ${prefix}ranksafado
╏❄⪼ ${prefix}rankiludido
╏❄⪼ ${prefix}rankdorminhoco
╏❄⪼ ${prefix}rankfofoqueiro
╏❄⪼ ${prefix}rankmemeiro
╏❄⪼ ${prefix}rankromantico
╏❄⪼ ${prefix}rankprotetor
╏❄⪼ ${prefix}rankdrama
╏❄⪼ ${prefix}ranktrapaceiro
╏❄⪼ ${prefix}ranklenda
╏❄⪼ ${prefix}rankativo
╏❄⪼ ${prefix}rankinativo
╰┄┄┄┄┄┄┄┄┄┄❐`;
};

exports.menuBn = menuBn;

const menuIa = (prefix, sender) => {
return `
╭︵‿︵‿୨🔥୧‿︵‿︵╮
┃ 
┃  👑 Meu Dono: ${NickDono}
┃  🤖 Meu nome: ${NomeBot}
┃  ⌨️ prefixo: ${prefix}
┃  📡 Status: Online
┃  👤 Usuário:  @${sender?.split("@")[0]}
┃ 
╰︶﹏︶﹏୨📍୧︶﹏︶╯
╭🔍・───────・🔍╮
      𝐌𝐄𝐍𝐔 𝐈𝐀 
╰🔍・───────・🔍╯

╭┄┄┄┄┄┄┄┄┄┄❐
╏❄⪼ ${prefix}cristal (pesquisa)
╏❄⪼ ${prefix}metadinha
╏❄⪼ ${prefix}metadinha2
╏❄⪼ ${prefix}gemini (pesquisa)
╏❄⪼ ${prefix}chatgpt (pesquisa)
╏❄⪼ ${prefix}chatgpt2 (pesquisa)
╏❄⪼ ${prefix}chatgpt3 (pesquisa)
╏❄⪼ ${prefix}bing  (pesquisa)
╏❄⪼ ${prefix}llama (pesquisa)
╏❄⪼ ${prefix}gerarimg (texto)
╏❄⪼ ${prefix}Notícias
╏❄⪼ ${prefix}g1
╏❄⪼ ${prefix}clima (cidade)
╏❄⪼ ${prefix}tempo (cidade)
╏❄⪼ ${prefix}dicionario (termo)
╏❄⪼ ${prefix}gerarnick (nick)
╏❄⪼ ${prefix}horóscopo (signo)
╏❄⪼ ${prefix}signo (signo)
╏❄⪼ ${prefix}printdesite  (site)
╏❄⪼ ${prefix}frases (musica)
╏❄⪼ ${prefix}raizq (numeros)
╏❄⪼ ${prefix}letra (musica)
╏❄⪼ ${prefix}liryc (musica)
╏❄⪼ ${prefix}letram (musica)
╏❄⪼ ${prefix}letramusic (musica)
╏❄⪼ ${prefix}letramusica (musica)
╏❄⪼ ${prefix}traduzir en/pt
╏❄⪼ ${prefix}Math
╏❄⪼ ${prefix}calcular
╏❄⪼ ${prefix}googleimage (imagem)
╏❄⪼ ${prefix}img (imagem)
╏❄⪼ ${prefix}cybercook  (ex: bolo)
╏❄⪼ ${prefix}receita (ex: churros)
╏❄⪼ ${prefix}wikipedia (termo)
╏❄⪼ ${prefix}wiki (termo)
╏❄⪼ ${prefix}playstore (app)
╏❄⪼ ${prefix}anime
╏❄⪼ ${prefix}personagem (personagem)
╏❄⪼ ${prefix}cartaz
╏❄⪼ ${prefix}wallpaper (nome)
╏❄⪼ ${prefix}pinterest (nome)
╏❄⪼ ${prefix}pinterest2 (nome)
╏❄⪼ ${prefix}pinterest3 (link do video)
╏❄⪼ ${prefix}pinterestdl (link)
╏❄⪼ ${prefix}mixemoji (😅 🤡)
╏❄⪼ ${prefix}emojimix (👑 🫠)
╏❄⪼ ${prefix}encurta3 (link)
╏❄⪼ ${prefix}gethtml (link)
╏❄⪼ ${prefix}transcrever (audio)
╏❄⪼ ${prefix}ascli (texto)
╏❄⪼ ${prefix}ascli2 (texto)
╏❄⪼ ${prefix}audiomeme (meme)
╰┄┄┄┄┄┄┄┄┄┄❐`;
};

exports.menuIa = menuIa;

const menuBot = (prefix, sender) => {
return `
  ╭︵‿︵‿୨🔥୧‿︵‿︵╮
┃ 
┃  👑 Meu Dono: ${NickDono}
┃  🤖 Meu nome: ${NomeBot}
┃  ⌨️ prefixo: ${prefix}
┃  📡 Status: Online
┃  👤 Usuário: @${sender?.split("@")[0]}
┃ 
╰︶﹏︶﹏୨📍୧︶﹏︶╯
╭🤖・───────・🤖
    𝐌𝐄𝐍𝐔 𝐁𝐎𝐓
╰🤖・───────・🤖

╭┄┄┄┄┄┄┄┄┄┄❐
╏❄⪼ ${prefix}pix
╏❄⪼ ${prefix}totalcmd
╏❄⪼ ${prefix}criador
╏❄⪼ ${prefix}ping
╏❄⪼ ${prefix}sugestao
╏❄⪼ ${prefix}infobot
╏❄⪼ ${prefix}bug
╏❄⪼ ${prefix}avaliar (1 a 10)
╏❄⪼ ${prefix}canal
╏❄⪼ ${prefix}grupofc
╏❄⪼ ${prefix}test
╏❄⪼ ${prefix}bot
╏❄⪼ ${prefix}cristal
╰┄┄┄┄┄┄┄┄┄┄❐`;
};
exports.menuBot = menuBot;

const menuLogos = (prefix, sender) => {
return `
  ╭︵‿︵‿୨🔥୧‿︵‿︵╮
┃ 
┃  👑 Meu Dono: ${NickDono}
┃  🤖 Meu nome: ${NomeBot}
┃  ⌨️ prefixo: ${prefix}
┃  📡 Status: Online
┃  👤 Usuário: @${sender?.split("@")[0]}
┃ 
╰︶﹏︶﹏୨📍୧︶﹏︶╯
╭🖼️・───────・🖼️
   𝐌𝐄𝐍𝐔 𝐋𝐎𝐆𝐎𝐒 
╰🖼️・───────・🖼️

╭┄┄┄┄┄┄┄┄┄┄❐
╏❄⪼ ${prefix}ffavatar (nome)
╏❄⪼ ${prefix}ffbanner (nome/nome)
╏❄⪼ ${prefix}angelwing (nome)
╏❄⪼ ${prefix}hackneon (nome)
╏❄⪼ ${prefix}gizquadro (nome)
╏❄⪼ ${prefix}blackpink (nome)
╏❄⪼ ${prefix}fpsmascote (nome)
╏❄⪼ ${prefix}txtquadrinhos (nome)
╏❄⪼ ${prefix}logogame (nome)
╏❄⪼ ${prefix}shadow (nome)
╏❄⪼ ${prefix}txtborboleta (nome)
╏❄⪼ ${prefix}cup (nome)
╏❄⪼ ${prefix}harryp (nome)
╏❄⪼ ${prefix}efeitoneon (nome)
╏❄⪼ ${prefix}cemiterio (nome)
╏❄⪼ ${prefix}neon2 (nome)
╏❄⪼ ${prefix}lobometal (nome)
╏❄⪼ ${prefix}lovemsg3 (nome)
╏❄⪼ ${prefix}madeira (nome)
╏❄⪼ ${prefix}coffecup2 (nome)
╏❄⪼ ${prefix}florwooden (nome)
╏❄⪼ ${prefix}romantic (nome)
╏❄⪼ ${prefix}fire (nome)
╏❄⪼ ${prefix}narutologo (nome)
╏❄⪼ ${prefix}papel (nome)
╏❄⪼ ${prefix}smoke (nome)
╏❄⪼ ${prefix}lovemsg (nome)
╏❄⪼ ${prefix}lovemsg2 (nome)
╏❄⪼ ${prefix}candy (nome)
╏❄⪼ ${prefix}lava (nome)
╏❄⪼ ${prefix}fluffy (nome)
╏❄⪼ ${prefix}cool (nome)
╏❄⪼ ${prefix}water (nome)
╏❄⪼ ${prefix}comic (nome)
╏❄⪼ ${prefix}ice (nome)
╏❄⪼ ${prefix}fortune (nome)
╏❄⪼ ${prefix}blue (nome)
╏❄⪼ ${prefix}elegant (nome)
╏❄⪼ ${prefix}silver (nome)
╏❄⪼ ${prefix}pretoebranco (link)
╏❄⪼ ${prefix}desfocar (link)
╏❄⪼ ${prefix}circulo (link)
╏❄⪼ ${prefix}serpia( link)
╏❄⪼ ${prefix}inverter (link)
╏❄⪼ ${prefix}karaba (link)
╏❄⪼ ${prefix}bobross (link)
╏❄⪼ ${prefix}bolsonaro (link)
╏❄⪼ ${prefix}mms (link)
╏❄⪼ ${prefix}briggs (link)
╏❄⪼ ${prefix}shottv (link)
╏❄⪼ ${prefix}killtv (link)
╏❄⪼ ${prefix}pepe (link)
╏❄⪼ ${prefix}ednaldo (link)
╏❄⪼ ${prefix}spongebob (link)
╰┄┄┄┄┄┄┄┄┄┄❐`;

};
exports.menuLogos = menuLogos;

const menuVip = (prefix, sender) => {
return `
  ╭︵‿︵‿୨🎩୧‿︵‿︵╮
┃ 
┃  👑 Meu Dono: ${NickDono}
┃  🤖 Meu nome: ${NomeBot}
┃  ⌨️ prefixo: ${prefix}
┃  📡 Status: Online
┃  👤 Usuário: @${sender?.split("@")[0]}
┃ 
╰︶﹏︶﹏୨📍୧︶﹏︶╯

╭🎩・───────・🎩╮
      𝐌𝐄𝐍𝐔 VIP 
╰🎩・───────・🎩╯

╭┄┄┄┄┄┄┄┄┄┄❐
╏❄⪼ ${prefix}qrcode (termo)
╏❄⪼ ${prefix}gerarqr (termo)
╏❄⪼ ${prefix}printdesite (site)
╏❄⪼ ${prefix}print (site)
╏❄⪼ ${prefix}checknumero (numero)
╏❄⪼ ${prefix}ddd (ex: 31)
╏❄⪼ ${prefix}cep (cep)
╏❄⪼ ${prefix}encurta (link)
╏❄⪼ ${prefix}encurta2 (link)
╏❄⪼ ${prefix}codificar (codigo)
╏❄⪼ ${prefix}decodificar (codigo binario)
╏❄⪼ ${prefix}removebg (imagem)
╰┄┄┄┄┄┄┄┄┄┄❐`;
};
exports.menuVip = menuVip;
