const epxress = require("express")
const client = require("../helpers/clientHandler")
const Router = new epxress.Router()

const modKickedController = require("./controllers/modKickedController")
Router.post("/modKicked", modKickedController.post)

module.exports = Router