const Discord = require("discord.js");
require('dotenv').config();

module.exports.run = async(bot, message , args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("I can't :(")
  if(message.author.id != process.env.OWNER) return message.reply("I can't :(")
  let botmessage = args.join(' ');
  message.delete().catch();
  message.channel.send(botmessage)
}

module.exports.help = {
    name:"say",
    aliases: []
}
