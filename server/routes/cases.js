const caseRouter = require("express").Router();
const caseServices = require("../services/caseServices");

caseRouter.get("/", async (req, res) => {
  return caseServices.getAll(req, res);
});

caseRouter.post("/", async (req, res) => {
  const objCase = req.body;
  // const clientId = "";
  // const userId = ""; // from middlware
  return caseServices.create(req, res, objCase);
});

caseRouter.get("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  return caseServices.getById(req, res, uuid);
});

module.exports = caseRouter;
