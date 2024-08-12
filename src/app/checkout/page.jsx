"use client";
import GlobalApi from "@/_utils/GlobalApi";
import {useGlobalContext} from "@/components/_context/GlobalContext";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ArrowBigRight} from "lucide-react";
import {useRouter} from "next/navigation";

import {useEffect, useState} from "react";
import {toast} from "sonner";

function CheckoutPage() {
  const {updateCart} = useGlobalContext();
  const jwt = sessionStorage.getItem("jwt");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [cartItemList, setCartItemList] = useState([]);
  const [totalCartItem, setTotalCartItem] = useState(0);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const deliveryCharge = 100;
  const subTotal = cartItemList.reduce((acc, cur) => acc + cur?.amount, 0);

  useEffect(() => {
    if (!jwt) {
      router.push("/sign-in");
    }
    totalCartItems();
  }, [updateCart]);

  const totalCartItems = async () => {
    const cartItems = await GlobalApi.getCartItems(user?.id, jwt);
    setTotalCartItem(cartItems?.length);
    setCartItemList(cartItems);
  };

  const onCheckout = () => {
    const payload = {
      data: {
        paymentId: Math.floor(10000000 + Math.random() * 90000000).toString(),
        totalOrderAmount: (subTotal + subTotal * 0.09 + deliveryCharge).toFixed(
          2
        ),
        username: name,
        email,
        phone,
        zip: zipCode,
        address,
        orderItemList: cartItemList,
        userId: user?.id,
      },
    };

    GlobalApi.createOrder(payload, jwt).then((res) => {
      console.log("create order res", res);
      toast("Order Placed Successfully!!!");
    });
  };

  return (
    <div>
      <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">
        Checkout
      </h2>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3 py-8">
        <div className="md:col-span-2 mx-20">
          <h2 className="font-bold text-3xl">Billing Details</h2>
          <div className="grid grid-cols-2 gap-10 mt-3">
            <Input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-3">
            <Input
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              placeholder="Zip code"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <Input
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        {/* information */}
        <div className="mx-10 border">
          <h2 className="p-3 bg-gray-200 text-center font-bold">
            Total Cart ({totalCartItem})
          </h2>
          <div className="p-4 flex flex-col gap-4">
            <h2 className="flex justify-between font-bold">
              Subtotal : <span>৳{subTotal.toFixed(2)}</span>
            </h2>
            <hr />
            <h2 className="flex justify-between ">
              Delivery : <span>৳{deliveryCharge.toFixed(2)}</span>
            </h2>
            <h2 className="flex justify-between ">
              Tax (9%) : <span>৳{(subTotal * 0.09).toFixed(2)}</span>
            </h2>
            <hr />
            <h2 className="flex justify-between font-bold">
              Total :
              <span>
                ৳{(subTotal + subTotal * 0.09 + deliveryCharge).toFixed(2)}
              </span>
            </h2>
            <Button
              disabled={
                name && email && phone && address && zipCode ? false : true
              }
              onClick={() => onCheckout()}>
              Payment
              <ArrowBigRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
