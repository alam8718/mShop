import GlobalApi from "@/_utils/GlobalApi";
import React from "react";
import TopCategoryList from "./_components/TopCategoryList";
import ProductList from "@/components/ProductList";
import CategoryAllProducts from "./_components/CategoryAllProducts";

async function page({params}) {
  let decodedString = decodeURIComponent(params.categoryName);
  decodedString = decodedString.replace(/&/g, "&");

  const productList = await GlobalApi.getProductsByCategory(decodedString);
  const getCategoryList = await GlobalApi.getCategoryList();

  return (
    <div>
      <h2 className="p-4 text-3xl text-white bg-primary font-bold text-center">
        {decodedString.toUpperCase()}
      </h2>
      <div className="px-5 xl:px-10 my-5 ">
        <TopCategoryList categoryList={getCategoryList} />
      </div>
      <div className="p-5 md:p-10">
        <CategoryAllProducts allProducts={productList} />
      </div>
    </div>
  );
}

export default page;
