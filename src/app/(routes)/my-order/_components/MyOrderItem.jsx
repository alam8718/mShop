import Image from "next/image";
import React from "react";

function MyOrderItem({orderItem}) {
  return (
    <div className="my-5 max-w-[550px] border flex gap-10 items-center">
      <Image
        src={orderItem?.product?.data?.attributes?.productImage}
        alt="order product image"
        width={100}
        height={100}
      />
      <div>
        <h2 className="font-semibold line-clamp-1">
          {orderItem?.product?.data?.attributes?.name}
        </h2>
        <h2 className="flex gap-1">
          <span className="font-medium line-clamp-1">Item Price: ৳</span>{" "}
          {orderItem?.product?.data?.attributes?.sellingPrice}
        </h2>
        <h2 className="flex gap-1">
          <span className="font-medium line-clamp-1">Quantity: </span>
          {orderItem?.quantity}
        </h2>
        <h2 className="flex gap-1">
          <span className="font-medium line-clamp-1">Price: ৳ </span>
          {orderItem?.price}
        </h2>
      </div>
    </div>
  );
}

export default MyOrderItem;
