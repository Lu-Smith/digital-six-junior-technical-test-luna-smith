
import ViewProductButton from "../ViewProductButton/ViewProductButton";
import classes from "./productCard.sass";

export default function ProductCard({ product }) {
  console.log(product.permalink)

  //Example of a product card: https://dribbble.com/shots/15208151-Furniture-shop-Product-card-design
  return (
    <div className="ProductCard">
      <img src={product.image.url} alt={product.name} />
      <div>
          <h4>{product.name}</h4>
          <h3>${product.price.formatted}</h3>
          <ViewProductButton productPermaLink={product.permalink} />
      </div>
    </div>
  );
}
