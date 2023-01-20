import { useParams, Link } from "react-router-dom";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";
import classes from "./productPage.sass";

export default function ProductPage() {
  const [product, setProduct] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

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
        setDescription(product.description.replace(/<[^>]+>/g, ""));
   
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
      <h1>{product.name}</h1>
      <div className="productContainer">
          <img src={image} alt={product.name} />
          <div>
              <h2>{product.name}</h2>
              <h4>${price}</h4>
              <h3>{description}</h3>
              <button>
                 <Link to={`/basket/`} >Add to basket</Link>
                 <p className="bubble1"></p>
                 <p className="bubble2"></p>
                 <p className="bubble3"></p>
                 <p className="bubble4"></p>
                 <p className="bubble5"></p>
                 <p className="bubble6"></p>
              </button>
              
          </div>
      </div>
    </div>
  );
}
