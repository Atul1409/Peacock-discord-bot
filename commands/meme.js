const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
const { Message } = require("discord.js");

module.exports = {
    async run (bot, message, args) { 
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setImage(img)
        .setTitle(`Your meme. From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
  
        message.channel.send(memeEmbed);
    }
}


module.exports.help = {
    name:"meme",
    aliases: []
}