const Suggest = require("../models/Suggest");
const twitchClient = require("../helpers/twitchClientHandler");

module.exports = {
  name: "messageCreate",
  async execute(client, message) {
    const firstMention = message.mentions.users.first();
    if (firstMention && firstMention.id == client.user.id) {
      await Suggest.create({
        name: message.author.tag,
        text: message.content,
      });
    }

    // ? check for youtube content, if a new content released, send news to twitch chat
    if (message.channel.id == "666293441340112925") {
      const isMessageHaveLink = message.content.includes("https://");
      if (isMessageHaveLink) {
        const messageSplit = message.content.split(" ");
        let link = null;
        for (msg of messageSplit) {
          if (msg.startsWith("https") && msg.includes("youtu")) {
            link = msg;
            break;
          }
        }

        if (link) {
          twitchClient.say("aridorri", `New YouTube video released : ${link}`);
        }
      }
    }
  },
};
