const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN;

client.login(token);

module.exports = {
  Help : (msg) => {
    msg.channel.send(new Discord.RichEmbed()
    .setFooter('©️Skullyfox#2814 - Développeur JavaScript & Python')
    .setAuthor(client.user.username,client.user.avatarURL)
    .setTitle('| Commandes disponnibles |')
    .setColor(7385958)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    .addField("\u200B","======== Stats Fornite ========")
    .addField("**Foxhub fst : **","Donne la liste d'objet de la boutique journalière de Fortnite.")
    .addField("**Foxhub fsc plateform:username : **","Donne les stats Fortnite du joueur souhaité.")
    .setFooter("©️Skullyfox#0666",client.users.get('138050601702522880').avatarURL)
    )
  }
}