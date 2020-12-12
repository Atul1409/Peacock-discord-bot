const Discord = require("discord.js");
const utils = require('discord-utilities-js')
 

exports.run = async (bot , message, args) => {
    let koala = await utils.koala()
    embed = new Discord.MessageEmbed()
    .setImage(koala)
    .setColor('RANDOM')
    .setFooter("Powered by discord-utilities-js")
    

message.channel.send(embed)
                  
}
module.exports.help = {
    name:"koala",
    aliases: []
}
