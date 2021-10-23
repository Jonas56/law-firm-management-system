const caseRouter = require("express").Router();
const logger = require("../utils/logger");
const { Case } = require("../models");

caseRouter.get("/", async (req, res) => {
  try {
    const cases = await Case.findAll();
    return res.json(cases);
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ error: "Can't create this case " });
  }
});

caseRouter.post("/", async (req, res) => {
  const { title, description, place, result } = req.body;
  try {
    const case_law = await Case.create({ title, description, place, result });
    return res.status(200).json(case_law);
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ error: "Can't create this case " });
  }
});

module.exports = caseRouter;
