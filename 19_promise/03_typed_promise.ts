// Define an interface for the expected data.
interface User {
  id: number;
  name: string;
  email: string;
}

// Create a function that returns a Promise of the defined type.
function fetchUserData(userId: number): Promise<User> {
  return new Promise((resolve) => {
	setTimeout(() => {
	  resolve({
		id: userId,
		name: "John Doe",
		email: "john.doe@example.com",
	  });
	}, 1000);
  });
}

// Use the function and ensure type safety.
async function getUserData() {
  try {
	const user: User = await fetchUserData(1);
	console.log(user.name); // Output: John Doe
  } catch (error) {
	console.error(error);
  }
}

getUserData();

