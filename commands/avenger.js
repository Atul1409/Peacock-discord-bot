const { Message } = require("discord.js");

module.exports.run = async(bot, message , args) => {
    const avengers=[
        'Iron Man',
        'Black widow',
        'Thor',
        'Hawkeye',
        'Hulk',
        'Captain america',
        'Spiderman',
        ' not worthy to be one',
        ' not worthy to be one',
        ' not worthy to be one'
    ]

    const index = Math.floor(Math.random()*avengers.length)
    message.reply('is '+avengers[index]+" now");

}

module.exports.help = {
    name:"avenger",
    aliases: []
}