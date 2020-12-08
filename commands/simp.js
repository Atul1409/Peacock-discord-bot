const { Message } = require("discord.js");
const Discord = require("discord.js");

module.exports.run = async(bot, message , args) => {  
    const simp = Math.floor((Math.random()*100)+1)
    const user = message.mentions.users.first() || message.author ;

    embed = new Discord.MessageEmbed()
    .setDescription(`${user.username} is ${simp}% simp`)
    .setColor('RANDOM')

    message.channel.send(embed)

}

module.exports.help = {
    name:"simp",
    aliases: []
}