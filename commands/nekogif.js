const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, nekogif , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	nekogif = await  neko.sfw.nekoGif()
	img = nekogif.url
    embed = new Discord.MessageEmbed()
        .setTitle(`nya!`)
		.setImage(img)
		.setColor('RANDOM')
	 .setFooter('Powered by nekos.life')

	message.channel.send(embed)
}
module.exports.help = {
    name:"nekogif",
    aliases: []
}

