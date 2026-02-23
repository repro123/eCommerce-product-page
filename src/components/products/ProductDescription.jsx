import ProductSpecs from "@/components/products/ProductSpecs.jsx";
import QuantitySelector from "@/components/ui/QuantitySelector.jsx";
import AddToCart from "@/components/ui/AddToCart.jsx";
import { useState } from "react";

function ProductDescription({ setCart, showToast }) {
  const [numberOfItems, setNumberOfItems] = useState(0);

  return (
    <section className="max-md:px-8 max-md:pb-8">
      <ProductSpecs />

      <div className="grid gap-4 md:grid-cols-2 mt-8">
        <QuantitySelector
          numberOfItems={numberOfItems}
          setNumberOfItems={setNumberOfItems}
        />

        <AddToCart
          numberOfItems={numberOfItems}
          setNumberOfItems={setNumberOfItems}
          setCart={setCart}
          showToast={showToast}
        />
      </div>
    </section>
  );
}

export default ProductDescription;
