"use strict";
/** Pick in TS */
// You want to create a new type that only includes the name and email properties. You can use Pick to achieve this -
const contactInfo = {
    name: "John Doe",
    email: "john.doe@example.com"
    // Only name and email are included
};
// Create an instance of the new type
const userBasicInfo = {
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
