import Image from "next/image";
import React from "react";

function MyOrderItem({orderItem}) {
  return (
    <div className="my-5 flex gap-10 items-center">
      <Image
        src={orderItem?.product?.data?.attributes?.productImage}
        alt="order product image"
        width={100}
        height={100}
      />
      <div>
        <h2>{orderItem?.product?.data?.attributes?.name}</h2>
        <h2>
          Item Price: ৳ {orderItem?.product?.data?.attributes?.sellingPrice}
        </h2>
        <h2>Quantity: {orderItem?.quantity}</h2>
        <h2>Price: ৳ {orderItem?.price}</h2>
      </div>
    </div>
  );
}

export default MyOrderItem;
