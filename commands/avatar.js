const Discord = require('discord.js');

module.exports.run = async(bot, message , args) => {
     const avatar = (message.mentions.users.first() || message.author).displayAvatarURL({ size: 2048 , format: 'png', dynamic: true });

     const user = message.mentions.users.first() || message.author ;
     const avaEmbed = new Discord.MessageEmbed() 
     .setColor("GREEN")
     .setImage(avatar)
     .setTitle(user.username)
     message.channel.send(avaEmbed);

}


module.exports.help = {
    name:"a",
    aliases: []
}
