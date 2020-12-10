const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, cuddle , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	cuddle = await  neko.sfw.cuddle()
	img = cuddle.url
    embed = new Discord.MessageEmbed()
        .setTitle(`cuddling ${user.username}`)
		.setImage(img)
		.setColor('RANDOM')

	message.channel.send(embed)
}
module.exports.help = {
    name:"cuddle",
    aliases: []
}

