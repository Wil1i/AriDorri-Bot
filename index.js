const config = require("./configs/config.json");
const client = require("./helpers/clientHandler")
const tClient = require("./helpers/twitchClientHandler")

require('./helpers/apiHandler')
require("./helpers/commandRegister")(client)
require("./helpers/eventRegister")(client)

tClient.connect()
client.login(config.bot.token)