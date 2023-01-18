import ProductCard from "../ProductCard/ProductCard";
import classes from "./productList.sass";

//Example of a product list: https://www.edinburghgin.com/shop/london-dry
export default function ProductList({ products }) {
  return (
    <div className="ProductList">
      <h2>Trending now</h2>
      {products.map((product, index) => {
        return <ProductCard key={index} product={product}/>
      })}
      
    </div>
  );
}
