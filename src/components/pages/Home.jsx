import Ad from "../layout/Ad";
import AnotherAd from "../layout/AnotherAd";
import Banner from "../layout/Banner";
import BasicInfo from "../layout/BasicInfo";
import ProductPart from "../layout/ProductPart";

const Home = () => {
  return (
    <>
      <Banner />
      <BasicInfo />
      <Ad />
      <ProductPart/>
      <AnotherAd />
    </>
  );
};

export default Home;
