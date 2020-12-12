const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, tickle , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	tickle = await  neko.sfw.tickle()
	img = tickle.url
    embed = new Discord.MessageEmbed()
        .setTitle(`tickling ${user.username}`)
		.setImage(img)
		.setColor('RANDOM')
	 .setFooter('Powered by nekos.life')

	message.channel.send(embed)
}
module.exports.help = {
    name:"tickle",
    aliases: []
}

