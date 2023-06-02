const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "zubeir",
        mongodb_password: "mfy3ni9LvVv3lllB",
        mongodb_clustername: "cluster0",
        mongodb_database: "development",
      },
    };
  }

  return {
    env: {
      mongodb_username: "zubeir",
      mongodb_password: "mfy3ni9LvVv3lllB",
      mongodb_clustername: "cluster0",
      mongodb_database: "cohico",
    },
  };
};
