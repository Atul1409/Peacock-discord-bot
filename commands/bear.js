const Discord = require("discord.js");
const utils = require('discord-utilities-js')
 

exports.run = async (bot , message, args) => {
    let bear = await utils.bear()
    embed = new Discord.MessageEmbed()
    .setImage(bear)
    .setColor('RANDOM')
    .setFooter("Powered by discord-utilities-js")
    

message.channel.send(embed)
                  
}
module.exports.help = {
    name:"bear",
    aliases: []
}
