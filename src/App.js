import "./App.css";
import Accordian from "./components/accordian";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/randomColorChnager";
import StarRating from "./components/starRating";
import TreeView from "./components/Tree-view";
import ImageSlider from "./components/ImageSlider";
import menus from "./components/Tree-view/data";
import QRCodeGenerator from "./components/QR-Generator";
import LightDarkMode from "./components/light-dark-mode";


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
      {/* <LoadMoreData /> */}
      {/* Tree View Component */}
      {/* <TreeView menus={menus} /> */}
      {/* QR-Code-Generator component */}
      {/* <QRCodeGenerator/> */}
      {/* Light-Dark-Mode component */}
      <LightDarkMode/>
      
      
    </div>
  );
}

export default App;
