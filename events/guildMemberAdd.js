const User = require("../models/User")
const config = require("../configs/config.json")

module.exports = {
    name : "guildMemberAdd",
    description : "Handle when a user joined",
    async execute(client, member){
        if(member.guild.id == config.guilds.admin){
            const findUser = await User.findOne({
                where : {
                    disId : member.id
                }
            })

            if(findUser && (findUser.userRank == "moderator" || findUser.userRank == "developer" || findUser.userRank == "super moderator")){
                member.setNickname(findUser.username)
            }else{
                member.send("Ba salam va arze khaste nabashid.\nUser shoma be onvane **Moderator** dar system sabt nashode. Lotfan ba Super Mod va ya Support AriDorri tamas begirid. Ba tashakor.")
                member.ban({reason : "Have not Moderator access in DataBase."})
            }
        }

    }
}