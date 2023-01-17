import TopBannerSection from "./components/TopBannerSection/TopBannerSection";
import ProductsList from "./components/ProductList/ProductList";
import classes from "./home.sass";

export default function Home({ productData }) {
  console.log("Product Data", productData);
  return (
    <>
      <TopBannerSection />
      <ProductsList />
    </>
  );
}
