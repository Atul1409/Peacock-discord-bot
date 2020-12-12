const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true });

require('dotenv').config();
const fs = require("fs");
const random = require("random");

//let coins = require("./coins.json")


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

var stats = {};


fs.readdir("./commands/",(err,files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        return console.log("no commands!")
    }

    jsfile.forEach((f) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`)
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias =>{
            bot.commands.set(alias, props.help.name);
        })
    
    })
})

bot.on("ready",async() => {
    console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`)
    bot.user.setActivity(`with  ${bot.guilds.cache.size} servers!`)
})

bot.on("message",async message =>{
    if(message.author.id=== bot.user.id) return;
    let prefix = process.env.PREFIX;

    /*if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins:0
        };
    }
     
    let coinAmt = Math.floor(Math.random()*25)+1;
    let baseAmt = Math.floor(Math.random()*25)+1;
     console.log(`${coinAmt} ; ${baseAmt}`)
    if(coinAmt===baseAmt){
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + coinAmt
        };

    fs.writeFile("./coins.json", JSON.stringify(coins),(err) => {
        if(err) console.log(err)
    })
    }*/

    if (message.guild.id in stats === false){
        stats[message.guild.id]={};
    }

    const guildStats =  stats[message.guild.id];

    
    if (message.author.id in guildStats === false){
         guildStats[message.author.id]={
            xp:0,
            level:0,
            last_message:0
        };
    }

    const userStats =  guildStats[message.author.id];
    userStats.xp += random.int(15,25);

    const xpToNextLevel = 5 * Math.pow(userStats.level,2) + 50 * userStats.level + 100;
    if(userStats.xp >= xpToNextLevel){
        userStats.level++;
        userStats.xp = userStats.xp - xpToNextLevel ;
        message.channel.send( message.author.username + " reached level " + userStats.level) 
    }




    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let command;

    if(bot.commands.has(cmd)){
        command = bot.commands.get(cmd);
    }
    else if(bot.aliases.has(cmd)){
        command = bot.commands.get(bot.aliases.get(cmd));
    }

    try{
        command.run(bot, message, args);
    }
    catch(e){
        return;
    }
})

bot.login(process.env.DISCORD_TOKEN); 
