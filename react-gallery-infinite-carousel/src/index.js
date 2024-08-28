import React, { useState, useEffect } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FaRegDotCircle, FaDotCircle } from "react-icons/fa";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import "./Gallery.css";

const Gallery = ({
  images,
  thumbnailsOrDot,
  autoplayInterval,
  isAutoplay,
  thumbnailCount,
  showAutoplayButton,
  showPrevNextButton,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [thumbnailsToShow, setThumbnailsToShow] = useState([]);
  const [isAutoplayOn, setIsAutoplayOn] = useState(isAutoplay);

  const toggleAutoplay = () => {
    setIsAutoplayOn((prev) => !prev);
  };

  const prevImg = () => {
    imageIndex === 0
      ? setImageIndex(images.length - 1)
      : setImageIndex(imageIndex - 1);
  };

  const nextImg = () => {
    imageIndex === images.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };

  const updateThumbnails = () => {
    const halfCount = Math.floor(thumbnailCount / 2);

    let thumbnails = [];
    for (let i = -halfCount; i <= halfCount; i++) {
      let index = imageIndex + i;
      if (index < 0) index += images.length;
      if (index >= images.length) index -= images.length;
      thumbnails.push({ index, src: images[index] });
    }
    setThumbnailsToShow(thumbnails);
  };

  useEffect(() => {
    updateThumbnails();
  }, [imageIndex, images]);

  useEffect(() => {
    let intervalId = null;
    if (isAutoplayOn) {
      intervalId = setInterval(nextImg, autoplayInterval);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoplayOn, autoplayInterval, nextImg]);

  return (
    <div className="image-container">
      <div className="image-slider">
        {images.map((item, index) => (
          <img
            key={index}
            className="displayed-image"
            style={{ translate: `${-100 * imageIndex}%` }}
            src={item}
            alt=""
          />
        ))}
      </div>
      {showPrevNextButton && (
        <>
          <button onClick={prevImg} className="prev-btn">
            <AiFillCaretLeft style={{ color: "white" }} />
          </button>
          <button onClick={nextImg} className="next-btn">
            <AiFillCaretRight style={{ color: "white" }} />
          </button>{" "}
        </>
      )}
      {showAutoplayButton && (
        <button onClick={toggleAutoplay} className="autoplayBtn">
          {isAutoplayOn ? (
            <BsPauseFill style={{ color: "white" }} />
          ) : (
            <BsPlayFill style={{ color: "white" }} />
          )}
        </button>
      )}
      <div
        className={thumbnailsOrDot ? "thumbnail-wrapper" : "circle-btn-wrapper"}
      >
        {thumbnailsOrDot
          ? thumbnailsToShow.map(({ index, src }) => (
              <div
                key={index}
                className="thumbnail-container"
                onClick={() => setImageIndex(index)}
              >
                <img
                  className={
                    index === imageIndex ? "thumbnail-active" : "thumbnail"
                  }
                  src={src}
                  alt=""
                />
              </div>
            ))
          : images.map((_, index) => (
              <button
                key={index}
                className="circle-btn"
                onClick={() => setImageIndex(index)}
              >
                {index === imageIndex ? (
                  <FaDotCircle className="circle-active" />
                ) : (
                  <FaRegDotCircle />
                )}
              </button>
            ))}
      </div>
    </div>
  );
};

export default Gallery;
