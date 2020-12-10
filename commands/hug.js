const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, hug , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	hug = await  neko.sfw.hug()
	img = hug.url
    embed = new Discord.MessageEmbed()
        .setTitle(`hugs ${user.username} :>`)
		.setImage(img)
		.setColor('RANDOM')

	message.channel.send(embed)
}
module.exports.help = {
    name:"hug",
    aliases: []
}

