import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
	let url = meme[Math.floor(Math.random() * meme.length)]
	conn.sendFile(m.chat, url, 'meme.jpg', `*asupan meme..*`, m)
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i
handler.premium = false
export default handler

global.meme = [
"https://1.bp.blogspot.com/-tzbh1u0Q0x0/X9zzSQ7ctPI/AAAAAAAAUtw/NfPFuKuRHLcXhNqDRLg5jEz3xx-G0cHywCNcBGAsYHQ/s1080/meme_indonesia_gokil_130559598_213820970312403_6565488242261858116_n.jpg",
	"https://1.bp.blogspot.com/-BMoEg6cuBEA/X9zzS9kPYPI/AAAAAAAAUt0/V-oFvC1fyZY4W1_eicICtPEYQaXte9fwQCNcBGAsYHQ/s509/meme_indonesia_gokil_130574163_904871143585505_1836659838467416563_n.jpg",
	"https://1.bp.blogspot.com/-BAuB7v9xDCc/X9zzTMMSGpI/AAAAAAAAUt4/vOiTozBkqVgT9V0MxS5HxDQXCt4tcy8KQCNcBGAsYHQ/s1343/meme_indonesia_gokil_130578626_1345636132445352_756377830767725509_n.jpg",
	"https://1.bp.blogspot.com/-dVhqXKKa1ik/X9zzTSL1-2I/AAAAAAAAUt8/uXVO3gkS_zEngJO3pLsY-DZdfJqkNY3ogCNcBGAsYHQ/s320/meme_indonesia_gokil_130604522_394506938442748_2107040976320013530_n.jpg",
	"https://1.bp.blogspot.com/-Md9rd0s1rRI/X9zzUSVOmGI/AAAAAAAAUuY/R32n1YFCLckpLgPJ5AvI3qObcK1O9P1twCNcBGAsYHQ/s1080/meme_indonesia_gokil_130732318_1014980098984055_6288320571321797344_n.jpg",
	"https://1.bp.blogspot.com/-PSywVBZiO5s/X9zzYORk8NI/AAAAAAAAUu8/K3Xrj7YjjmQ4CiShvU11MfU0_kqPEDRhwCNcBGAsYHQ/s480/meme_indonesia_gokil_130829433_1263619567342642_2997987878465918953_n.jpg",
	"https://1.bp.blogspot.com/-KEEcM_0Mqlw/X9zzbOgyVLI/AAAAAAAAUvo/6YFpXcc4QhoUIV94Mlwwj-P02b0zyHz3QCNcBGAsYHQ/s720/meme_indonesia_gokil_131283197_168966521596830_6491895756050266793_n%2B%25281%2529.jpg",
	"https://1.bp.blogspot.com/-DF8XSLnKlw4/X7473ktG_oI/AAAAAAAAAAQ/iNQLgVv5ZH0TOtRMNX39MrDsR-9WvHcBgCLcBGAsYHQ/s600/dark_jokesidn_125413538_4708449659226988_2818050412611397571_n.jpg",
	"https://1.bp.blogspot.com/-Uh4ZHwYDzgc/X7473pFJNtI/AAAAAAAAAAU/CDdg5yCpjYs0EAbM36wWJt64IaKCd9dwACLcBGAsYHQ/s600/dark_jokesidn_125763208_287219762648327_8451338174815846745_n.jpg",
	"https://1.bp.blogspot.com/-5JbETHhqjsE/X7473dr_KAI/AAAAAAAAAAM/6PSuwjgwRi861Wv_wugXKK1F0V0htlsdwCLcBGAsYHQ/s600/dark_jokesidn_125771108_819438932212234_9195471701678220668_n.jpg",
	"https://1.bp.blogspot.com/-ZKLUtEg7L4U/X7474BW4i0I/AAAAAAAAAAY/SwzC0fiT4JM4iLNKY5qw67Mkgg2khORRQCLcBGAsYHQ/s600/dark_jokesidn_125811246_134357671416788_976039294859462799_n.jpg",
	"https://1.bp.blogspot.com/-NHj1zmuU64c/X7474tpGqAI/AAAAAAAAAAc/yqN7lmE5JRsRtzu27iU2Af5TKC0tPbidwCLcBGAsYHQ/s600/dark_jokesidn_125913814_669971630554090_4965983515042687120_n.jpg",
	"https://1.bp.blogspot.com/-nWez8FBhNbc/X7474ufKrjI/AAAAAAAAAAg/zs5KlpQyte0r6NiBazZa1oEFamFMT5o7wCLcBGAsYHQ/s600/dark_jokesidn_125916215_1533013756892925_3229604459263123272_n.jpg",
	"https://1.bp.blogspot.com/-_iBTwh2xmbs/X7475BGlZMI/AAAAAAAAAAk/Vw9x0AxutiUzOosLPOebxdYkMQczzk_YQCLcBGAsYHQ/s600/dark_jokesidn_125942119_190351036014132_7819076849939301140_n.jpg",
	"https://1.bp.blogspot.com/-rauoH_JrIhk/X7475c2lNuI/AAAAAAAAAAo/tUWQ0A3n-hcpGqg6NygclGKkZpfZKRVlgCLcBGAsYHQ/s600/dark_jokesidn_125960559_2462771960685989_4545333058975253946_n.jpg",
	"https://1.bp.blogspot.com/-iJNMg7iNyB8/X7475lXFYKI/AAAAAAAAAAs/YMmu9RzxMcYZV-NzKluO9Jrh_atKCliagCLcBGAsYHQ/s600/dark_jokesidn_125969103_173992064384728_9051904893274226019_n.jpg",
	"https://1.bp.blogspot.com/--nwEy_pzB4A/X74756CNOjI/AAAAAAAAAAw/zHzgZjv6jhUXYahy3xx459Di9pVNCAO2QCLcBGAsYHQ/s600/dark_jokesidn_126042830_835992027203350_8414976899406572504_n.jpg",
	"https://1.bp.blogspot.com/-VP2pHJDpkUE/X7476DJ5GcI/AAAAAAAAAA0/66CCNDo8hpwKPRbR5H30h6HeuMyHUjPWgCLcBGAsYHQ/s600/dark_jokesidn_126053972_189965019286221_4250381716346170758_n.jpg",
	"https://1.bp.blogspot.com/-vmZ1KdoSyJY/X7476J_y6pI/AAAAAAAAAA4/oTD8eBIYHpUyfNWueq3kF5K2BIRgrwoGACLcBGAsYHQ/s600/dark_jokesidn_126059781_971971236546542_909575679588689725_n.jpg",
	"https://1.bp.blogspot.com/-dhPv0Z7s714/X7476TDmk-I/AAAAAAAAAA8/hXfO6s1DpQU9EONnAWDABrd_prbnlorVACLcBGAsYHQ/s600/dark_jokesidn_126157501_199666855004682_7845085292892857199_n.jpg",
	"https://1.bp.blogspot.com/-PR_PpFaI_B4/X7476wsfGwI/AAAAAAAAABA/oPyQMQlH8hcpJedHYz0JCflCdkIU2XWvgCLcBGAsYHQ/s600/dark_jokesidn_126200110_838776873613928_5199354286646414089_n.jpg",
	"https://1.bp.blogspot.com/-8Ph_hrrwgOQ/X74761oaeJI/AAAAAAAAABE/b1kq8lXcGZMUTHYUc67q_x3DwGJL3Ds8gCLcBGAsYHQ/s600/dark_jokesidn_126235999_3883403391679404_3614733563626350889_n.jpg",
	"https://1.bp.blogspot.com/-04jO_qjfrV4/X7477Qv_74I/AAAAAAAAABI/KmkuY_bArbEou9ilotUVhm4Uk3z-SYroACLcBGAsYHQ/s600/dark_jokesidn_126251235_216024523255792_3922178115706270584_n.jpg",
	"https://1.bp.blogspot.com/-zhaZ7iCi1ys/X74771waEjI/AAAAAAAAABM/7xiV5jJSOjgwlYq418ac7ShxhqNvILgQgCLcBGAsYHQ/s600/dark_jokesidn_126335487_372190407378106_2938205683968546124_n.jpg",
	"https://1.bp.blogspot.com/-3DBdWKpzbOA/X7478N3GB5I/AAAAAAAAABQ/z36Z5pDPaKMc26bAnaqGijs7K1fc_CZywCLcBGAsYHQ/s600/dark_jokesidn_126394759_1043996636067416_4574617667256314752_n.jpg",
	"https://1.bp.blogspot.com/-uHRiqGgl68M/X7478fhBM4I/AAAAAAAAABU/NRubUeWWnsEi7dCPljXjuumnOiAIeWijwCLcBGAsYHQ/s600/dark_jokesidn_126454758_1296461424048801_624034565419100730_n.jpg",
	"https://1.bp.blogspot.com/-aaFBXUN1uyM/X7478s8FIlI/AAAAAAAAABY/Dl21eQddqe4EkFGo-oaUJBHVDaF7DqiLACLcBGAsYHQ/s600/dark_jokesidn_126836665_3630431300329325_5011335601065475543_n.jpg",
"https://telegra.ph/file/f0e4e21a93019e1742f16.mp4",
"https://telegra.ph/file/f86e8e6019d3baa93af77.mp4",
"https://telegra.ph/file/8e554469519eb2c911609.mp4",
"https://telegra.ph/file/0b0a56ee1a4f7b0101219.mp4",
"https://telegra.ph/file/535cd3073cc5d7ef328b1.mp4",
"https://telegra.ph/file/6a2c3d320684a1aca15d6.mp4",
"https://telegra.ph/file/a02c0726e96711fbcc02b.mp4",
"https://telegra.ph/file/5c5f31b2773a020e610e9.mp4",
"https://telegra.ph/file/00e6bc5894df5862978ba.mp4",
"https://telegra.ph/file/4b161e7d41c36d7cc3cc5.mp4",
"https://telegra.ph/file/29102372f179e6001fe26.mp4",
"https://telegra.ph/file/b383321fd033a907f81ca.mp4",
"https://telegra.ph/file/4f25232076a528b882665.mp4",
"https://telegra.ph/file/0ba580fc53ac2425a8aa9.mp4",
"https://telegra.ph/file/df85ce6a07333962297ec.mp4",
"https://telegra.ph/file/28acef4f4e66fa68206b5.mp4",
"https://telegra.ph/file/facb0caddca6d73f3eb94.mp4",
"https://telegra.ph/file/aa5b5e029ee64d1cb6d2c.mp4",
"https://telegra.ph/file/eb2ca47f17cbfedd28f92.mp4",
"https://telegra.ph/file/f9998139c36608a5dd5cb.mp4",
"https://telegra.ph/file/f8e5952b3c8a708858fdf.mp4",
"https://telegra.ph/file/64376dbe2919198be6f59.jpg",
"https://telegra.ph/file/314bf0a003091cb8d006f.jpg",
"https://telegra.ph/file/79e3a8e00d81f3e5c0552.jpg",
"https://telegra.ph/file/1f5d7604f9b55f8c6dc1b.jpg",
"https://telegra.ph/file/69df7e836d5590309b63d.jpg",
"https://telegra.ph/file/b5cbe4c9b5267ec41217a.jpg",
"https://telegra.ph/file/03843505992af04bcb8a4.jpg",
"https://telegra.ph/file/b5c69a090b5adf1d4f62c.jpg",
"https://telegra.ph/file/93e87e4f0ebf7d9624690.jpg",
"https://telegra.ph/file/aa46310358d1dee8d7bb2.jpg",
"https://telegra.ph/file/3397bfd305514587bd185.jpg",
"https://telegra.ph/file/59f45e482dc89deecfe04.jpg",
"https://telegra.ph/file/936e999ce595e06b1bbe8.jpg",
"https://telegra.ph/file/2182ba83eaf36c1fa5ba2.jpg",
"https://telegra.ph/file/1087fd9a67776c921cc50.jpg",
"https://telegra.ph/file/bab43e6a5f8019468a0f5.jpg",
"https://telegra.ph/file/49b95fb50ff6b35e824c8.jpg",
"https://telegra.ph/file/2c5d0379c702947a16374.jpg",
"https://telegra.ph/file/771e4c223fb0d6719cfc6.jpg",
"https://telegra.ph/file/dd81164fe5066ad2a845c.jpg",
"https://telegra.ph/file/19c7f467cc53ce19ab80f.jpg",
"https://telegra.ph/file/f4e3b9917c1f29d4a2405.jpg",
"https://telegra.ph/file/ddce0ca4558a48f1f1996.jpg",
"https://telegra.ph/file/8fda773c93baf16489f74.jpg",
"https://telegra.ph/file/da2f95c75a86f16fe94aa.jpg",
"https://telegra.ph/file/203270b819fe634e3f75e.jpg",
"https://telegra.ph/file/a77b6b55296e5ed5eb914.jpg",
"https://telegra.ph/file/268ca649a4abf8b8e3a08.jpg",
"https://telegra.ph/file/47632ff004aa9e2b2a25b.jpg",
"https://telegra.ph/file/4a78edf6d4911a34f1f13.jpg",
"https://telegra.ph/file/3f8d36ce3cd478f2bc73a.jpg",
"https://telegra.ph/file/c5629fa069c74ce3bf8b6.jpg",
"https://telegra.ph/file/09bda3f6322a212fe7c66.jpg",
"https://telegra.ph/file/a04a00e51eeec52addc32.jpg",
"https://telegra.ph/file/f054f573ca031bf639f62.jpg",
"https://telegra.ph/file/cd4fa143c87cb2ee53a43.jpg",
"https://telegra.ph/file/f476ab86e8d7e9c558596.jpg",
"https://telegra.ph/file/46729b69ae24451103e1e.jpg",
"https://telegra.ph/file/89084bdb0263cef661cf7.jpg",
"https://telegra.ph/file/bffa1d05fb5510b9f0f39.jpg",
"https://telegra.ph/file/4e384ae706ede58721e28.jpg",
"https://telegra.ph/file/12cfc12aa414aa6e86c16.jpg",
"https://telegra.ph/file/0ac93ada91884508c3907.jpg",
"https://telegra.ph/file/f722d497b8d0a32a1fbf3.jpg",
"https://telegra.ph/file/568da58a41e044b5db7f6.jpg",
"https://telegra.ph/file/17bc426f4fa9df1cfde0d.jpg",
"https://telegra.ph/file/3053d151b2571e83a1779.jpg",
"https://telegra.ph/file/b53268c9a81ec0b1795a0.jpg",
"https://telegra.ph/file/61a3ceac785550259cc5b.jpg",
"https://telegra.ph/file/c1843f9bb6fd7ae2ad5e7.jpg",
"https://telegra.ph/file/b07d804e8d355cfbf9300.jpg",
"https://telegra.ph/file/c61b11fabeb80d84f712c.jpg",
"https://telegra.ph/file/e7d4075fd1c256ad519fc.jpg",
"https://telegra.ph/file/96fbfd96a615f55cceab5.jpg",
  ]