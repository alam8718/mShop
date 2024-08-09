"use client";
import Image from "next/image";
import React, {useState} from "react";
import {Button} from "./ui/button";
import {ShoppingBasket} from "lucide-react";

function ProductItemDetails({product}) {
  const [productTotalPrice, setProductTotalPrice] = useState(
    product?.attributes?.taka
  );

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-7 text-black bg-white">
      <div className="flex justify-center">
        <Image
          className=" w-[300px] h-[320px] rounded-lg overflow-hidden object-contain"
          width={500}
          height={200}
          src={`${product?.attributes?.productImage}`}
          alt={product?.attributes?.name}
        />
      </div>
      <div className="my-1.5 flex flex-col gap-3">
        <h2 className=" font-bold text-2xl">{product?.attributes?.name}</h2>
        <h2 className=" text-gray-500 text-sm">
          {product?.attributes?.description}
        </h2>
        <h2 className=" font-bold text-3xl">৳ {product?.attributes?.taka}</h2>
        <h2 className=" font-medium text-lg mb-5">
          Quantity {product?.attributes?.itemQuantityType}
        </h2>
        {/* button  */}
        <div className="flex flex-col gap-3 items-baseline">
          <div className="flex gap-2">
            <div className=" flex justify-between  border items-center  rounded-lg w-[140px] h-full">
              <button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
                className="text-2xl w-10 h-full hover:bg-gray-200">
                -
              </button>
              <h2>{quantity}</h2>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-2xl w-10 h-full hover:bg-gray-200">
                +
              </button>
            </div>
            <h2 className="font-bold text-2xl my-2">
              = ৳ {(quantity * productTotalPrice).toFixed(2)}
            </h2>
          </div>

          <Button className="flex gap-3">
            <ShoppingBasket />
            Add To Cart
          </Button>
        </div>
        <h2 className="text-left">
          <span className="font-bold">Category: </span>
          {product?.attributes?.categories?.data[0]?.attributes?.name}
        </h2>
      </div>
    </div>
  );
}

export default ProductItemDetails;
