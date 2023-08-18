let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.iq)}`, m)
}
handler.help = ['iqtest']
handler.tags = ['fun']
handler.command = /^(iqtest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
export default handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.iq = [
'1% AOWKWK BURIQ!',
'14% kaya alien',
'23% lumayan',
'35% gantengnya nanggung',
'50% ganteng setengah',
'65% ganteng normal',
'80% anjay ganteng banget kaya Shahrukhan',
'95% perfect sih',
'100% gaada obat, ganteng bat gilak',
'100000000% gak usah di tanya lagi bah, gantengnya unlimited semua orang mah kalah',
]