import {faker} from '@faker-js/faker';

const userData = createRandomUserData();

export function createRandomUserData() {
    return {
        name: faker.person.firstName().toLowerCase(),
        email: faker.internet.email(),
        pass: faker.internet.password(),
    };
}