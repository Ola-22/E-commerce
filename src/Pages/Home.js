import BamboProduct from "../Components/BamboProduct";
import FeaturedProduct from "../Components/FeaturedProduct";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SliderComp from "../Components/Slider";

function Home() {
  return (
    <div>
      <Header />
      <SliderComp />
      <FeaturedProduct />
      <BamboProduct />
      <Footer />
    </div>
  );
}

export default Home;
