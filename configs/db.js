const sequelize = require("sequelize")

const db = new sequelize("aridorri", "root", "shayanwilliams", {
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