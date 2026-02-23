import ProductSpecs from "@/components/products/ProductSpecs.jsx";
import QuantitySelector from "@/components/ui/QuantitySelector.jsx";
import AddToCart from "@/components/ui/AddToCart.jsx";

function ProductDescription({
  numberOfItems,
  setNumberOfItems,
  setCart,
  setCartQuantity,
  showToast,
}) {
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

        <AddToCart
          numberOfItems={numberOfItems}
          setNumberOfItems={setNumberOfItems}
          setCart={setCart}
          setCartQuantity={setCartQuantity}
          showToast={showToast}
        />
      </div>
    </section>
  );
}

export default ProductDescription;
