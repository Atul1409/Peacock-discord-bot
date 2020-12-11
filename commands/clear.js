const Discord = require("discord.js");

module.exports.run = async(bot, message , args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("I can't :(")
  if(!args[0]) return message.reply("I can't :(");
  message.channel.bulkDelete(args[0]).then(() =>{
      message.channel.send(`Cleared ${args[0]} messages`).then(msg => msg.delete())
  })
}

module.exports.help = {
    name:"clear",
    aliases: []
}