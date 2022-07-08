const config = require("./configs/config.json");
const client = require("./helpers/clientHandler")

require('./helpers/apiHandler')
require("./helpers/commandRegister")(client)
require("./helpers/eventRegister")(client)

client.login(config.bot.token)