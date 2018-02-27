const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = (";")

bot.on('ready', function() {
    bot.user.setActivity(";help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    if (message.content === prefix + "help"){
        message.channel.send("```Liste des commandes: \n -help \n -tt \n -fabriquand \n -Salut \n -embed```");
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
    }
    
    if (message.content === "Bonjour"){
        message.reply("Bien le bonjour. =D");
        console.log("Commande Salut effectué");
    }
    
    if (message.content === "Coucou"){
        message.reply("Bien le bonjour. =D");
        console.log("Commande Salut effectué");
    }
    
    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
            .setTitle("EMBED")
            .setDescription("Ceci est un embed")
            .addField(".help","Page d'aide", true)
            .addField("Embed01","Embed 01 ! :) ajoutez [PandaBot](https://goo.gl/wdhcTQ) sur votre discord", true)
            .setColor("0xFF0000")
            .setFooter("Bon mement parmis nous ! :)")
        message.channel.sendEmbed(embed);
    }
})
