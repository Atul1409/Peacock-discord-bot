const { Message } = require("discord.js");

module.exports.run = async(bot, message , args) => {
    const user = message.mentions.users.first() || message.author ;
    const image= "https://giphy.com/gifs/jason-clarke-dancing-pallbearers-ghana-pallbearer-meme-j6ZlX8ghxNFRknObVk"

    message.channel.send(`${user.username} Is dead ${image} `)
    message.react('⚰️')

}

module.exports.help = {
    name:"rip",
    aliases: []
}