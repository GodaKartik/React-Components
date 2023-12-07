import React, { useState, useEffect, useRef } from "react";
import "../styles/ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const div_ref = useRef(null);
  const [index, setIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((value) => (value === images.length - 1 ? 0 : value + 1));
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {}, [index]);

  return (
    <div>
      <div
        ref={div_ref}
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
          return <img src={position === index ? "checked.svg" : "unchecked.svg"} alt="navigation dots for carousel" />;
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
