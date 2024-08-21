import React from "react";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FaRegDotCircle, FaDotCircle } from "react-icons/fa";

const Gallery = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const Image = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

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
    <>
      <div className="image-container">
        <div className="image-slider">
          {Image.map((item, index) => {
            return (
              <img
                key={index}
                className="displayed-image"
                style={{ translate: `${-100 * imageIndex}%` }}
                src={item}
                alt=""
              />
            );
          })}
        </div>
        <button onClick={prevImg} className="prevBtn">
          <AiFillCaretLeft style={{ color: "white" }} />
        </button>
        <button onClick={nextImg} className="nextBtn">
          <AiFillCaretRight style={{ color: "white" }} />
        </button>
        <div className="indexBtn-container">
          {Image.map((item, index) => {
            return (
              <button
                key={index}
                className="indexBtn"
                onClick={() => setImageIndex(index)}
              >
                {index === imageIndex ? (
                  <FaDotCircle className="circle1" />
                ) : (
                  <FaRegDotCircle className="circle2" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
