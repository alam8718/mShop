import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList({categoryList}) {
  return (
    <div className="mt-5">
      <h2 className="text-green-600 mb-3 font-bold text-2xl ">
        Shop By Category
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-5 ">
        {categoryList.map((cat, index) => (
          <Link
            href={`/products-category/${cat?.attributes?.name}`}
            key={index}
            className="w-[110px] h-[130px] sm:w-full  flex flex-col justify-center items-center bg-green-50 gap-2 rounded-lg p-3 cursor-pointer group hover:bg-green-200">
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
    </div>
  );
}

export default CategoryList;
