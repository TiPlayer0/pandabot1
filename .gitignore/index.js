const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("Work-in progres");
    console.log("Connectedç");
});

bot.login("NDE2NzExOTA0MzI5ODU5MDcy.DXTVCQ.dMo7DbMxfD2grXGqTl8IssIxXow");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes: \n -*help");
    }
    
bot.on('message', message => {
    if (message.content === prefix + "tt"){
        message.channel.send("Le Bot a était crée le 26/02/2018 à 01:04");
    }
    
bot.on('message', message => {
    if (message.content === prefix + "fabriquand"){
        message.channel.send("Le Bot a était crée par TiPlayer_0");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. =D");
        console.log("Commande Salut effectué");
    }
},);
