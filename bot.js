const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', function (user, userID, channelID, message, evt) {

 if (message.content == '>hi') {
      message.reply("Hello!")
 }
  if message.content == '>ree'
      client.sendmessage({
       to: channelID,
       message: "Die."
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//
