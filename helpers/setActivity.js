const Setting = require("../models/Setting")

const activity = async (client) => {
    const activityText = await Setting.findOne({
        where : {
            name : "activity-text"
        }
    })

    const activityMode = await Setting.findOne({
        where : {
            name : "activity-mode"
        }
    })

    const activityURL = await Setting.findOne({
        where : {
            name : "activity-url"
        }
    })

    client.user.setActivity(activityText.value, {
        type : activityMode.value.toUpperCase(),
        url : activityURL.value
    })
    setInterval(() => {
        client.user.setActivity(activityText.value, {
            type : activityMode.value.toUpperCase(),
            url : activityURL.value
        })
    }, 60000);
}

module.exports = activity