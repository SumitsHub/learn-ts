// Function that returns a Promise
function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
	setTimeout(() => {
	  if (url === "https://jsonplaceholder.typicode.com/todos/1") {
		resolve("Data fetched successfully!");
	  } else {
		reject("Invalid URL");
	  }
	}, 1000);
  });
}

// Using .then and .catch
fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
	console.log(data); // Output: Data fetched successfully!
  })
  .catch((error) => {
	console.error(error); // Output: Invalid URL (if URL is incorrect)
  });

// Using async/await
async function getData() {
  try {
	const data = await fetchData("https://jsonplaceholder.typicode.com/todos/1");
	console.log(data); // Output: Data fetched successfully!
  } catch (error) {
	console.error(error); // Output: Invalid URL (if URL is incorrect)
  }
}

getData();

