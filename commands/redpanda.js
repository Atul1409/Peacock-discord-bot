const Discord = require("discord.js");
const utils = require('discord-utilities-js')
 

exports.run = async (bot , message, args) => {
    let redpanda = await utils.redpanda()
    embed = new Discord.MessageEmbed()
    .setImage(redpanda)
    .setColor('RANDOM')
    .setFooter("Powered by discord-utilities-js")
    

message.channel.send(embed)
                  
}
module.exports.help = {
    name:"rpanda",
    aliases: []
}
