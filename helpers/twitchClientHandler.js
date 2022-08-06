const tmi = require("tmi.js")
const config = require("../configs/config.json")

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: config.twitch.username,
		password: config.twitch.password
	},
	channels: [ 'aridorri' ]
});

module.exports = client