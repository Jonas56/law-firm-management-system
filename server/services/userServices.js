const { User } = require("../models");

const getAll = async (req, res) => {
  const users = await User.findAll({});
  res.json(users);
};

const create = async (req, res) => {
  const body = req.body;
  const validPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!body.password || !validPassword.test(body.password)) {
    return res.status(400).json({
      error:
        "Password must contain minimum eight characters, at least one letter, one number and one special character",
    });
  }

  const createdUser = await User.create({
    full_name: body.name,
    email: body.email,
    password: body.password,
  });

  return res.status(200).json(createdUser);
};

module.exports = { create, getAll };
