import { content } from "../../lib/trendingContent";
import classes from "./trendingProductCard.sass";

export default function trendingProductCard({ product }) {

  //Example of a product card: https://dribbble.com/shots/15208151-Furniture-shop-Product-card-design
  return (
    <div className="TrendingProductCard">
      {content.map((trendImage, index) => {
        return (
          <div key={index}>
              <img src={trendImage.src} alt={trendImage.alt} />
              <h3>{trendImage.alt}</h3>
          </div>)
      })}
    </div>
  );
}