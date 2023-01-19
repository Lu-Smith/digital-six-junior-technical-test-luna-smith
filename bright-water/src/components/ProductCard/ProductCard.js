
import ViewProductButton from "../ViewProductButton/ViewProductButton";
import classes from "./productCard.sass";

export default function ProductCard({ product }) {

  //Example of a product card: https://dribbble.com/shots/15208151-Furniture-shop-Product-card-design
  return (
    <div className="ProductCard">
      <div>
          <img src={product.image.url} alt={product.name} />
          <div>
              <h3>{product.name}</h3>
              <h4>${product.price.formatted}</h4>
              <ViewProductButton productPermaLink={product.permalink} />
          </div>
      </div>
    </div>
  );
}
