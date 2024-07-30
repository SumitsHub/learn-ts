import Item from "../models/Item";

interface ShoppingListProps {
  items: Item[];
}

function ShoppingList({ items }: ShoppingListProps) {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;
