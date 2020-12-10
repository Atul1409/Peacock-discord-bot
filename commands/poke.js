const Discord = require("discord.js");
const neko_client = require('nekos.life')
const neko = new neko_client()
let img, poke , embed
exports.run = async (bot , message, args) => {
    const user = message.mentions.users.first() || message.author ;
	poke = await  neko.sfw.poke()
	img = poke.url
    embed = new Discord.MessageEmbed()
        .setTitle(`poking ${user.username}`)
		.setImage(img)
		.setColor('RANDOM')

	message.channel.send(embed)
}
module.exports.help = {
    name:"poke",
    aliases: []
}

