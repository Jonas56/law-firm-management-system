const loginServices = require("../services/loginServices");
const loginRouter = require("express").Router();

loginRouter.post("/", async (req, res) => {
  return await loginServices.login(req, res);
});

module.exports = loginRouter;
