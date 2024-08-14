"use client";
import {
  CircleUserRound,
  LayoutGrid,
  Search,
  ShoppingBasket,
} from "lucide-react";
import React, {useEffect, useState} from "react";
import {Button} from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import GlobalApi from "@/_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useGlobalContext} from "./_context/GlobalContext";
import ShowCartItems from "./ShowCartItems";
import {toast} from "sonner";

function Header() {
  const router = useRouter();
  const [categoryList, setCategoryLiist] = useState([]);
  const [totalCartItem, setTotalCartItem] = useState(0);
  const jwt = sessionStorage.getItem("jwt");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const {updateCart} = useGlobalContext();
  const [cartItemList, setCartItemList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    if (jwt) {
      totalCartItems();
    }
  }, [updateCart]);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryLiist(res.data.data);
    });
  };

  const handleSignOut = () => {
    sessionStorage.clear();
    router.push("/sign-in");
  };

  const totalCartItems = async () => {
    const cartItems = await GlobalApi.getCartItems(user?.id, jwt);
    setTotalCartItem(cartItems?.length);
    setCartItemList(cartItems);
  };

  const handleDeleteItem = (id) => {
    GlobalApi.deleteCartIItem(id, jwt).then((res) => {
      toast("Item removed Successfully");
      totalCartItems();
    });
  };

  const subTotal = cartItemList.reduce((acc, cur) => acc + cur?.amount, 0);

  return (
    <div className="p-3 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        {/* website logo */}
        <Link href={"/"} className="w-full flex justify-center items-center ">
          <Image src="main-logo.svg" width={30} height={30} alt="icon" />
          <p className="text-lg tracking-wider">mStore</p>
        </Link>

        {/* category part */}
        <div className="hidden md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
                <LayoutGrid className="h-5 w-5" />
                Category
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categoryList.map((cat, index) => (
                <Link
                  key={index}
                  href={`/products-category/${cat?.attributes?.name}`}>
                  <DropdownMenuItem
                    key={index}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-300">
                    <Image
                      src={`${cat?.attributes?.icon}`}
                      width={23}
                      height={23}
                      alt="icon"
                      unoptimized={true}
                    />
                    <h2>{cat?.attributes?.name}</h2>
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* search bar */}
        <div className="hidden md:flex items-center gap-3 border rounded-full p-2 px-5">
          <Search />
          <input type="text" className="outline-none" placeholder="Search" />
        </div>
      </div>
      {/*  */}
      <div className="flex gap-5 items-center">
        <div className="cursor-pointer">
          <Sheet>
            <SheetTrigger asChild>
              <h2 className="flex gap-2 items-center text-lg">
                <ShoppingBasket />
                <span className="bg-primary px-2.5 text-white rounded-full">
                  {totalCartItem}
                </span>
              </h2>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="my-5 p-2 text-white bg-primary font-bold rounded-lg">
                  My Cart
                </SheetTitle>
                <SheetDescription>
                  <ShowCartItems
                    cartItemList={cartItemList}
                    handleDeleteItem={handleDeleteItem}
                  />
                </SheetDescription>
              </SheetHeader>
              <SheetClose asChild>
                <div className="absolute bottom-6 flex flex-col w-[90%]">
                  <h2 className="text-lg font-bold flex justify-between">
                    Subtotal <span>৳{subTotal.toFixed(2)}</span>
                  </h2>
                  <Button
                    onClick={() => router.push(jwt ? "/checkout" : "/sign-in")}>
                    Checkout
                  </Button>
                </div>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
        {!jwt ? (
          <Button
            onClick={() => {
              router.push("/sign-in");
            }}>
            Login
          </Button>
        ) : (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <CircleUserRound className="w-10 cursor-pointer h-10 p-2 rounded-full bg-green-200 text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <Link href={"/my-order"}>
                  <DropdownMenuItem>My Orders</DropdownMenuItem>
                </Link>
                <DropdownMenuItem
                  onClick={() => {
                    handleSignOut();
                  }}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
