import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('_Loading..._')
  let res = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=500&scaleHeight=300&text=${response[0]}`
  conn.sendFile(m.chat, res, 'flaaa.jpg', `*Succesfull...*`, m, false)
}
handler.help = ['flaming4 <text>']
handler.tags = ['general']
handler.command = /^(flaming4)$/i

export default handler