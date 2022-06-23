const Discord = require("discord.js");
const fs = require("fs");
const config = require("./configs/config.json");

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

const commandsDirectory = fs
  .readdirSync("commands")
  .filter((file) => file.endsWith(".js"));
const eventsDirectory = fs
  .readdirSync("events")
  .filter((file) => file.endsWith(".js"));

client.events = new Discord.Collection();
client.commands = new Discord.Collection()
let commands = [];

for (const i of commandsDirectory) {
  const command = require(`./commands/${i}`);
  if (command.name && command.data) {
    client.commands.set(command.name, command)

    if(!command.everyoneCanUse) command.data.defaultPermission = false
    commands.push(command.data.toJSON())
    
    console.log(`[REG] Command ${command.name} registered `);

  } else {
    console.log(`[ERR] Command ${i} is not valid`);
  }
}

for (const i of eventsDirectory) {
  const event = require(`./events/${i}`);
  if (event.name && event.execute) {
    client.events.set(event.name, event);
    client.on(event.name, (arg1, arg2, arg3) => {
      event.execute(client, arg1, arg2, arg3);
    });
    console.log(`[REG] Event ${event.name} registered`);
  } else {
    console.log(`[ERR] Event ${i} is not valid`);
  }
}

module.exports.events = client.events
module.exports.commands = commands

client.login(config.bot.token)