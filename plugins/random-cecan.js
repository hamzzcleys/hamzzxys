import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	let url = cecan[Math.floor(Math.random() * cecan.length)]
	conn.sendFile(m.chat, url, 'cecan.jpg', `*asupan cecan..*`, m)
}
handler.help = ['cecan']
handler.tags = ['random']
handler.command = /^(cecan)$/i
handler.premium = false
export default handler

global.cecan = [
 "https://telegra.ph/file/f86a29ea873105741b76f.mp4",
 "https://telegra.ph/file/6ff7aa6de9f3a6de2990f.mp4",
 "https://telegra.ph/file/59d272b940322c48b2fb8.mp4",
"https://telegra.ph/file/0467a1db0b005cb041eee.mp4",
"https://telegra.ph/file/5ba6c79cf059c4ea804f6.mp4",
"https://telegra.ph/file/204a312b6034aec87a671.mp4",
"https://telegra.ph/file/6ca19d4f092c239ca25de.mp4",
"https://telegra.ph/file/9db977696344ff9957541.mp4",
"https://telegra.ph/file/5eb49bf51833a09b364ca.mp4",
"https://telegra.ph/file/90b919995d11b38f394f7.mp4",
"https://telegra.ph/file/e84d57eb99c0aaeba5ad4.mp4",
"https://telegra.ph/file/8d934e1546c7749ed8f2f.mp4",
"https://telegra.ph/file/1e1571276140312376acc.mp4",
"https://b.top4top.io/m_1931yxodg0.mp4",
"https://k.top4top.io/m_193161p380.mp4",
"https://l.top4top.io/m_1931i4g3p1.mp4",
"https://a.top4top.io/m_1931tjlio2.mp4",
"https://g.top4top.io/m_1931z2mc40.mp4",
"https://h.top4top.io/m_1931auyof1.mp4",
"https://i.top4top.io/m_19315hrle2.mp4",
"https://j.top4top.io/m_1931xul5a3.mp4",
"https://l.top4top.io/m_1931o92nr0.mp4",
"https://a.top4top.io/m_1931j1rh21.mp4",
"https://b.top4top.io/m_1931iaqpg2.mp4",
"https://c.top4top.io/m_1931s5zlj3.mp4",
"https://d.top4top.io/m_1931x0g5a4.mp4",
"https://i.top4top.io/m_1931oj76n0.mp4",
"https://j.top4top.io/m_19319gl3d1.mp4",
"https://k.top4top.io/m_1931u52cq2.mp4",
"https://l.top4top.io/m_1931mvgj73.mp4",
"https://a.top4top.io/m_1931u07oz4.mp4",
"https://j.top4top.io/m_1931h1fo60.mp4",
"https://k.top4top.io/m_1931mro3u1.mp4",
"https://l.top4top.io/m_1931kx0ac2.mp4",
"https://a.top4top.io/m_1931g9ezq3.mp4",
"https://b.top4top.io/m_1931plin14.mp4",
"https://c.top4top.io/m_1931aaxri5.mp4",
"https://d.top4top.io/m_1931ijzzn6.mp4",
"https://e.top4top.io/m_1931ugycd7.mp4",
"https://f.top4top.io/m_1931l14nk8.mp4",
"https://g.top4top.io/m_1931crgqt9.mp4",
"https://b.top4top.io/m_1930thxw90.mp4",
"https://d.top4top.io/m_1930pezhp0.mp4",
"https://c.top4top.io/m_1930cjgbx0.mp4",
"https://b.top4top.io/m_1930v6vhg0.mp4",
"https://f.top4top.io/m_1930uh7ud0.mp4",
"https://a.top4top.io/m_1930c9cpb0.mp4",
"https://k.top4top.io/m_19308amkf0.mp4",
"https://d.top4top.io/m_1930wjaq60.mp4",
"https://i.top4top.io/m_1930n2um40.mp4",
"https://i.top4top.io/m_1930e14pi0.mp4",
"https://i.top4top.io/m_1930w6lwf0.mp4",
"https://e.top4top.io/m_19307autl0.mp4",
"https://d.top4top.io/m_1930i6tfc0.mp4",
"https://c.top4top.io/m_1930qmr7u0.mp4",
"https://d.top4top.io/m_1930itbte1.mp4",
"https://i.top4top.io/m_1930ze4oq0.mp4",
"https://j.top4top.io/m_1930kkqyh1.mp4",
"https://f.top4top.io/m_1930zevlz0.mp4",
"https://g.top4top.io/m_1930q0apu1.mp4",
"https://h.top4top.io/m_1930trfsv2.mp4",
"https://e.top4top.io/m_1930ns2zo0.mp4",
"https://k.top4top.io/m_1930j9i810.mp4",
"https://f.top4top.io/m_1930wtj580.mp4",
"https://d.top4top.io/m_1930a2isv0.mp4",
"https://e.top4top.io/m_1930wbgc41.mp4",
"https://f.top4top.io/m_1930urbj02.mp4",
"https://b.top4top.io/m_1930ceiqv0.mp4",
"https://i.top4top.io/m_1931a0z6o0.mp4",
"https://a.top4top.io/m_193190b500.mp4",
"https://b.top4top.io/m_1931dcixz1.mp4",
"https://g.top4top.io/m_19317gpjp0.mp4",
"https://i.top4top.io/m_1931cc22w1.mp4",
"https://j.top4top.io/m_1931xn6412.mp4",
"https://g.top4top.io/m_1931silxz0.mp4",
"https://h.top4top.io/m_1931as4mg1.mp4",
"https://i.top4top.io/m_1931p9j5v0.mp4",
"https://e.top4top.io/m_1931mgeuy0.mp4",
"https://f.top4top.io/m_1931lw9381.mp4",
"https://g.top4top.io/m_1931vm0dk2.mp4",
"https://h.top4top.io/m_1931fiv8x3.mp4",
"https://b.top4top.io/m_1931jm3dt0.mp4",
"https://e.top4top.io/m_1931i7yag1.mp4",
"https://f.top4top.io/m_1931dr5ya2.mp4",
"https://g.top4top.io/m_193172kpg3.mp4",
"https://h.top4top.io/m_1931j3b224.mp4",
"https://j.top4top.io/m_19317ykt25.mp4",
"https://k.top4top.io/m_1931o0vh16.mp4",
"https://l.top4top.io/m_1931ssfbn7.mp4",
"https://a.top4top.io/m_19318t7458.mp4",
"https://b.top4top.io/m_1931vhu759.mp4",
 ]