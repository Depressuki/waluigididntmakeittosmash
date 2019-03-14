const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong.')
  }
  if (msg.content === 'pong') {
    msg.channel.send("No, I'm supposed to say pong. You say ping, baka.")
  }
})

client.login(process.env.BOT_TOKEN)
