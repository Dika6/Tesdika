function handler(m) {
  m.reply('bentar')
  this.fakeReply(m.chat, `Bot ini menggunakan
sc : Yutub banyak:v
`, '0@s.whatsapp.net', 'SOURCE CODE BOT', 'status@broadcast')
}
handler.help = ['sc', 'sourcecode', 'src']
handler.tags = ['info']

handler.command = /^(sc|sourcecode|src)$/i

module.exports = handler
