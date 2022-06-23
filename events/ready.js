const index = require("../index")
const config = require("../configs/config.json")

module.exports = {
    name : "ready",
    description : "ready handler (for when bot goes online)",
    async execute(client){

        console.log(`Bot [${client.user.tag}] is now ready to use.`)

        const guild = client.guilds.cache.get(config.guilds.main)
        const adminGuild = client.guilds.cache.get(config.guilds.admin)
        await guild.commands.set(index.commands)
        await adminGuild.commands.set(index.commands)
    }
}