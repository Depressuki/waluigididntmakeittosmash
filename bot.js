const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong')
  }
})

client.login(process.env.BOT_TOKEN)
