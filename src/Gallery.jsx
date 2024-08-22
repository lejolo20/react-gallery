import React from "react";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FaRegDotCircle, FaDotCircle } from "react-icons/fa";

const Gallery = ({ image, thumbnailsOrDot }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const prevImg = () => {
    imageIndex === 0
      ? setImageIndex(image.length - 1)
      : setImageIndex(imageIndex - 1);
  };

  const nextImg = () => {
    imageIndex === image.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };
  return (
    <>
      <div className="image-container">
        <div className="image-slider">
          {image.map((item, index) => {
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
        <div
          className={
            thumbnailsOrDot ? "thumbnail-wrapper" : "index-btn-wrapper"
          }
        >
          {image.map((item, index) => {
            return thumbnailsOrDot ? (
              <div
                key={index}
                className="thumbnail-container"
                onClick={() => setImageIndex(index)}
              >
                <img
                  className={
                    index === imageIndex ? "thumbnail-active" : "thumbnail"
                  }
                  src={item}
                  alt=""
                />
              </div>
            ) : (
              <button
                key={index}
                className="index-btn"
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
