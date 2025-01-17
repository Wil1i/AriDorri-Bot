const config = require("../../configs/config.json");
const client = require("../clientHandler");

const removeMod = (userId) => {
  if (!userId) return false;

  const mainServer = client.guilds.cache.get(config.guilds.main);
  if (mainServer) {
    console.log(userId);
    const targetUser = mainServer.members.cache.get(userId);
    if (targetUser) {
      targetUser.roles.remove(config.roles.moderator);
      targetUser.roles.remove(config.roles["super moderator"]);
      return true;
    }
  }
  return false;
};

const removeRole = (userId, roleId) => {
  if (!userId || !roleId) return false;

  const mainServer = client.guilds.cache.get(config.guilds.main);
  if (mainServer) {
    const targetUser = mainServer.members.cache.get(userId);
    if (targetUser) {
      targetUser.roles.remove(roleId).then(() => {
        return true;
      });
    }
  }
  return false;
};

const ban = (userId) => {
  if (!userId) return false;

  const mainServer = client.guilds.cache.get(config.guilds.main);
  if (mainServer) {
    const targetUser = mainServer.members.cache.get(userId);
    if (targetUser) {
      targetUser.ban().then(() => {
        return true;
      });
    }
  }
  return false;
};

const kick = (userId) => {
  if (!userId) return false;

  const mainServer = client.guilds.cache.get(config.guilds.main);
  if (mainServer) {
    const targetUser = mainServer.members.cache.get(userId);
    if (targetUser) {
      targetUser.kick().then(() => {
        return true;
      });
    }
  }
  return false;
};

module.exports = {
  removeRole,
  ban,
  kick,
  removeMod,
};
