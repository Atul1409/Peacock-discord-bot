const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, fox , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	fox = await  neko.sfw.foxGirl()
	img = fox.url
    embed = new Discord.MessageEmbed()
        //.setTitle(`pats ${user.username}`)
		.setImage(img)
		.setColor('RANDOM')
	        .setFooter('Powered by nekos.life')

	message.channel.send(embed)
}
module.exports.help = {
    name:"foxy",
    aliases: []
}

