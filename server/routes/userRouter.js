const userRouter = require("express").Router();
const userServices = require("../services/userServices");

userRouter.get("/", async (req, res) => {
  return await userServices.getAll(req, res);
});

userRouter.post("/", async (req, res) => {
  return await userServices.create(req, res);
});

module.exports = userRouter;
