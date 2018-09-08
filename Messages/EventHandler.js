const help   =  require('./Task/Help'),
      Discord = require('discord.js'),
      FortniteStats = require('./Task/APIFortnite'),
      client = new Discord.Client(),
      token = process.env.TOKEN;

client.login(token);

module.exports = {

  onMessage : (msg) => {
    (msg.content.includes('Foxhub StatsTracker') && msg.content.split(' ').length === 2)
    ? help.Help(msg)
    : null

    if (msg.content.includes('fsc') && msg.content.startsWith('Foxhub')){
      let PlateformAndName = msg.content.split(' ')[2].split(':'),
          Plateform = PlateformAndName[0],
          Name = PlateformAndName[1];
      FortniteStats.GetStats(msg, Plateform, Name);
    }

    if (msg.content.includes('fst') && msg.content.startsWith('Foxhub'))
      FortniteStats.GetStore(msg);
  },
  
}