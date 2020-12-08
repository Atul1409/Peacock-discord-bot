    const Discord = require("discord.js");
    const { Message } = require("discord.js");
    const randomanime = require("random-anime");
    
    module.exports.run = (bot, message, args) => {
        const hentai = randomanime.nsfw();
        if (!message.channel.nsfw) return message.channel.send('NO nsfw here!')
        const embed = new Discord.MessageEmbed().setImage(hentai).setColor("BLUE").setTitle(":>").setTimestamp();
        message.channel.send(embed);
    
    
    }
    
    module.exports.help = {
        name:"hentai",
        aliases: []
    }