import "./App.css";
import BamboProduct from "./Components/BamboProduct";
import FeaturedProduct from "./Components/FeaturedProduct";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SliderComp from "./Components/Slider";
import DataProvider from "./Context/DataProvider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <SliderComp />
        <FeaturedProduct />
        <BamboProduct />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
