const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Moderator = db.define("moderators", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.STRING
    },

    userId : {
        type : DataTypes.STRING
    },

    userRank : {
        type : DataTypes.STRING
    }
}, {
    timestamps : false
})

module.exports = Moderator