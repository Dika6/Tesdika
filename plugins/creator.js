function handler(m) {
  this.sendContact(m.chat, '6281252848955', 'Nando', m)
}
handler.help = ['owner', 'creator', 'sholehowner']
handler.tags = ['info']

handler.command = /^(owner|creator|sholehowner)$/i

module.exports = handler
