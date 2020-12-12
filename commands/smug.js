const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, smug , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	smug = await  neko.sfw.smug()
	img = smug.url
    embed = new Discord.MessageEmbed()
        .setTitle(`smugging`)
		.setImage(img)
		.setColor('RANDOM')
	 .setFooter('Powered by nekos.life')

	message.channel.send(embed)
}
module.exports.help = {
    name:"smug",
    aliases: []
}

