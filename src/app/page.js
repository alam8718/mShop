import GlobalApi from "@/_utils/GlobalApi";
import CategoryList from "@/components/CategoryList";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Image from "next/image";

export default async function Home() {
  const getSlidersList = await GlobalApi.getSliders()
  const getCategoryList = await GlobalApi.getCategoryList()
  const allProducts = await GlobalApi.getAllProducts()
  console.log("first", allProducts)
  return (
    <div className="p-5 md:p-10 px-12">
      {/* slider */}
      <Slider getSlidersList={getSlidersList} />
      {/* category lists */}
      <CategoryList categoryList={getCategoryList} />
      {/* product list */}
      <ProductList allProducts={allProducts} />
      {/* banner */}
      <Image src="/banner.png" alt="banner" width={1000} height={300} className="w-full  xl:h-[600px] object-contain xl:object-cover my-10" />
      {/* footer part */}
      <Footer />

    </div>
  );
}
