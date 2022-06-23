const { MessageEmbed } = require("discord.js")

module.exports = {
    name : "messageCreate",
    description : "Handle all messages comes from channels",
    execute(client, message){
        if(message.channel.id == "988876125746913280"){
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(message.content)
            .setFooter({text : "AriDorri | STAFF"})
            message.channel.send({embeds : [embed]})

            message.delete()
        }
    }
}