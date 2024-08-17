// Create multiple functions that return Promises.
// Use "Promise.all()" to handle multiple Promises concurrently.
// Use "Promise.race()" to handle the first resolved or rejected Promise.

// Function that returns a Promise
function fetchUser(userId: number): Promise<string> {
  return new Promise((resolve) => {
	setTimeout(() => {
	  resolve(`User ${userId} fetched`);
	}, 1000 * userId);
  });
}

// Function that returns a Promise
function fetchPosts(userId: number): Promise<string> {
  return new Promise((resolve) => {
	setTimeout(() => {
	  resolve(`Posts for user ${userId} fetched`);
	}, 1000 * (userId + 1));
  });
}

// Using Promise.all to handle multiple Promises concurrently
Promise.all([fetchUser(1), fetchPosts(1)])
  .then((results) => {
	console.log(results); // Output: [ 'User 1 fetched', 'Posts for user 1 fetched' ]
  })
  .catch((error) => {
	console.error(error);
  });

// Using Promise.race to handle the first resolved or rejected Promise
Promise.race([fetchUser(2), fetchPosts(2)])
  .then((result) => {
	console.log(result); // Output: User 2 fetched (since it resolves first)
  })
  .catch((error) => {
	console.error(error);
  });

