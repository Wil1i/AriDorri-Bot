const modServerActions = require("../../helpers/modActions/moderatorDiscordServer")

const post = (req, res) => {
    if(req.body.userId){

        // Ban from AriDorri STAFF
        modServerActions.ban(req.body.userId)
        // Remove moderator role from main server

        // Kick moderator from Twitch Stream
        // Kick from DataBase [last step]

    }else{
        res.send({
            "ok" : false,
            "message" : "Things we want is not in body of request"
        })
    }
}

module.exports = {
    post
}