"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Cases", [
      {
        uuid: faker.datatype.uuid(),
        userId: 1,
        clientId: 1,
        title: faker.hacker.phrase(),
        description: faker.lorem.paragraph(),
        judge: faker.name.findName(),
        enemy: faker.name.findName(),
        place: faker.address.city(),
        result: faker.lorem.word(),
        status: "opened",
        priority: "high",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: faker.datatype.uuid(),
        userId: 1,
        clientId: 3,
        title: faker.hacker.phrase(),
        description: faker.lorem.paragraph(),
        judge: faker.name.findName(),
        enemy: faker.name.findName(),
        place: faker.address.city(),
        result: faker.lorem.word(),
        status: "closed",
        priority: "low",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: faker.datatype.uuid(),
        userId: 2,
        clientId: 2,
        title: faker.hacker.phrase(),
        description: faker.lorem.paragraph(),
        judge: faker.name.findName(),
        enemy: faker.name.findName(),
        place: faker.address.city(),
        result: faker.lorem.word(),
        status: "closed",
        priority: "low",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Cases", null, {});
  },
};
