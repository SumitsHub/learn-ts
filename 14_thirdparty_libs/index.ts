import axios from "axios";
import { User } from "./types";

function getUser(id: number) {
  axios
    .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      //   console.log(res.data);
      const { data } = res;
      console.log(data.company.catchPhrase);
      printUser(data);
    })
    .catch(err => console.log("Error", err));
}

function printUser(user: User, i: number = 0) {
  console.log(i++, user.name);
  console.log(i++, user.phone);
}

getUser(1);

async function getUsers() {
  const res = await axios.get<User[]>(
    `https://jsonplaceholder.typicode.com/users`
  );

  return res.data;
}

(async () => {
  (await getUsers()).map(printUser);
})();
