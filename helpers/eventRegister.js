const fs = require("fs");
const Discord = require("discord.js");

const eventRegister = (client) => {
  const eventsDirectory = fs
    .readdirSync("events")
    .filter((file) => file.endsWith(".js"));

  client.events = new Discord.Collection();

  for (const i of eventsDirectory) {
    const event = require(`../events/${i}`);
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
};

module.exports = eventRegister;
