import {TrashIcon} from "lucide-react";
import Image from "next/image";
import React from "react";
import {Button} from "./ui/button";

function ShowCartItems({cartItemList, handleDeleteItem}) {
  console.log("cart iitems", cartItemList);

 

  return (
    <div>
      <div className="overflow-auto h-[calc(100vh-250px)]">
        {cartItemList.map((item, index) => (
          <div
            key={index}
            className="w-[clac(100%-30px)] my-2 flex items-center justify-between text-left">
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
                <h2 className="text-md font-medium ">৳{item?.amount}</h2>
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
    </div>
  );
}

export default ShowCartItems;
