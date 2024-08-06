"use client";
import {LayoutGrid, Search, ShoppingBag} from "lucide-react";
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
import GlobalApi from "@/_utils/GlobalApi";
import Image from "next/image";

function Header() {
  const [categoryList, setCategoryLiist] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryLiist(res.data.data);
      console.log(res.data.data);
    });
  };

  return (
    <div className="p-3 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        {/* website logo */}
        <div className="w-[100px] h-[60px]">
          <p className="text-[35px] flex items-end italic">
            M <span className="text-[20px] font-mono not-italic">Store</span>
          </p>
        </div>

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
                <DropdownMenuItem key={index}>
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                      cat?.attributes?.icon?.data?.attributes?.url
                    }
                    width={23}
                    height={23}
                    alt="icon"
                    unoptimized={true}
                  />
                  <h2>{cat?.attributes?.name}</h2>
                </DropdownMenuItem>
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
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBag />0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
