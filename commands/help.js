//const { Message } = require("discord.js");
const Discord = require('discord.js');
module.exports.run = async(bot, message , args) => {
    

    const help = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Raju Commands")
    .setDescription(`
       • a.help → This panel

    • a.ping →  Check  whether I am alive or dead

    • a.rip → Announce ur funeral

    • a.a → Your Avatar

    • a.avenger → makes u avenger

    • a.calc → Solves ur sums , subtraction , multiplication , division
    
    • a.support → Support me!

    • a.meme -> a random meme !
    
    • a.8ball -> Have a Question? ask me !

    • a.neko -> Random cat like weeb image :)

    • a.kitty -> Random kitty images :)

   `)

  message.channel.send(help);
}

module.exports.help = {
    name:"help",
    aliases: []
}