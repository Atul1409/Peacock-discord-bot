const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ava = message.author.displayAvatarURL;
  let userEmbed = new Discord.MessageEmbed()
  .setTitle("User Information")
  //.setAuthor(bot.user.username)
  .setColor("#00ff00")
  .setImage(message.author.displayAvatarURL)
  .addField("User ID", message.author.id)
  .addField("Username", message.author.tag)
  .addField("Created On", message.author.createdAt);

  message.channel.send(userEmbed);
}

module.exports.help = {
  name: "aboutme",
  aliases:[]
}
