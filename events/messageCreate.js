const Suggest = require("../models/Suggest")

module.exports = {
    name : "messageCreate",
    async execute(client, message){
        const firstMention = message.mentions.users.first()
        if (firstMention && firstMention.id == client.user.id){
            await Suggest.create({
                name : message.author.tag,
                text : message.content
            })
        }
    }
}