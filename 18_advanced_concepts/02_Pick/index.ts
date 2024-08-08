/** Pick in TS */

// Pick is a utility type that allows you to create a new type by picking the properties from an existing type.
// This is useful when you want to create a type that only includes certain properties from another type.

// Syntax:
// Pick<Type, Keys>
// Type: The original type you want to derive from.
// Keys: The keys you want to include in the new type.

interface Person {
  name: string;
  age: number;
  address: string;
  email: string;
}

interface Person {
  name: string;
  age: number;
  address: string;
  email: string;
}

type PersonContactInfo = Pick<Person, 'name' | 'email'>;

// You want to create a new type that only includes the name and email properties. You can use Pick to achieve this -
const contactInfo: PersonContactInfo = {
  name: "John Doe",
  email: "john.doe@example.com"
  // Only name and email are included
};


//* Complex example
interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface Company {
  name: string;
  location: Address;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
  phoneNumbers: string[];
  company: Company;
  isActive: boolean;
}

// Create a new type that includes only the id, name, email, and company name properties
type UserBasicInfo = Pick<User, 'id' | 'name' | 'email' | 'company'>;

// Create an instance of the new type
const userBasicInfo: UserBasicInfo = {
  id: 1,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  company: {
    name: "Tech Corp",
    location: {
      street: "123 Tech Lane",
      city: "Innovation City",
      zipCode: "12345"
    }
  }
  // Only id, name, email, and company are included
};

// Accessing properties
console.log(userBasicInfo.name); // Output: Jane Doe
console.log(userBasicInfo.company.name); // Output: Tech Corp
