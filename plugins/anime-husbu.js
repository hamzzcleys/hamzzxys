import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
	let url = husbu[Math.floor(Math.random() * husbu.length)]
	conn.sendFile(m.chat, url, 'husbu.jpg', `*succes...*`, m)
}
handler.help = ['husbu']
handler.tags = ['nime']
handler.command = /^(husbu)$/i
handler.premium = false
export default handler
//30pict
//kalau mo tambahin" aja
global.husbu = [
"https://i.pinimg.com/originals/ad/de/a8/addea895a1e367dbb7ec77ed643441c2.jpg",
"https://i.pinimg.com/originals/8c/5f/84/8c5f845ef47b196e364dbd55560abc7c.jpg",
"https://i.pinimg.com/originals/c3/10/4b/c3104beed2932a1e6f24d592eade7d4b.jpg",
"https://i.pinimg.com/originals/08/fd/8f/08fd8f049b790e1666713da3db2396fd.png",
"https://i.pinimg.com/originals/5b/4d/3c/5b4d3c16ff93c5924fa6486519b675aa.jpg",
"https://i.pinimg.com/originals/f2/95/42/f295423c8168af259ccb5f2acefaff1b.jpg",
"https://i.pinimg.com/originals/c7/33/ce/c733ce7a89e3376e2e99e1988ae0416b.jpg",
"https://i.pinimg.com/originals/92/73/44/927344aff0050e7214eff46d173967ec.jpg",
"https://i.pinimg.com/originals/7b/16/df/7b16dfd42ce3f77522529365a8693ae6.jpg",
"https://i.pinimg.com/originals/40/7c/1f/407c1ff2f73a327e17a366f84671d91e.jpg",
"https://i.pinimg.com/originals/5c/ec/37/5cec3735d5ca352ac374eeaf10d0038f.jpg",
"https://i.pinimg.com/originals/dc/95/9c/dc959c36c13f673056eb8899b1447551.jpg",
"https://i.pinimg.com/originals/ec/57/a7/ec57a7ba11031e143b222c006235c2e4.jpg",
"https://i.pinimg.com/originals/1d/b3/1e/1db31ecd2d58a2081fd85f201e8ba399.jpg",
"https://i.pinimg.com/originals/d0/cd/2c/d0cd2c187f3c1c8748bd96631c1e5d00.jpg",
"https://i.pinimg.com/originals/e5/52/e2/e552e29b43dd71ffd669fc73a13fcad4.jpg",
"https://i.pinimg.com/originals/92/d8/c5/92d8c5f6f481747ab2d7645f2ef6b229.jpg",
"https://i.pinimg.com/originals/f5/8c/d2/f58cd2b5806d80e7dd9b17e74df973ed.jpg",
"https://i.pinimg.com/originals/63/e4/80/63e480ed67a44cc849e7d5cde18c73ef.jpg",
"https://i.pinimg.com/originals/00/85/08/00850896f6fc90f95e7842dd01e0fd62.jpg",
"https://i.pinimg.com/originals/0a/76/ce/0a76cebd989ceb8b7bef91fc84c5ac78.jpg",
"https://i.pinimg.com/originals/dd/dc/02/dddc02414cefab0f5f009d73dc0c3431.jpg",
"https://i.pinimg.com/originals/51/ea/16/51ea1678e225e5349be1d7515fb030c8.jpg",
"https://i.pinimg.com/originals/74/4f/12/744f125cd6f78929737f573c55a9a6d4.jpg",
"https://i.pinimg.com/originals/e8/ca/2f/e8ca2f775fd9ac9bd4d601c80ba9edab.jpg",
"https://i.pinimg.com/originals/9d/dd/95/9ddd958462d7af0413985931b377cbee.jpg",
"https://i.pinimg.com/originals/1b/fd/49/1bfd49d7fe6e976339252bc97e3c48e1.jpg",
"https://i.pinimg.com/originals/6b/9d/ed/6b9ded92b2928c6345b391558a159d20.jpg",
"https://i.pinimg.com/originals/f3/68/fa/f368fa2dc4d529fd0c3f98a4460f1b43.jpg",
"https://i.pinimg.com/originals/00/bf/1f/00bf1fe39a252fd39ad45776c643b819.jpg",
 ]