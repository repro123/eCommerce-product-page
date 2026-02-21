function ProductSpecs() {
  return (
    <>
      <p className="text-sm uppercase tracking-wider">Sneaker Company</p>
      <h1 className="text-3xl font-bold mt-4 text-gray-950">
        Fall Limited Edition Sneakers
      </h1>
      <p className="mt-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mt-4 flex gap-4 items-start">
        <span className="font-bold text-2xl text-gray-950">$125.00</span>{" "}
        <span className="bg-gray-950 text-white text-sm p-1 rounded-md">
          50% <span className="sr-only">discount</span>
        </span>
      </div>
      <p>
        <del className="font-bold">$250.00</del>
      </p>
    </>
  );
}

export default ProductSpecs;
