import React, { useState } from "react";
import "../styles/ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div
        className="carousel"
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      >
        <img
          src="left.svg"
          alt="left button"
          height="10%"
          className="carousel-buttons"
          onClick={() => {
            setIndex((prev_count) => (index === 0 ? images.length - 1 : prev_count - 1));
          }}
          style={{ float: "left" }}
        />
        <img
          src="right.svg"
          alt="right button"
          height="10%"
          className="carousel-buttons"
          onClick={() => {
            setIndex((prev_count) => (index === images.length - 1 ? 0 : prev_count + 1));
          }}
          style={{ float: "right", right: "0" }}
        />
      </div>
      <div className="nav-dots">
        {images.map((_, position) => {
          return <img src={position === index ? "checked.svg" : "unchecked.svg"} alt="" />;
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
