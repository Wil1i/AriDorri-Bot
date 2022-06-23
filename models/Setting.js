const {DataTypes} = require("sequelize")
const db = require("../configs/db")

const Setting = db.define("settings", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        aautoIncrement : true
    },

    name : {
        type : DataTypes.TEXT
    },

    value : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

module.exports = Setting