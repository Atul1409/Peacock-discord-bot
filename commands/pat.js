const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, pat , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	pat = await  neko.sfw.pat()
	img = pat.url
    embed = new Discord.MessageEmbed()
        .setTitle(`pats ${user.username}`)
		.setImage(img)
		.setColor('RANDOM')

	message.channel.send(embed)
}
module.exports.help = {
    name:"pat",
    aliases: []
}

