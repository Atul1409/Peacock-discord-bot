const Discord = require("discord.js");
const utils = require('discord-utilities-js')
 

exports.run = async (bot , message, args) => {
    let panda = await utils.panda()
    embed = new Discord.MessageEmbed()
    .setImage(panda)
    .setColor('RANDOM')
    .setFooter("Powered by discord-utilities-js")
    

message.channel.send(embed)
                  
}
module.exports.help = {
    name:"panda",
    aliases: []
}
