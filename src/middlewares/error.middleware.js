const env = require("../config/env");

module.exports = (err, req, res, next) => {
    console.error(err);

    res.status(err.status || 500).render("error", {
        message: env.nodeEnv === "development" ? err.message : null,
        error: env.nodeEnv === "development" ? err : null
    });
};

