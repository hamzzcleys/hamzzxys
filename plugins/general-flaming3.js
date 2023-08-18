import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('_Loading..._')
  let res = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=500&scaleHeight=300&text=${response[0]}`
  conn.sendFile(m.chat, res, 'flaa.jpg', `*Succesfull...*`, m, false)
}
handler.help = ['flaming3 <text>']
handler.tags = ['general']
handler.command = /^(flaming3)$/i

export default handler