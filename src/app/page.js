import GlobalApi from "@/_utils/GlobalApi";
import Slider from "@/components/Slider";

export default async function Home() {
  const getSlidersList = await GlobalApi.getSliders()
  return (
    <div className="p-5 md:p-10 px-16">
      <Slider getSlidersList={getSlidersList} />
    </div>
  );
}
