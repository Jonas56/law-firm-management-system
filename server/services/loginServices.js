const bcrypt = require("bcrypt");
const { User } = require("../models");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const body = req.body;
  const user = await User.findOne({
    where: {
      email: body.email,
    },
  });

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(body.password, user.password);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "Invalid username or password",
    });
  }

  const userForToken = {
    email: user.email,
    id: user.id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  return res
    .status(200)
    .send({ name: user.full_name, email: user.email, token });
};

module.exports = { login };
