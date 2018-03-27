const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = (";")

bot.user.setPresence({ status: 'online', game: { name: 'GAME' } });

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('TOKEN')

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !')
  }
})

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur mon serveur ' + member.displayName)
  }).catch(console.error)
})

bot.on('message', message => {

  if (message.content.startsWith('!play')) {
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    let args = message.content.split(' ')
    voiceChannel
      .join()
      .then(function (connection) {
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }

})

bot.on('message', message => {
  if (message.content === 'Salut a tous') {
    message.reply('Bien le bonjour a toi !')
  }
})
