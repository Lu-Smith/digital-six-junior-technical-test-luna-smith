import TopBannerSection from "./components/TopBannerSection/TopBannerSection";
import ProductsList from "./components/ProductList/ProductList";
import classes from "./home.sass";
import SupportBannerSection from "./components/SupportBannerSection/SupportBannerSection";

export default function Home({ productData }) {
  console.log("Product Data", productData);
  return (
    <>
      <TopBannerSection />
      <SupportBannerSection />
      <ProductsList products={productData}/>
    </>
  );
}
