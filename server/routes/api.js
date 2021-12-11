const express = require("express");
const userRouter = require("./userRouter");
const loginRouter = require("./loginRouter");
const caseRouter = require("./caseRouter");
const middleware = require("../utils/middleware");
const api = express.Router();

api.use("/api/cases", middleware.userAuthentication, caseRouter);
api.use("/api/users", userRouter);
api.use("/api/login", loginRouter);
api.get("/health", (req, res) => {
  res.send("v0.1.0");
});

module.exports = api;
