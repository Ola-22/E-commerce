// import './App.css';
import FeaturedProduct from "./Components/FeaturedProduct";
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
      </div>
    </DataProvider>
  );
}

export default App;
