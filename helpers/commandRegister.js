const fs = require("fs")
const Discord = require("discord.js")

let commands = [];

const commandRegister = (client) => {
    const commandsDirectory = fs
    .readdirSync("commands")
    .filter((file) => file.endsWith(".js"));

    client.commands = new Discord.Collection()

    for (const i of commandsDirectory) {
        const command = require(`../commands/${i}`);
        if (command.name && command.data) {
          client.commands.set(command.name, command)
      
          if(!command.everyoneCanUse) command.data.defaultPermission = false
          // commands.push(command.data.toJSON())
          
          console.log(`[REG] Command ${command.name} registered `);
      
        } else {
          console.log(`[ERR] Command ${i} is not valid`);
        }
      }
}

module.exports = commandRegister
module.exports.commands = commands
