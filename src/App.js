import "./App.css";
import Accordian from "./components/accordian";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/randomColorChnager";
import StarRating from "./components/starRating";
import ImageSlider from "./ImageSlider";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}
      {/* RandomColorChanger componenet */}
      {/* <RandomColor /> */}
      {/* star rating component */}
      {/* <StarRating noOfStars={10}/> */}
      {/* imageSlider component*/}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* load-more-data component */}
      <LoadMoreData />
      
    </div>
  );
}

export default App;
