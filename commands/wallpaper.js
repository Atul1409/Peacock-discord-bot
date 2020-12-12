const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, wal , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	wal = await  neko.sfw.wallpaper()
	img = wal.url
    embed = new Discord.MessageEmbed()
        .setTitle(`:}`)
		.setImage(img)
		.setColor('RANDOM')
	 .setFooter('Powered by nekos.life')

	message.channel.send(embed)
}
module.exports.help = {
    name:"wallpaper",
    aliases: []
}

