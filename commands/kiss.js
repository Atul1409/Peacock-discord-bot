const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, kiss , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	kiss = await  neko.sfw.kiss()
	img = kiss.url
    embed = new Discord.MessageEmbed()
        .setTitle(`kiss for ${user.username}`)
		.setImage(img)
		.setColor('RANDOM')
	        .setFooter('Powered by nekos.life')

	message.channel.send(embed)
}
module.exports.help = {
    name:"kiss",
    aliases: []
}

