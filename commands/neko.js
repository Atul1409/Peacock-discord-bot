const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, nek , embed
exports.run = async (bot , message, args) => {
	nek = await neko.sfw.neko()
	img = nek.url
	if (!message.channel.nsfw) return message.channel.send('NO nsfw here!')
    embed = new Discord.MessageEmbed()
        .setTitle('Nya!')
		.setImage(img)
		.setColor('RANDOM')
	 .setFooter('Powered by nekos.life')

	message.channel.send(embed)
}
module.exports.help = {
    name:"neko",
    aliases: []
}

