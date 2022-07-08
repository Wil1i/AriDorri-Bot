const Discord = require("discord.js");
const fs = require("fs");
const config = require("./configs/config.json");

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

require("./helpers/commandRegister")(client)
require("./helpers/eventRegister")(client)

module.exports.client = client

client.login(config.bot.token)