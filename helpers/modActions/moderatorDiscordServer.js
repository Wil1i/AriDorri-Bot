const client = require("../clientHandler")
const config = require("../../configs/config.json")

const ban = (userId) => {
    if(!userId) return false

    const moderatorServer = client.guilds.cache.get(config.guilds.admin)
    if(moderatorServer){

        const targetUser = moderatorServer.members.cache.get(userId)
        if(targetUser){

            targetUser.ban({reason : "Moderator fully kicked"}).then(() => {
                return true
            })

        }

    }
    return false
}

const kick = (userId) => {
    if(!userId) return false

    const moderatorServer = client.guilds.cache.get(config.guilds.admin)
    if(moderatorServer){

        const targetUser = moderatorServer.members.cache.get(userId)
        if(targetUser){

            targetUser.kick({reason : "Moderator fully kicked"}).then(() => {
                return true
            })

        }

    }
    return false
}

module.exports = {
    ban,
    kick
}