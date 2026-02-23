import Product from "@/components/data/Product.jsx";

function ProductSpecs() {
  return (
    <>
      <p className="text-sm uppercase tracking-wider">{Product.company}</p>
      <h1 className="text-3xl font-bold mt-4 text-gray-950">{Product.name}</h1>
      <p className="mt-4">{Product.description}</p>
      <div className="mt-4 flex gap-4 items-start">
        <span className="font-bold text-2xl text-gray-950">
          ${Product.price}
        </span>{" "}
        <span className="bg-gray-950 text-white text-sm p-1 rounded-md">
          {Product.discount}% <span className="sr-only">discount</span>
        </span>
      </div>
      <p>
        <del className="font-bold">$250.00</del>
      </p>
    </>
  );
}

export default ProductSpecs;
