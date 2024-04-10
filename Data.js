import { faker } from "@faker-js/faker";

export const DATA = Array(20)
  .fill(null)
  .map((item) => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatarGitHub(),
    online: faker.datatype.boolean(),
    about: faker.lorem.paragraph(),
    followers: faker.number.int() % 500,
    follows: faker.number.int() % 500,
  }));
