const express = require("express")

const app = express()

app.listen(3000, () => {
    console.log("API server running")
})

module.exports.app = app