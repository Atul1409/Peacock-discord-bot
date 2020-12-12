const Discord = require("discord.js");
const utils = require('discord-utilities-js')
 

exports.run = async (bot , message, args) => {
    let bird = await utils.bird()
    embed = new Discord.MessageEmbed()
    .setImage(bird)
    .setColor('RANDOM')
    .setFooter("Powered by discord-utilities-js")
    

message.channel.send(embed)
                  
}
module.exports.help = {
    name:"bird",
    aliases: []
}

//http://shibe.online/api/birds?count=1