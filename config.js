import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile } from 'fs'

// Ini owner real no fek"
global.owner = [
  ['6285850961679'], // global owner 0
  ['6285850961679'], // global owner 1
]
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = {
  can: 'https://pnggilajacn.my.id',
  skizo: 'https://xzn.wtf'
}
global.APIKeys = {
  'https://pnggilajacn.my.id': 'ItsukaChan',
  'https://xzn.wtf': 'Rippanteq7'
}

global.thumbnailUrl = [
  'https://telegra.ph/file/b7520fb9dfdb4d670c066.jpg'
]

//====== Url Template Buttons ======//
global.dtu = 'ᴅᴏɴᴀᴛᴇ'
global.urlnya = "gapenting"
//========== callButtons ==========//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '6285850961679'

// Sticker WM
global.packname = `Hbot`
global.author = `©2023`

// Random
global.wm = `Hbot`
global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
global.ephemeral = '' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
global.monitor = `u2218384-cac4df9b51f43fa4e499c7d6` // Ambil di https://uptimerobot.com
global.multiplier = 69 // The higher, The harder levelup

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
