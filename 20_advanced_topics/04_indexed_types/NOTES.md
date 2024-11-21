### How Indexed Access Types Differ from keyof

Feature Indexed Access (T[K]) keyof
Purpose Retrieves the type of one or more properties of T. Produces a union of the keys in T.
Output The value type of the property. The key names as a union type.
Example User["name"] gives string (value type). keyof User gives `"id"
Combination Used with keyof to dynamically reference property types. Can be used independently.

#### Examples of keyof vs Indexed Access

##### keyof Example:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User; // "id" | "name" | "email"
```

##### Indexed Access Example:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserIdType = User["id"]; // number
```

### Use Case: Combining keyof and Indexed Access

This pattern is common in reusable utility types.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: "Alice", email: "alice@example.com" };

const userName = getProperty(user, "name"); // Type inferred as string
```

Here:

keyof T ensures K is a valid key of T.
T[K] retrieves the type of the property associated with K.

### Key Takeaways:

- Indexed Access retrieves value types of specific properties.
- keyof retrieves a union of the key names.
- Combining both offers powerful dynamic type manipulation and inference.
