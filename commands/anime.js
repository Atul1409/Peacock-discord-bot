const Discord = require("discord.js");
const randomanime = require("random-anime");

module.exports.run = (bot, message, args) => {
    const anime = randomanime.anime();
    const embed = new Discord.MessageEmbed().setImage(anime).setColor("BLUE").setTitle(":>").setTimestamp();
    message.channel.send(embed);


}

module.exports.help = {
    name:"anime",
    aliases: []
}

