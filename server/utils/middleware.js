const jwt = require("jsonwebtoken");
const { User } = require("../models");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

const logger = require("./logger");

const requestLogger = (req, res, next) => {
  logger.info("Method:", req.method);
  logger.info("Path:  ", req.path);
  logger.info("Body:  ", req.body);
  logger.info("---");
  next();
};

const userAuthentication = async (req, res, next) => {
  const token = getTokenFrom(req);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findOne({ where: { id: decodedToken.id } });
  if (user) {
    req.body.userId = decodedToken.id;
  } else {
    throw new Error("Token missing or invalid");
  }
  next();
};

const errorHandling = (error, req, res, next) => {
  logger.error(error.name);

  if (error.name === "SequelizeDatabaseError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "SequelizeValidationError") {
    return res.status(400).send({ error: error.message });
  } else if (error.name === "TypeError") {
    return res.status(400).send({ error: "Cannot find the requested data" });
  } else if (error.name === "SequelizeForeignKeyConstraintError") {
    return res.status(400).send({
      error: `Cannot add the following data reason: ${error.message}`,
    });
  } else if (error.name === "SequelizeUniqueConstraintError") {
    return res.status(400).send({
      error: "Provided credentials already exists",
    });
  } else if (error.name === "JsonWebTokenError") {
    return res.status(400).send({
      error: "Invalid token",
    });
  }

  res.status(400).send({ error: error.message });
  next();
};

module.exports = {
  requestLogger,
  errorHandling,
  userAuthentication,
};
