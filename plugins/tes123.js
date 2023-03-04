import fetch import 'node-fetch'

let handler = async (m, { conn }) => {
let pp = hwaifu.getRandom()
conn.send2ButtonDoc(m.chat, 'Aktif !!', botdate, '𝐋𝐢𝐬𝐭𝐌𝐞𝐧𝐮', '.listmenu', '𝐃𝐚𝐬𝐛𝗼𝐚𝐫𝐝', '.db', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© GxoBOT',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© GxoBOT',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: bottime  
				}
			}
})
}
handler.command = ['tes']

export default handler