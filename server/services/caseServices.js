const logger = require("../utils/logger");
const { Case } = require("../models");

async function getAll(req, res) {
  try {
    const cases = await Case.findAll();
    return res.json(cases);
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ error: "Can't create this case" });
  }
}

async function create(req, res, obj) {
  try {
    const case_law = await Case.create({ ...obj });
    return res.status(200).json(case_law);
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ error: "Can't create this case. Sorry!!!" });
  }
}

async function getById(req, res, uuid) {
  try {
    const case_law = await Case.findOne({ where: { uuid } });
    return res.status(200).json(case_law);
  } catch (error) {
    logger.error(error);
    return res.status(400).json({ error: "Can't find this case" });
  }
}

module.exports = {
  getAll,
  create,
  getById,
};
