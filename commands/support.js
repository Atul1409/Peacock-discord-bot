const Discord = require('discord.js');



module.exports.run = async(bot, message , args) => {

    const support = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`
     LIKE THIS BOT ? THEN PLEASE SUPPORT ME

    > [MY Github](https://github.com/Atul1409)

    > [Invite Peacock in your server](https://discord.com/api/oauth2/authorize?client_id=784306314086973500&scope=bot)

    > [Contribute to this bot's repo](https://github.com/Atul1409/Peacock-discord-bot)

    `)

  message.channel.send(support);

      message.react("🙏")

}


module.exports.help = {
    name:"support",
    aliases: []
}
