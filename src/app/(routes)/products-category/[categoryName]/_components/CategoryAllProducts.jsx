import ProductItem from "@/components/ProductItem";
import React from "react";

function CategoryAllProducts({allProducts, categoryName}) {
  return (
    <div className="my-10">
      <h2 className="text-green-600 mb-3 font-bold text-2xl my-3">
        Our {categoryName} Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
        {allProducts?.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CategoryAllProducts;
