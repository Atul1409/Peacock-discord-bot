const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, kemo , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	kemo = await  neko.sfw.kemonomimi()
	img = kemo.url
    embed = new Discord.MessageEmbed()
        .setTitle(":)")
		.setImage(img)
		.setColor('RANDOM')

	message.channel.send(embed)
}
module.exports.help = {
    name:"kemonomimi",
    aliases: []
}

