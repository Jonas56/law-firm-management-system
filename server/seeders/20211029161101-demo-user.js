"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Users", [
      {
        uuid: faker.datatype.uuid(),
        full_name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: faker.datatype.uuid(),
        full_name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: faker.datatype.uuid(),
        full_name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete("Clients", null, {});
  },
};
