import ProductCard from "../ProductCard/ProductCard";
import classes from "./productList.sass";

//Example of a product list: https://www.edinburghgin.com/shop/london-dry
export default function ProductList({ products }) {
  return (
    <>
      <h2>Product List Component</h2>
      <ProductCard />
    </>
  );
}
