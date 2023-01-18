
import ViewProductButton from "../ViewProductButton/ViewProductButton";
import classes from "./productCard.sass";

export default function ProductCard({ product }) {
  console.log(product.price)

  //Example of a product card: https://dribbble.com/shots/15208151-Furniture-shop-Product-card-design
  return (
    <>
      <h4>{product.name}</h4>
      <img src={product.image.url} alt={product.name} />
      <h3>${product.price.formatted} </h3>
      
      
    
      
      
      <ViewProductButton price={product.price.formatted} checkoutImage={product.checkout_url}/>
    </>
  );
}
