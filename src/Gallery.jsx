import React from "react";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Gallery = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const Image = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

  const image = Image.map((item) => {
    return <img className="displayed-image" src={item} alt="" />;
  });

  const prevImg = () => {
    imageIndex === 0
      ? setImageIndex(Image.length - 1)
      : setImageIndex(imageIndex - 1);
  };

  const nextImg = () => {
    imageIndex === Image.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };
  return (
    <div className="image-container">
      {image[imageIndex]}
      <button onClick={prevImg} className="prevBtn">
        <AiFillCaretLeft style={{ color: "white" }} />
      </button>
      <button onClick={nextImg} className="nextBtn">
        <AiFillCaretRight style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default Gallery;
