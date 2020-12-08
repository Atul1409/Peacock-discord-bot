const Discord = require('discord.js')
const d = Discord.version
let embed
exports.run = (client, message, args) => {
	embed = new Discord.MessageEmbed()
		.setTitle('• Statistics')
		.setDescription(`# Users: ${client.users.cache.size}
# Servers: ${client.guilds.cache.size}
# Discord.js: ${d}
# Node.js: ${process.version}`)
.setColor('RANDOM')
 
	return message.channel.send(embed)
}

exports.help = {
    name: 'stats',
    aliases: []
   };
   