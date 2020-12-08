const { Message } = require("discord.js");

module.exports.run = async(bot, message , args) => {
    const replies=[
        'Yes',
        'NO',
        'maybe',
        'is this even a question ?',
        'lol never',
        'it depends'
    ]

    const answer = Math.floor(Math.random()*replies.length)
    message.reply(replies[answer]);

}

module.exports.help = {
    name:"8ball",
    aliases: []
}