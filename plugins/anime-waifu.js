import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let type = (command).toLowerCase()

switch (type) {
	
  case 'loli':
  case 'neko':
	     let loli = await conn.getFile(global.API('fgmods', `/api/img/${command}`, { }, 'apikey'))
	     conn.sendFile(m.chat, loli.data, 'img.jpg', `✅ Random ${command}`, m)
	break
	
case 'waifu':
case 'megumin':
  let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error'
    conn.sendFile(m.chat, json.url, 'img.jpg', `*succes ini istrimu..*`, m)
break

default:
 }
}
handler.help = ['waifu']
handler.tags = ['nime']
handler.command = ['waifu']
handler.diamond = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}