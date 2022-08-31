const fs = require("fs");

const eventRegister = (client) => {
  const eventsDirectory = fs
    .readdirSync("twitchUtils/events")
    .filter((file) => file.endsWith(".js"));

  client.events = {};

  for (const eventFile of eventsDirectory) {
    const event = require(`../../twitchUtils/events/${eventFile}`);
    if (event.name && event.execute) {
      client.events[event.name] = event;
      client.on(event.name, (arg1, arg2, arg3) => {
        event.execute(client, arg1, arg2, arg3);
      });
      console.log(`[TTV] Event ${event.name} registered`);
    } else {
      console.log(`[TTV] Event ${event.name} not registered`);
    }
  }
};

module.exports = eventRegister;
