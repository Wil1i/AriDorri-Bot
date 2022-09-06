const modServerActions = require("../../helpers/modActions/moderatorDiscordServer");
const mainServerActions = require("../../helpers/modActions/mainDiscordServer");
const Moderator = require("../../models/Moderator");

const post = async (req, res) => {
  if (req.query.userId) {
    // Ban from AriDorri STAFF
    modServerActions.ban(req.query.userId);
    // Remove moderator role from main server
    mainServerActions.removeMod(req.query.userId);

    // TODO: Kick moderator from Twitch Stream (it's better to do this using API system)
    // Remove from DataBase [last step]
    const findModerator = await Moderator.findOne({
      where: {
        userId: req.query.userId,
      },
    });

    if (findModerator) {
      findModerator.destroy();
      res.send({
        ok: true,
        message: null,
      });
      return;
    }
  }
  res.send({
    ok: false,
    message: "A trouble on request or finding moderator from database.",
  });
};

module.exports = {
  post,
};
