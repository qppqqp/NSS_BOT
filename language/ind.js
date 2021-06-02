const a = '```'

exports.wait = () => {
	return`*🏴‍☠️ESPERAR🏴‍☠️ PROCESAR*`
}

exports.succes = () => {
	return`*🏴‍☠️ÉXITO🏴‍☠️*`
}

exports.lvlon = () => {
	return`*🏴‍☠️HABILITAR🏴‍☠️ NIVELACIÓN*`
}

exports.lvloff = () => {
	return`*🏴‍☠️DESHABILITAR🏴‍☠️ NIVELAR*`
}

exports.lvlnul = () => {
	return`*TUS NIVELES AÚN VACÍOS 🏴‍☠️*`
}

exports.lvlnoon = () => {
	return`*LOS NIVELES DE GRUB NO SE HAN ACTIVADO 🏴‍☠️*`
}

exports.noregis = () => {
	return`*🏴‍☠️NO REGISTRADO🏴‍☠️*\n\n*Cómo registrarse ${prefix}daftar nombres|edad* \n*ejemplo ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*🏴‍☠️YA REGISTRADO🏴‍☠️\n\n*ya estás registrado en la base de datos del bot*`
}

exports.stikga = () => {
	return`*sí, falló, inténtalo de nuevo en un rato 🏴‍☠️*`
}

exports.linkga = () => {
	return`*lo siento, el enlace no es válido 🏴‍☠️*`
}

exports.groupo = () => {
	return`*SOLO GRUPO 🏴‍☠️*`
}

exports.ownerb = () => {
	return`*PROPIETARIO BOT ÚNICAMENTE 🏴‍☠️*`
}

exports.ownerg = () => {
	return`*SOLO GRUPO DE PROPIETARIOS 🏴‍☠️*`
}

exports.admin = () => {
	return`*SOLO GRUPO ADMINISTRADOR 🏴‍☠️*`
}

exports.badmin = () => {
	return`*LOS BOTS DEBEN SER ADMINISTRADOS 🏴‍☠️*`
}

exports.nsfwoff = () => {
	return`*NSFW NO ACTIVO*`
}

exports.bug = () => {
	return`*El problema se ha informado al propietario del BOT, no se responderá a los informes falsos 🏴‍☠️*`
}

exports.wrongf = () => {
	return`*formato incorrecto / texto vacío 🏴‍☠️*`
}

exports.clears = () => {
	return`*borrar todo el éxito*`
}

