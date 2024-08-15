"use client";
import GlobalApi from "@/_utils/GlobalApi";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import moment from "moment";
import MyOrderItem from "./_components/MyOrderItem";

function MyOrder() {
  const jwt = sessionStorage.getItem("jwt");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const router = useRouter();
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    if (!jwt) return router.push("/");
    getMyOrder();
  }, []);

  const getMyOrder = async () => {
    const orderList = await GlobalApi.getMyOrders(user?.id, jwt);
    // console.log("order list", orderList);
    setOrderList(orderList);
  };

  return (
    <div>
      <div>
        <h2 className="p-4 bg-primary text-xl font-bold text-center text-white">
          My Order
        </h2>
        <div className="py-8 mx-7 md:mx-20">
          <h2 className="text-3xl font-bold text-primary mb-5">
            Order History
          </h2>
          <div className="flex flex-col gap-3">
            {orderList.map((item, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger>
                  <div className="w-full sm:min-w-[550px]  border p-2 bg-slate-100 flex gap-5 justify-between">
                    <h2>
                      <span className="font-bold">Order Date: </span>
                      {moment(item?.createdAt).format("DD/MMM/YYYY")}
                    </h2>
                    <h2>
                      <span className="font-bold ">Total Amount:</span>
                      {`৳${item?.totalOrderAmount}`}
                    </h2>
                    <h2>
                      <span className="font-bold ">Status: </span>
                      {item?.status}
                    </h2>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {item?.orderItemList.map((item, index) => (
                    <MyOrderItem key={index} orderItem={item} />
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
