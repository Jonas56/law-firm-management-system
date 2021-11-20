const faker = require("faker");
const { Case } = require("../../models");

// Client Data
const client = {
  full_name: faker.name.findName(),
  age: faker.datatype.number(80),
  phone_number: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  zipcode: faker.address.zipCode(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

// Cases data
const cases = {
  userId: 1,
  clientId: 1,
  title: "Case",
  description: faker.lorem.paragraph(),
  judge: faker.name.findName(),
  enemy: faker.name.findName(),
  place: faker.address.city(),
  result: faker.lorem.word(),
  status: "opened",
  priority: "high",
};

// Users Data
const user = {
  full_name: faker.name.findName(),
  email: "jonas@email.com",
  password: "Jonas@123",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const getLastInsertedCaseId = async () => {
  const cases = await Case.findAll({});
  return cases[cases.length - 1];
};

module.exports = {
  client,
  user,
  cases,
  getLastInsertedCaseId,
};
