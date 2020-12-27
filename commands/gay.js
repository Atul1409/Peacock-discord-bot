const Discord = require("discord.js");

module.exports.run = async(bot, message , args) => {  
    const gay = Math.floor((Math.random()*100)+1)
    const user = message.mentions.users.first() || message.author ;
    var total = 100;
    var current = gay;

    embed = new Discord.MessageEmbed()
    .setDescription(`${user.username} is ${gay}% gay`)
    .setColor('RANDOM')

    message.channel.send(embed)
   
}

module.exports.help = {
    name:"gay",
    aliases: []
}