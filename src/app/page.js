import GlobalApi from "@/_utils/GlobalApi";
import CategoryList from "@/components/CategoryList";
import Slider from "@/components/Slider";

export default async function Home() {
  const getSlidersList = await GlobalApi.getSliders()
  const getCategoryList = await GlobalApi.getCategoryList()
  return (
    <div className="p-5 md:p-10 px-16">
      {/* slider */}
      <Slider getSlidersList={getSlidersList} />
      {/* category lists */}
      <CategoryList categoryList={getCategoryList} />
    </div>
  );
}
