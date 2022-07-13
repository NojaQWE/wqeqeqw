const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  const embed = new Discord.RichEmbed()
    .setDescription(`Bot sürümü; **v0.1**, Prefix: **${prefix}**, Dil: **tr**`)
    .addField(
      `Davetler`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`, \`davetlerim\`, \`davet-oluştur\``
    )
    .addField(`Rütbeler`, `\`rütbe-ekle\`, \`rütbe-sil\`, \`rütbe-liste\``)
//    .addField(`Premium`, `\`pre-günlük\`, \`pre-puan\`, \`pre-market\``)
    .addField(
      `Sistem`,
      `\`otorol\`, \`otorol-sıfırla\`, \`otorol-mesaj\`, \`otorol-mesaj-sıfırla\`, \`sayaç\`, \`sayaç-sıfırla\`, \`sayaç-mesaj-hg\`, \`sayaç-mesaj-bb\`, \`sayaç-mesaj-sıfırla\`, \`ototag\`, \`ototag-isim\`, \`ototag-sıfırla\`, \`hg-bb\``
    )

    .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 4
};

exports.help = {
  name: "yardım"
};
