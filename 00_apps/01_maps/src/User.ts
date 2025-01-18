import { faker } from "@faker-js/faker";

class User {
  name: string;

  address: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();

    this.address = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}

export default User;
