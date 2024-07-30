// import "./App.css";
// import Greeter from "./components/Greeter";
import { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/Item";

const initialItems: Item[] = [
  { id: 1, product: "Lemon", quantity: 12 },
  { id: 2, product: "Chicken Breast", quantity: 2 },
];
function App() {
  const [items, setItems] = useState<Item[]>(initialItems);

  return (
    <>
      <h1>Hello from Typescript</h1>
      {/* <Greeter name="Colt" /> */}

      <ShoppingList items={items} />
    </>
  );
}

export default App;
