const logger = require("../utils/logger");
const { Case } = require("../models");

async function getAll(req, res) {
  try {
    const cases = await Case.findAll({
      include: "client",
    });
    return res.json(cases);
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ error: "Can't resolve this request" });
  }
}

async function create(req, res) {
  const userId = 1;
  const objCase = { ...req.body, userId };
  try {
    const case_law = await Case.create({ ...objCase });
    return res.status(201).json(case_law);
  } catch (error) {
    logger.error(error);
    return res.status(400).json({ error: error.message });
  }
}

async function getById(req, res) {
  const id = Number(req.params.id);
  try {
    const case_law = await Case.findOne({ where: { id } });
    if (case_law) {
      return res.status(200).json(case_law);
    } else {
      return res.status(400).json({ error: "Case not found" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function deleteCase(req, res) {
  const id = Number(req.params.id);
  try {
    const case_law = await Case.destroy({ where: { id } });
    if (case_law) {
      return res.status(200).json({ message: "Case deleted succesfully" });
    } else {
      return res.status(400).json({ error: "Case not found" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function updateCase(req, res) {
  const id = Number(req.params.id);
  const userId = 1;
  try {
    await Case.update({ ...req.body, userId }, { where: { id } });
    const updatedCase = await Case.findOne({
      where: { id },
      include: "client",
    });
    return res.status(200).json(updatedCase);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAll,
  create,
  getById,
  deleteCase,
  updateCase,
};
