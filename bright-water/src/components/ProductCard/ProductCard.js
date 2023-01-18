import React, { useEffect, useState} from 'react';
import ViewProductButton from "../ViewProductButton/ViewProductButton";
import classes from "./productCard.sass";

export default function ProductCard({ product }) {
  console.log(product);
  const [description, setDescription] = useState(product.description);

  useEffect(() => {
    const regex = /<p>/gi;
    const newString = description.replace(regex, " ");
    setDescription(newString);
  }, []);
 
  //Example of a product card: https://dribbble.com/shots/15208151-Furniture-shop-Product-card-design
  return (
    <>
      <h4>{product.name}</h4>
      <img src={product.image.url} alt={product.name} />
      
      {description}
      
      
      <ViewProductButton price={product.price} checkoutImage={product.checkout_url}/>
    </>
  );
}
