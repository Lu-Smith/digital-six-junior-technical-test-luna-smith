import React, { useState } from "react";
import { content } from "../../lib/trendingContent";
import classes from "./trendingProductCard.sass";

export default function TrendingProductCard() {

  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide(prevActiveSlide => (prevActiveSlide + 1) % content.length);
  }
  const handlePrev = () => {
    setActiveSlide(prevActiveSlide => (prevActiveSlide - 1 + content.length) % content.length);
  }

  //Example of a product card: https://dribbble.com/shots/15208151-Furniture-shop-Product-card-design
  return (
    <div className="TrendingProductCard">
      <button onClick={handlePrev} className="prevButton">
        <span class="material-symbols-outlined">
      arrow_back_ios
        </span>
      </button>
      {content.map((trendImage, index) => {
        return (
          <div key={index} style={{ display: (activeSlide === index) ? 'block' : 'none' && (activeSlide === index - 3) ? 'block' : 'none' && (activeSlide === index - 2) ? 'block' : 'none' && (activeSlide === index - 1) ? 'block' : 'none'}}>
              <img src={trendImage.src} alt={trendImage.alt} />
              <h3>{trendImage.alt}</h3>
          </div>)
      })}
      <button onClick={handleNext} className="nextButton">
        <span class="material-symbols-outlined">
          arrow_forward_ios
        </span>
      </button>
    </div>
  );
}