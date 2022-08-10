const convert = (rankName) => {
  const ranks = {
    user: 1,
    moderator: 2,
    "super moderator": 3,
    admin: 4,
    owner: 5,
    developer: 6,
  };

  return ranks[rankName] || undefined;
};

module.exports = convert;
