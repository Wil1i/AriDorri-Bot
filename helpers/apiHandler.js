const express = require("express")

const app = express()

const apiControllers = require("../apiControllers/routes.js")
app.use("/", apiControllers)

app.listen(3000, () => {
    console.log("API server running")
})

module.exports = app