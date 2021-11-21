const caseRouter = require("express").Router();
const caseServices = require("../services/caseServices");

caseRouter.get("/", async (req, res) => {
  return caseServices.getAll(req, res);
});

caseRouter.post("/", async (req, res) => {
  return caseServices.create(req, res);
});

caseRouter.get("/:id", async (req, res) => {
  return caseServices.getById(req, res);
});

caseRouter.delete("/:id", async (req, res) => {
  return caseServices.deleteCase(req, res);
});

caseRouter.put("/:id", async (req, res) => {
  return caseServices.updateCase(req, res);
});

module.exports = caseRouter;
