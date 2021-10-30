"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Clients", [
      {
        uuid: faker.datatype.uuid(),
        full_name: faker.name.findName(),
        age: faker.datatype.number(80),
        phone_number: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zipcode: faker.address.zipCode(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: faker.datatype.uuid(),
        full_name: faker.name.findName(),
        age: faker.datatype.number(80),
        phone_number: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zipcode: faker.address.zipCode(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: faker.datatype.uuid(),
        full_name: faker.name.findName(),
        age: faker.datatype.number(80),
        phone_number: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zipcode: faker.address.zipCode(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete("Clients", null, {});
  },
};
