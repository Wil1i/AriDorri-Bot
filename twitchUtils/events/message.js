const client = require("../../helpers/twitchClientHandler");
const config = require("../../configs/config.json");

module.exports = {
  execute(channel, userstate, message, self) {
    if (self || channel.name !== "aridorri") return null;

    const args = message.split(" ");
    const cmd = args[0];

    if (cmd && client.commands[cmd.replace(config.twitch.prefix, "")]) {
      client.commands[cmd.replace(config.twitch.prefix, "")].execute(
        client,
        channel,
        userstate,
        message
      );
    }
  },
};
