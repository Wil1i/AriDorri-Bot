const commandHandler = require("../helpers/commandRegister")
const config = require("../configs/config.json")
const setActivity = require("../helpers/setActivity")

module.exports = {
    name : "ready",
    description : "ready handler (for when bot goes online)",
    async execute(client){
        console.log(`Bot [${client.user.tag}] is now ready to use.`)
        setActivity(client)

        const guild = client.guilds.cache.get(config.guilds.main)
        const adminGuild = client.guilds.cache.get(config.guilds.admin)
        await guild.commands.set(commandHandler.commands)
        await adminGuild.commands.set(commandHandler.commands)
    }
}