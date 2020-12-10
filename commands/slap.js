const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, slap , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	slap = await  neko.sfw.slap()
	img = slap.url
    embed = new Discord.MessageEmbed()
        .setTitle(`slapping ${user.username}`)
		.setImage(img)
		.setColor('RANDOM')

	message.channel.send(embed)
}
module.exports.help = {
    name:"slap",
    aliases: []
}

