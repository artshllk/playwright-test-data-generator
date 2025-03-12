const { faker } = require("@faker-js/faker");

class TestDataGenerator {
  constructor(filePath = "./test-data.json") {
    this.filePath = filePath;
    this.data = {};
  }

  generateUser() {
    return {
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
      phone: faker.phone.number(),
    };
  }
}
