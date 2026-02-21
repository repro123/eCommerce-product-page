import ProductSpecs from "./ProductSpecs.jsx";
import QuantitySelector from "../ui/QuantitySelector.jsx";
import AddToCart from "../ui/AddToCart.jsx";

function ProductDescription({ numberOfItems, setNumberOfItems }) {
  function handleRemoveOne() {
    numberOfItems && setNumberOfItems((i) => i - 1);
  }

  function handleAddOne() {
    setNumberOfItems((i) => i + 1);
  }

  return (
    <section className="max-md:px-8 max-md:pb-8">
      <ProductSpecs />

      <div className="grid gap-4 md:grid-cols-2 mt-8">
        <QuantitySelector
          numberOfItems={numberOfItems}
          onAddOne={handleAddOne}
          onRemoveOne={handleRemoveOne}
        />

        <AddToCart />
      </div>
    </section>
  );
}

export default ProductDescription;
