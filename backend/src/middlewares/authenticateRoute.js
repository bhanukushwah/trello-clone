const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.headers && req.headers.authorization) {
    var authorization = req.headers.authorization.split(" ")[1],
      decoded;
    try {
      decoded = jwt.verify(authorization, process.env.TOKEN_SECRET);
    } catch (e) {
      return res.status(401).send("Invalid Token");
    }

    req.user = { id: decoded.id, email: decoded.email };
  }

  next();
};
