const { Case } = require("../models");

async function getAll(req, res) {
  const cases = await Case.findAll({
    where: { userId: req.body.userId },
    include: "client",
  });
  return res.json(cases);
}

async function create(req, res) {
  const objCase = { ...req.body };
  const case_law = await Case.create({ ...objCase });
  return res.status(201).json(case_law);
}

async function getById(req, res) {
  const id = Number(req.params.id);
  const case_law = await Case.findOne({
    where: { id, userId: req.body.userId },
    include: "client",
  });
  if (case_law) {
    return res.status(200).json(case_law);
  } else {
    return res.status(400).json({ error: "Case not found" });
  }
}

async function deleteCase(req, res) {
  const id = Number(req.params.id);
  const case_law = await Case.findOne({
    where: { id, userId: req.body.userId },
  });
  await case_law.destroy();
  return res.status(200).json({ message: "Case deleted succesfully" });
}

async function updateCase(req, res) {
  const id = Number(req.params.id);
  const userId = 1;
  const case_law = await Case.findOne({
    where: { id, userId: req.body.userId },
  });

  const case_test = await case_law.update(
    { ...req.body, userId },
    { where: { id }, include: "client" }
  );
  if (case_test) {
    return res.status(200).json(case_test);
  }
}

module.exports = {
  getAll,
  create,
  getById,
  deleteCase,
  updateCase,
};
