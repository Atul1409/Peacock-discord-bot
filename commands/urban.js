const Discord = require("discord.js");
const ud = require("relevant-urban");
exports.run = async(bot, message, args) => {

let worder = args[0];
if(!worder) return message.channel.send("Specify a word")
let defin = await ud(args.join(' ')).catch(e => {
  message.channel.send("Word not found")
  return;
});
let embed = new Discord.MessageEmbed()
.setTitle(defin.word)
.setURL(defin.urbanURL)
.setDescription(defin.definition)
.addField("Example", defin.example)
.setColor('RANDOM')
message.channel.send(embed)
}
module.exports.help = {
    name:"urban",
    aliases: []
}
