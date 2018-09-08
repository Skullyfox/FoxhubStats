const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN;

client.login(token);

module.exports = {
  Help : (msg) => {
    msg.channel.send(new Discord.RichEmbed({
      title : ":robot: Voici les commandes disponnibles :",
      color : "749999",
      description : `\`Pas de commandes disponibles pour le moment.\`
      
      Pour plus de commandes, contactez le créateur de ce bot ***Skullyfox#2814***.`,
      
    }).setFooter('©️Skullyfox#2814 - Développeur JavaScript & Python'));
  }
}