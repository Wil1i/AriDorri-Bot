const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name : "unban",
    description : "Report unbanned users who unbanned from Twitch",
    data : new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Report unbanned users who unbanned from stream")
    .addStringOption(option => option.setName("username").setRequired(true))
    .addStringOption(option => option.setName("reason").setRequired(true)),

    async execute(client, interaction){
        
        const time = new Date()

        const reportEmbed = new MessageEmbed()
        .setColor(config.colors.main)
        .setAuthor({name : "UnBan Report"})
        .addField("Username", interaction.options.getString("username"), true)
        .addField("UnBanned from", interaction.user.tag, true)
        .addField("Time", `${time.getFullYear()}/${time.getMonth()}/${time.getDay()}`)
        .addField("Reason", interaction.options.getString("reason"))
        .setFooter({name : config.embeds.footer})

        const reportChannel = client.channels.cache.get(config.channels.unban)
        if(reportChannel){
            reportChannel.send({embeds : [reportEmbed]})
            await interaction.reply({content : "Report successfully submited", ephemeral : true})
        }else{
            await interaction.reply({content : "UnBan channel is not found. Please contact to support", ephemeral : true})
        }

    }
}