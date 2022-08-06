const modServerActions = require("../../helpers/modActions/moderatorDiscordServer")
const mainServerActions = require("../../helpers/modActions/mainDiscordServer")
const Moderator = require("../../models/Moderator")
const config = require("../../configs/config.json")

const post = async (req, res) => {
    if(req.body.userId){

        // Ban from AriDorri STAFF
        modServerActions.ban(req.body.userId)
        // Remove moderator role from main server
        mainServerActions.removeRole(req.body.userId, config.roles.moderator)
        // TODO: Kick moderator from Twitch Stream (it's better to do this using API system)
        // Kick from DataBase [last step]
        const findModerator = await Moderator.findOne({
            where : {
                userId : req.body.userId
            }
        })

        if(findModerator){
            findModerator.destroy()
            res.send({
                "ok" : true,
                "message" : null
            })
            return
        }

    }
    res.send({
        "ok" : false,
        "message" : "A trouble on request or finding moderator from database."
    })
}

module.exports = {
    post
}