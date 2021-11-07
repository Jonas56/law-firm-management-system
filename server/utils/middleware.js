const logger = require("./logger");

const requestLogger = (req, res, next) => {
  logger.info("Method:", req.method);
  logger.info("Path:  ", req.path);
  logger.info("Body:  ", req.body);
  logger.info("---");
  next();
};

const errorHandling = (error, req, res, next) => {
  logger.error(error.name);

  if (error.name === "SequelizeDatabaseError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "SequelizeValidationError") {
    return res.status(400).send({ error: error.message });
  } else if (error.name === "TypeError") {
    return res.status(400).send({ error: "Cannot find this case" });
  } else if (error.name === "SequelizeForeignKeyConstraintError") {
    return res.status(400).send({ error: "Cannot add this case" });
  }

  res.status(400).send({ error: error.message });
  next();
};

module.exports = {
  requestLogger,
  errorHandling,
};
