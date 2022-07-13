const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Botu Ekleyin!`, `http://bit.ly/botueklei`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "sunucu"
};

module.exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};
