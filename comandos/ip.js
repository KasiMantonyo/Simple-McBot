const Discord = require("discord.js");

module.exports = {
  name: "ip",
  alias: ["!"],

  execute(client, message, args){
    
     const embed = new Discord.MessageEmbed()
    .setTitle("• Tu-Bot || **Dirección IP**")
    .setDescription("\n  \nIP: **mc.prueba.com**\n Versiones: `1.8-1.18`\n  Estado: **Abierto** \n \n¡Disfruta mucho tu estancia en el servidor!")
    .setColor("ORANGE") .setThumbnail("https://wfuogb.com/wp-content/uploads/2021/03/minecraft-logo-online-game-dirt-block-illustrations-concept-design-isolated-186775550.jpeg")
    .setFooter("github.com/KasiMantonyo")
    
    
  message.channel.send({ embeds: [embed] })
    
  }

}