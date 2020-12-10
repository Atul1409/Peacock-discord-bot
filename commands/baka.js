const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, baka , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	baka = await  neko.sfw.baka()
	img = baka.url
    embed = new Discord.MessageEmbed()
        .setTitle(`baka!`)
		.setImage(img)
		.setColor('RANDOM')

	message.channel.send(embed)
}
module.exports.help = {
    name:"baka",
    aliases: []
}

