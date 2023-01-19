import { useParams } from "react-router-dom";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";
import classes from "./productPage.sass";

export default function ProductPage() {
  const [product, setProduct] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  //Pull permalink from url
  const { id } = useParams();
  const productPermaLink = id.toString();

  //Fetching product by permalink
  const fetchProduct = () => {
    commerce.products
      .retrieve(productPermaLink, { type: "permalink" })
      .then((product) => {
        setProduct(product);
        setImage(product.image.url);
        setPrice(product.price.formatted);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  //Here are the product details.
  console.log("Product Details", product);

  useEffect(() => { 
    fetchProduct();
  }, []);


  return (
    <div className="ProductPage">
      <h1>Product Page - {product.name}</h1>
      <div>
          <img src={image} alt={product.name} />
          <h2>{product.description}</h2>
          <h3>${price}</h3>
      </div>
      <button>Add to basket</button>
   
    </div>
  );
}
