import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/hamzzcleys/Random-Image/main/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*cowo..*', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*cewe..*', m)
}

handler.help = ['ppcouple']
handler.tags = ['nime']
handler.command = /^ppcouple|ppcp$/i
handler.limit = false

export default handler