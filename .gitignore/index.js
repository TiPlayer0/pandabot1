const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = (";")

bot.on('ready', function() {
    bot.user.setActivity("Work-in progres");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes: \n -help");
    }

    if (message.content === prefix + "tt"){
        message.channel.send("Le Bot a était crée le 26/02/2018 à 01:04");
    }

    if (message.content === prefix + "fabriquand"){
        message.channel.send("Le Bot a était crée par TiPlayer_0");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. =D");
        console.log("Commande Salut effectué");
}})
