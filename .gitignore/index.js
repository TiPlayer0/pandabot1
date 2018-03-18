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
            .setTitle("Bienvenue sur le discord des panda")
            .setDescription("Un discord général ou vous pouvez trouver des discord de partenaire, et des ami")
            .addField(";help","Pour acceder a la liste des commande", true)
            .addField("Règle:","Règles :
Il est interdit de :
- Spammer
- Faire des pubs (Youtube, Discord, twitter ou autre)
- Utiliser @everyone sauf si autorisé pas le Fondateur
- Utiliser les commandes bot en dehors des channels autorisés
- Demander une auguementation de grade
- Abuser de Majuscules, de Ponctuations, de Smileys ou de mettre des pavet de texte

Il est autorisé :
- D'inviter un ami
- D'utiliser les bots (obligatoirement dans # bot )
- De changer de pseudo (dans la limite du correct)
- D'ecrire dans les channels (en respectant les autres)

Il est obligatoire de :
- Poster sa presentation dans #presentation pour avoir le grade joueur
- Respecter les autre
- S'amuser") sur votre discord", true)
            .setColor("0x0101DF")
            .setFooter("@everyone :warning: Pour tout ceux qui n'ont pas encore de grade  veuiller aller dans #presentation pour ecrire une presetation car si non vous ne pourez pas ecrir. Si vous voulez vous pouvez aussi envoyer v otre présentation a un @Fonda pour qu'il accepte, les presentation peuvent prendre quelques temps a etre verifier.
Votre candidature doit prendre cette forme:
-Nom Prenom
-Age
-Jeux aux quelle vous jouez
-Quelques ligne pour vous decrire
Si possible sans fote :wink:
Seul l'age et les jeux joué sont important... Pour le reste libre a vous de mentir ou non (soyez imaginatif pour le reste) :warning:")
        message.channel.sendEmbed(embed);
    }
    
    
})