exports.pc = () => {
	return`*🏴‍☠️REGISTRO🏴‍☠️*\n\nPara saber si está registrado, consulte el mensaje que le envié \n\nNOTA:\n*si no ha recibido el mensaje. significa que no ha guardado el nombre del número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*🏴‍☠️DATOS DEL PAÍS🏴‍☠️*\n\nya estás registrado con datos \n\n➦nombre\n➥${namaUser}\n➦número\n➥wa.me/${sender.split("@")[0]}\n➦edad\n➥${umurUser}\n➦tiempo de registro\n➥${time}\n\n┏━⌬ *NSS* ⌬━\n┣⊱${serialUser}\n┗⊱NOTA : no olvide este número porque es importante`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* extraviado\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, client , process , pepolu, groupMetadata, groupAdmins, isGroup, isGroupAdmins, isLevelingOn, isWelkom, isOwner, isAntiLink, isBadWord) => { 
	if (isOwner) {
	    owner = "Owner"
	} else if (!isOwner) {
	    owner = "User"
	}
	if (isGroup){
	return `
${a}SOBRE EL USUARIO 🏴‍☠️${a}
 ${a}[+] Nama : ${pushname}${a}
 ${a}[+] Nomer : wa.me/${sender.split("@")[0]}${a}
 ${a}[+] owmer bot : ${owner}${a}
 ${a}[+] Uang mu : Rp${uangku},-${a}
 ${a}[+] XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}[+] Level : ${getLevelingLevel(sender)}${a}
 ${a}[+] Role : ${role}${a}
 ${a}[+] User register : ${_registered.length}${a}
 
${a}ACERCA DE BOT 🏴‍☠️${a}
 ${a}[+] Name : ${client.user.name}${a}
 ${a}[+] browser : ${client.browserDescription[1]}${a}
 ${a}[+] server : ${client.browserDescription[0]}${a}
 ${a}[+] version : ${client.browserDescription[2]}${a}
 ${a}[+] speed : ${process.uptime()}${a}
 ${a}[+] handphone : ${client.user.phone.device_manufacturer}${a}
 ${a}[+] versi wa : ${client.user.phone.wa_version}${a}
 
${a}ACERCA DEL GRUPO 🏴‍☠️${a}
 ${a}[+] Name group : ${groupMetadata.subject}${a}
 ${a}[+] admin group : ${isGroupAdmins}${a}
 ${a}[+] owner group : wa.me/${groupMetadata.owner.split("@")}${a}
 ${a}[+] total member : ${groupMetadata.participants.length}${a}
 ${a}[+] total admin : ${groupAdmins.length}${a}
 ${a}[+] welcome : ${isWelkom}${a}
 ${a}[+] antibadword : ${isBadWord}${a}
 ${a}[+] leveling : ${isLevelingOn}${a}
 ${a}[+] antilink : ${isAntiLink}${a}
 
 
 ${a}*Uso total del comando*${a}
 *${pepolu} usó 🏴‍☠️*

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

${a}☠️MENÚ DEL FABRICANTE${a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}text3d${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}☠️MENÚ DIVERTIDO${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}readmore${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}emoji${a}
 ${a}│•${prefix}animequotes${a}
 ${a}│•${prefix}katacinta${a}
 ${a}│•${prefix}neonime${a}
 ${a}│•${prefix}stickerhide${a} ~[error]~
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}quotes${a}
 ${a}│•${prefix}moddroid${a} 
 ${a}│•${prefix}apkpure${a}
 ${a}╰•${prefix}happymod${a} 
 
${a}☠️MUTUO${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}☠️MEDIA MENU${a}
 ${a}│•${prefix}brainly${a}
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}beritahoax${a}
 ${a}│•${prefix}tiktok${a}
 ${a}│•${prefix}infonomor${a}
 ${a}│•${prefix}fototiktok${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a}
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}☠️CANCIÓN${a}
 ${a}│•${prefix}ytmp3${a}
 ${a}│•${prefix}ytmp4${a}
 ${a}╰•${prefix}joox${a}
 
${a}☠️NSFW${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}☠️LÍMITE Y DINERO${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}☠️MENÚ GRUPO${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}│•${prefix}join${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}☠️TOOLS${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}│•${prefix}wasted${a}
 ${a}│•${prefix}tourl${a}
 ${a}│•${prefix}triggered${a}
 ${a}│•${prefix}wanted${a}
 ${a}│•${prefix}facebookpage${a}
 ${a}│•${prefix}gtav${a}
 ${a}│•${prefix}costumwp${a}
 ${a}│•${prefix}pantaimalam${a}
 ${a}│•${prefix}crossgun${a}
 ${a}│•${prefix}bakar${a}
 ${a}│•${prefix}pencil${a}
 ${a}╰•${prefix}tupai${a}
 
${a}☠️ALMACENAMIENTO EN LA NUBE${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}☠️MENÚ PROPIETARIO${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}

${a}☠️GRACIAS A${a}
 ${a}│${a}
 ${a}│ • BALTA 🏴‍☠️${a}
 ${a}│ • BX1 🏴‍☠️${a}
 ${a}│ • CRIPTO 🏴‍☠️${a}
 ${a}│ • ANGEL 🏴‍☠️${a}
 ${a}│${a}
 ${a}╰ • NOTA : No supliques${a}
`
} else if (!isGroup) {
    return `
${a}☠️ABOUT USER${a}
 ${a}│ Nama : ${pushname}${a}
 ${a}│ Nomer : wa.me/${sender.split("@")[0]}${a}
 ${a}│ Uang mu : Rp${uangku},-${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Level : ${getLevelingLevel(sender)}${a}
 ${a}│ Role : ${role}${a}
 ${a}╰ User register : ${_registered.length}${a}
 
${a}☠️ABOUT BOT${a}
 ${a}│ • Name : ${client.user.name}${a}
 ${a}│ • browser : ${client.browserDescription[1]}${a}
 ${a}│ • server : ${client.browserDescription[0]}${a}
 ${a}│ • version : ${client.browserDescription[2]}${a}
 ${a}│ • speed : ${process.uptime()}${a}
 ${a}│ • handphone : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ • versi wa : ${client.user.phone.wa_version}${a}
 
 ${a}*Uso total del comando*${a}
 *${pepolu} Uso*

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

${a}☠️MENÚ DEL FABRICANTE${a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}text3d${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}☠️MENÚ DIVERTIDO${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}readmore${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}emoji${a}
 ${a}│•${prefix}animequotes${a}
 ${a}│•${prefix}katacinta${a}
 ${a}│•${prefix}neonime${a}
 ${a}│•${prefix}stickerhide${a} ~[error]~
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}quotes${a}
 ${a}│•${prefix}moddroid${a} 
 ${a}│•${prefix}apkpure${a}
 ${a}╰•${prefix}happymod${a} 
 
${a}☠️MUTUO${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}☠️MEDIA MENU${a}
 ${a}│•${prefix}brainly${a}
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}beritahoax${a}
 ${a}│•${prefix}tiktok${a}
 ${a}│•${prefix}infonomor${a}
 ${a}│•${prefix}fototiktok${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a}
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}☠️CANCIÓN${a}
 ${a}│•${prefix}ytmp3${a}
 ${a}│•${prefix}ytmp4${a}
 ${a}╰•${prefix}joox${a}
 
${a}☠️NSFW${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}☠️LÍMITE Y DINERO${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}☠️MENÚ GRUPO${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}│•${prefix}join${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}☠️TOOLS${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}│•${prefix}wasted${a}
 ${a}│•${prefix}tourl${a}
 ${a}│•${prefix}triggered${a}
 ${a}│•${prefix}wanted${a}
 ${a}│•${prefix}facebookpage${a}
 ${a}│•${prefix}gtav${a}
 ${a}│•${prefix}costumwp${a}
 ${a}│•${prefix}pantaimalam${a}
 ${a}│•${prefix}crossgun${a}
 ${a}│•${prefix}bakar${a}
 ${a}│•${prefix}pencil${a}
 ${a}╰•${prefix}tupai${a}
 
${a}☠️ALMACENAMIENTO EN LA NUBE${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}☠️MENÚ PROPIETARIO${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}

${a}☠️GRACIAS A${a}
 ${a}│${a}
 ${a}│ • BALTA 🏴‍☠️${a}
 ${a}│ • ANGEL 🏴‍☠️${a}
 ${a}│ • BX1 🏴‍☠️${a}
 ${a}│ • CRIPTO 🏴‍☠️${a}
 ${a}│${a}
 ${a}╰ • NOTA : No supliques${a}
`
}
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*felicitaciones 🏴‍☠️*
[+] *Nama* : ${pushname}
[+] *Nomer* : wa.me/${sender.split("@")[0]}
[+] *Xp* : ${getLevelingXp(sender)}
[+] *Limit* : +3
[+] *Role*: ${role}
[+] *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Lo siento ${pushname} El límite de hoy se acabó*\n*comprar límite para obtener límite / subir de nivel*`
}

exports.limitcount = (limitCounts) => {
	return`
*CONTAR LÍMITE 🏴‍☠️*
tu límite restante : ${limitCounts}

NOTA: para obtener el límite. puede pasar por subir de nivel o por límite de compra`
}

exports.satukos = () => {
	return`*Agregue el parámetro 1 / habilitar o 0 / deshabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nombre* : ${pushname}\n┣⊱ *habitación* : ${sender.split("@")[0]}\n┣⊱ *Dinero* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.afkOn = (pushname, reason) => {
    return `La función AFK funcionó *activado*!\n\n➸ *Nombre de usuario*: ${pushname}\n➸ *Razón*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*🏴‍☠️MODO AFK🏴‍☠️*\n\n¡Shhh! La persona está en AFK, ¡no te molestes!\n➸ *Razón*: ${getReason}\n➸ *Desde*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* ha vuelto de AFK! Bienvenido de nuevo ~`
}

exports.left = (num) => {
	return`C fue @${num.split('@')[0]} Rosquete de mierda`
}

exports.welcome = ( mdata , num ) => {
	return`Hola @${num.split('@')[0]}\SBienvenido al grupo *${mdata.subject}* Donde todos somos una familia`
}