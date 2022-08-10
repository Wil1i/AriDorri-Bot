const { SlashCommandBuilder } = require("@discordjs/builders");
const {} = require("discord.js");
const User = require("../models/User");
const rankConverter = require("../helpers/rankConverter");

module.exports = {
  name: "add",
  eeryoneCanUse: false,

  data: new SlashCommandBuilder()
    .setName("add")
    .setDescription("Give users permission like moderator or something")
    .addMentionableOption((option) =>
      option
        .setName("user")
        .setDescription("User you want to give permission to")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("permission")
        .setDescription("Permission or rank name")
        .setRequired(true)
    ),

  async execute(client, interaction) {
    const executor = await User.findOne({
      where: {
        discordUsername: interaction.user.tag,
      },
    });

    if (!executor)
      return await interaction.reply({
        content: "You have not access to use this command!",
        ephemeral: true,
      });

    const enteredRank = interaction.options.getString("permission");

    const executorRankNumber = rankConverter(executor["userRank"]);
    const mentionedUserRankNumber = rankConverter(enteredRank);

    if (executorRankNumber <= mentionedUserRankNumber)
      return await interaction.reply({
        content: "You dont have enough permission to set this permission",
        ephemeral: true,
      });

    const targetUserInfo = interaction.options.getMention("user");

    const findTargetUser = await User.findOne({
      where: {
        discordUsername: targetUserInfo.tag,
      },
    });

    if (!findTargetUser)
      return await interaction.reply({
        content: "User have not account on DataBase",
        ephemeral: true,
      });

    await findTargetUser.update({
      userRank: enteredRank,
    });

    return await interaction.reply({
      content: "Successfully done.",
      ephemeral: true,
    });
  },
};
