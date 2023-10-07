const Discord = require("discord.js");

module.exports = {
  name: "nuke",
  aliases: ["nuke", "nukes"],
  description: "nuke",
  run: async (client, message, args) => {
 if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I don\'t have the right permissions.')
        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send("No tienes permiso.")
           
        }
        message.channel.clone().then
        ((ch) => {
            ch.setParent(message.channel.parent);
            ch.setPosition(message.channel.position);
            message.channel.delete().then(() => {
                ch.send("El canal ha sido nukeado.")
            })

        });
}
}