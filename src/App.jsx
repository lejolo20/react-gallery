import "./App.css";
import Gallery from "./Gallery";
import img1 from "/01.webp";
import img2 from "/02.webp";
import img3 from "/03.webp";
import img4 from "/04.webp";
import img5 from "/05.webp";

function App() {
  const images = [img1, img2, img3, img4, img5, img3, img2, img1, img4, img5];
  return (
    <>
      <Gallery
        images={images}
        thumbnailsOrDot={true}
        autoplayInterval={2000}
        isAutoplay={false}
        thumbnailCount={5}
        showAutoplayButton={true}
        showPrevNextButton={true}
      />
    </>
  );
}

export default App;
