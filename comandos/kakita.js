const Discord = require("discord.js");

module.exports = {
  name: "hola", // Definimos el nombre del comando
  alias: "!", // Definimos el alias (No necesario)

  execute(client, message, args){
    
     const embed = new Discord.MessageEmbed() // Creamaos embed
     .setAuthor({ name: '• Tu-Bot || Saludos', iconURL: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f44b.jpg' })
    .setTitle("**INACTIVO**")
    .setDescription("\n👋 Hola, ¿Como estás? ")
    .setColor("RED") 
    .setFooter("github.com/KasiMantonyo")
    
    
  message.channel.send({ embeds: [embed] }) // enviamos embed
    
  }

}