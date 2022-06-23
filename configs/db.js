const sequelize = require("sequelize")
const config = require("./config.json")

const db = new sequelize(config.db.name, config.db.user, config.db.password, {
    host : 'localhost',
    dialect : 'mysql'
})

try {
    db.authenticate()
    console.log("DataBase is connected")
} catch (error) {
    console.log("DataBase Connection Error", error)
}

module.exports = db