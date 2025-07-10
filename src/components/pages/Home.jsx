import Ad from "../layout/Ad";
import AnotherAd from "../layout/AnotherAd";
import Banner from "../layout/Banner";
import BasicInfo from "../layout/BasicInfo";
import BestSelling from "../layout/BestSelling";
import NewArrvial from "../layout/NewArrvial";
import SpecialOffers from "../layout/SpecialOffers";

const Home = () => {
  return (
    <>
      <Banner />
      <BasicInfo />
      <Ad />
      <NewArrvial/>
      <BestSelling/>
      <AnotherAd />
      <SpecialOffers/>
    </>
  );
};

export default Home;
