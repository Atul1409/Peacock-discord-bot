//const { Message } = require("discord.js");
const Discord = require('discord.js');
const paginationEmbed = require('discord.js-pagination');
module.exports.run = async(bot, message , args) => {
    

    const help1 = new Discord.MessageEmbed().setColor("GREEN").setAuthor('Raju Commands').setTitle("Info").setDescription(` • a.help → This panel
• a.ping →  Check  whether I am alive or dead

• a.a → Your Avatar

• a.stats

• a.aboutme


• a.support

   `);

   const help2 = new Discord.MessageEmbed().setColor("GREEN").setAuthor('Raju Commands').setTitle("Fun").setDescription(`• a.rip

   • a.ascii 
   
   • a.avenger
   
   • a.8ball  
    
   • a.simp

   • a.meme
   
   `);
   
   
   const help3 = new Discord.MessageEmbed().setColor("GREEN").setAuthor('Raju Commands').setTitle("Maths").setDescription(`• a.calc
   `);

   
   const help4 = new Discord.MessageEmbed().setColor("GREEN").setAuthor('Raju Commands').setTitle("Weeb").setDescription(`• a.anime

   • a.hentai
   
   • a.neko
    
   • a.smug
   
   • a.baka

   • a.tickle
   
   • a.slap

   • a.poke
   
   • a.nekoGif
   
   • a.kiss

   • a.hug
   
   • a.poke
   
   • a.nekoGif
   
   • a.cuddle

   • a.kemonomimi
   
   • a.wallpaper

   • a.fact

   
   `);
   
   
   const help5 = new Discord.MessageEmbed().setColor("GREEN").setAuthor('Raju Commands').setTitle("Animals").setDescription(`• a.dog

   • a.cat
   `);
   
   

   pages = [
    help1,
    help2,
    help3,
    help4,
    help5
];


paginationEmbed(message, pages,['⏪', '⏩'],  92000000);
}

module.exports.help = {
    name:"help",
    aliases: []
}
