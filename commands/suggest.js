const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const Suggest = require("../models/Suggest");

module.exports = {
  name: "suggest",
  everyoneCanUse: true,

  data: new SlashCommandBuilder()
    .setName("suggest")
    .setDescription("Suggest any suggestions about develop system")
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("Text for suggestion")
        .setRequired(true)
    ),

  async execute(client, interaction) {
    await Suggest.create({
      text: interaction.options.getString("text"),
      name: interaction.user.tag,
      disId: interaction.user.id,
      isAccepted: "none",
    }).then(async () => {
      const successEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          "Your suggestion successfully sent to developers. Thanks."
        );
      await interaction.reply({ embeds: [successEmbed], ephemeral: true });
    });
  },
};
