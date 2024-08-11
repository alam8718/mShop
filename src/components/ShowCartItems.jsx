import {TrashIcon} from "lucide-react";
import Image from "next/image";
import React from "react";
import {Button} from "./ui/button";

function ShowCartItems({cartItemList, handleDeleteItem}) {
  console.log("cart iitems", cartItemList);

  const subTotal = cartItemList.reduce((acc, cur) => acc + cur?.amount, 0);

  return (
    <div>
      <div className="overflow-auto h-[calc(100vh-250px)]">
        {cartItemList.map((item, index) => (
          <div
            key={index}
            className="w-[clac(100%-30px)] my-2 flex items-center justify-between">
            <div key={index} className="flex items-center  gap-3">
              <div className=" w-[70px] h-[70px] rounded-lg overflow-hidden border">
                <Image
                  width={100}
                  height={100}
                  src={`${item?.image}`}
                  alt={item?.name}
                />
              </div>
              <div className="w-[calc(100%-70px)]">
                <h2 className="font-bold line-clamp-1">{item?.name}</h2>
                <h2 className="">Quantity: {item?.quantity}</h2>
                <h2 className="text-md font-medium px-1">৳{item?.amount}</h2>
              </div>
            </div>
            {/* delete button */}
            <button
              onClick={() => handleDeleteItem(item?.id)}
              className="w-[25px] h-[25px] text-red-600">
              <TrashIcon />
            </button>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 flex flex-col w-[90%]">
        <h2 className="text-lg font-bold flex justify-between">
          Subtotal <span>৳{subTotal.toFixed(2)}</span>
        </h2>
        <Button>View Cart</Button>
      </div>
    </div>
  );
}

export default ShowCartItems;
