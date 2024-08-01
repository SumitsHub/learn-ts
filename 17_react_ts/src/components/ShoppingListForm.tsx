import { FormEvent, useRef } from "react";

function ShoppingListForm({
  onSubmit,
}: {
  onSubmit: (product: string, quantity: number) => void;
}) {
  const productRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget as HTMLFormElement);
    // const obj = Object.fromEntries(formData);

    onSubmit(productRef.current!.value, +quantityRef.current!.value);
    productRef.current!.value = "";
    quantityRef.current!.value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product"
          id="product"
          placeholder="Product Name"
          ref={productRef}
          required
        />
        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="Quantity"
          ref={quantityRef}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default ShoppingListForm;
