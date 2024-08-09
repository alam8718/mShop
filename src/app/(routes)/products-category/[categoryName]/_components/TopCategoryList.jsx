import Image from "next/image";
import Link from "next/link";
import React from "react";

function TopCategoryList({categoryList}) {
  return (
    <div className=" flex  gap-5 justify-center flex-wrap">
      {categoryList.map((cat, index) => (
        <Link
          href={`/products-category/${cat?.attributes?.name}`}
          key={index}
          className=" min-w-[110px] sm:w-[150px] h-[140px]  flex flex-col justify-center items-center bg-green-50 gap-2 rounded-lg p-3 cursor-pointer group hover:bg-green-200 ">
          <Image
            className="group-hover:scale-125 transition-all ease-in-out"
            width={50}
            height={50}
            src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${cat?.attributes?.icon?.data[0]?.attributes?.url}`}
            unoptimized={true}
            alt="category icon"
          />
          <h2 className="text-green-600 text-center">
            {cat?.attributes?.name}
          </h2>
        </Link>
      ))}
    </div>
  );
}

export default TopCategoryList;
