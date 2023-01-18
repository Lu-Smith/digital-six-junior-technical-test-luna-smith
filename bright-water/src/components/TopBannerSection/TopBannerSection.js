import classes from "./topBannerSection.sass";
import Banner from '../../lib/BrightWaterBanner1.jpg';

export default function TopBannerSection({ topBannerImage }) {
  console.log(topBannerImage)
  return (
    <div className="TopBannerSection">
        <img src={Banner} alt="banner for Broght Water" />
        <h1>REUSE RESET REFRESH</h1>
    </div>
  );
}
