// import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
const items = [
  { id: 1, product: "Lemon", quantity: 12 },
  { id: 2, product: "Chicken Breast", quantity: 2 },
];
function App() {
  return (
    <>
      <h1>Hello from Typescript</h1>
      {/* <Greeter name="Colt" /> */}

      <ShoppingList items={items} />
    </>
  );
}

export default App;
