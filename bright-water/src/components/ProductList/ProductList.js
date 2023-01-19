import ProductCard from "../ProductCard/ProductCard";
import TrendingProductCard from "../TrendingProductCard/TrendingProductCard";
import classes from "./productList.sass";

//Example of a product list: https://www.edinburghgin.com/shop/london-dry
export default function ProductList({ products }) {
  return (
    <div className="ProductList">
      <h2>Trending now</h2>
      <TrendingProductCard />
       {products.map((product, index) => {
            return <ProductCard  product={product} key={index}/>
        })}
    </div>
  );
}
