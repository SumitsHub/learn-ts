import { FormEvent } from "react";

function ShoppingListForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("SUBMITTED!!!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product"
          id="product"
          placeholder="Product Name"
        />
        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="Quantity"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default ShoppingListForm;
