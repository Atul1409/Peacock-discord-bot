const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("loading...")
    var { body } = await superagent
    .get('https://aws.random.cat/meow')
    if(!body) return message.channel.send("nooooooo.... ")

        let mEmbed =new Discord.MessageEmbed()
        .setAuthor('Kitty :3')
        .setImage(body.file)
        .setTimestamp()

        message.channel.send(mEmbed)
        msg.delete();
};
  
  exports.help = {
    name: 'kitty',
    aliases: []
  };