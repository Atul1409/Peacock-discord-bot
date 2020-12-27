const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

exports.run = async (bot , message, args) => {
   
const image = await nsfw.fourk();
if (!message.channel.nsfw) return message.channel.send('NO nsfw here!')
const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setImage(image)
    .setFooter('Powered by nekos.life')
message.channel.send(embed);
}
module.exports.help = {
    name:"4k",
    aliases: []
}

