const { tictactoe } = require('reconlx')
const Discord = require("discord.js");

module.exports.run = async(bot, message , args) => {
    const user = message.mentions.members.first() 
    if(!user)  return  message.channel.send('Please specify a member')
    new tictactoe({
        player_two: user, 
        message: message
    })
}

module.exports.help = {
    name:"tictactoe",
    aliases: []
}
