import yts from 'yt-search'
import ytdl from 'ytdl-core'
import { apivisit } from './kanghit.js'
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Link URL..'
  let vid = await yts(ytdl.validateURL(text) ? { videoId: await ytdl.getURLVideoID(text) } : { query: text })
	vid = vid.videos ? vid.videos[0] : vid
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  let { title, description, url, seconds, timestamp, views, ago, image } = vid
  let capt = `*Title:* ${title}`
  try {
  let aud = await conn.sendMessage(m.chat, { [seconds > 1900 ? 'document' : 'audio']: { url: `http://playjs.hamzxy22.repl.co/?url=`+url+`&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg` }, mimetype: 'audio/mpeg', fileName: `${title}.mp3` }, { quoted: m })
  conn.sendMessage(m.chat, { text: capt }, { quoted: aud })
  await apivisit
  } catch (e) {
		console.log(e)
		m.reply(`Terjadi kesalahan.`)
	}
}
handler.help = handler.alias = [`ytmp3`,`yta`].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = /^(yta|ytmp3)$/i
export default handler