import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Kirim/Reply Gambar dengan caption ${command}`
m.reply(md)
let media = await q.download()
let url = await uploadImage(media)

let hasil = await (await fetch(`https://api.zahwazein.xyz/photoeditor/jadizombie?url=${url}&apikey=85345ee3d9de`)).buffer()
await conn.sendButton(m.chat, `Nih ${name}`, wm3, hasil, [['Donasi', '.donasi']], m)
}
handler.help = ['jadizombie']
handler.tags = ['internet']
handler.command = /^(jadizombie)$/i
handler.limit = true

export default handler

