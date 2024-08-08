import GlobalApi from "@/_utils/GlobalApi";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

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
    </div>
  );
}
