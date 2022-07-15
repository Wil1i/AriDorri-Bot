const client = require("../../helpers/clientHandler")
const config = require("../../configs/config.json")

const post = (req, res) => {
    const findUser = client.users.cache.get(req.query.id)
    if(findUser){
        findUser.send("Ba salam va khaste nabashid. Suggestion shoma tavasote team developer AriDorri barresi va accept shod. Ba tashakor az shoma.")
        .then(() => {
            res.send({
                status : "sent"
            })
        }).catch(err => {
            return res.send({
                status : "failed"
            })
        })

    }else{
        res.send({
            status : "404"
        })
    }
}

module.exports = {
    post
}