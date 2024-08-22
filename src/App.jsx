import { useState } from "react";
import "./App.css";
import Gallery from "./Gallery";
import img1 from "/01.webp";
import img2 from "/02.webp";
import img3 from "/03.webp";
import img4 from "/04.webp";
import img5 from "/05.webp";

function App() {
  const images = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];
  return (
    <>
      <Gallery image={images} thumbnailsOrDot={true} />
    </>
  );
}

export default App;
