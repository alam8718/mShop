import Image from "next/image";
import React from "react";
import {Button} from "./ui/button";

function ProductItem({product}) {
  // console.log("first", product);
  return (
    <div className="p-2 md:p-6 flex flex-col items-center justify-center border rounded-lg hover:scale-105 transition-all ease-in-out hover:shadow-sm">
      <Image
        className=" w-[200px] h-[200px] object-contain"
        width={500}
        height={200}
        src={`${product?.attributes?.productImage}`}
        alt={product?.attributes?.name}
      />
      <div className="my-1.5">
        <h2 className="text-center font-bold text-lg">
          {product?.attributes?.name}
        </h2>
        <h2 className="text-center font-bold">৳ {product?.attributes?.taka}</h2>
      </div>
      <Button
        variant="outline"
        className="text-primary hover:text-white font-bold hover:bg-primary">
        Add to cart
      </Button>
    </div>
  );
}

export default ProductItem;
