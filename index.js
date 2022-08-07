const config = require("./configs/config.json");
const client = require("./helpers/clientHandler");
const tClient = require("./helpers/twitchClientHandler");

// Require anything else we want (like api handler)
require("./helpers/apiHandler");

// Require things for discord bot (like command & event handler)
require("./helpers/commandRegister")(client);
require("./helpers/eventRegister")(client);

// Require things for twitch bot (like command & event handler)
require("./helpers/twitchHandler/commandRegister")(tClient);
require("./helpers/twitchHandler/eventRegister")(tClient);

// Run twitch and discord bot
tClient.connect();
client.login(config.bot.token);
