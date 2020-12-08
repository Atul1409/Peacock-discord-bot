const Discord = require('discord.js');



module.exports.run = async(bot, message , args) => {

    const support = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`
     LIKE THIS BOT ? THEN PLEASE SUPPORT ME

     MY Github - https://github.com/Atul1409

    `)

  message.channel.send(support);

      message.react("🙏")

}


module.exports.help = {
    name:"support",
    aliases: []
}