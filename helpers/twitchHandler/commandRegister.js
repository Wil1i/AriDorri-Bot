const fs = require("fs");

const commandRegister = (client) => {
  const commandsDirectory = fs
    .readdirSync("twitchUtils/commands")
    .filter((file) => file.endsWith(".js"));

  client.commands = {};

  for (const commandFile of commandsDirectory) {
    const command = require(`../../twitchUtils/commands/${commandFile}`);
    if (command.name && command.execute) {
      client.commands[command.name] = command;
      console.log(`[TTV] Command ${command.name} registered`);
    } else {
      console.log(`[TTV] Command ${command.name} is not registered`);
    }
  }
};

module.exports = commandRegister;
