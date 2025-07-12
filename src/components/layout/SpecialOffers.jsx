import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import AriveNine from "../../assets/ariveNine.png";
import AriveTen from "../../assets/ariveTen.png";
import AriveEleven from "../../assets/ariveEleven.png";
import AriveTwelve from "../../assets/ariveTwelve.png";
import AriveOne from "../../assets/ariveOne.png";
import Badge from "../Badge";
import Heading from "../Heading";
import Product from "../Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrow from "../PrevArrow";
import NextArrow from "../NextArrow";

const SpecialOffers = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className=" mt-15">
        <Container>
          <Heading
            className={"text-[35px] font-bold"}
            txt={"Special Offers"}
            as={"h3"}
          />
          <Slider className="mt-10" {...settings}>
            <div className="">
              <Product
                className={""}
                imgSrc={AriveNine}
                title={"Basic Crew Neck Tee"}
                h5Txt={"$44.00"}
                h6Txt={"Black"}
              />
            </div>
            <div>
              <Product
                className={""}
                imgSrc={AriveTen}
                title={"Basic Crew Neck Tee"}
                h5Txt={"$44.00"}
                h6Txt={"Black"}
              />
            </div>
            <div>
              <Product
                className={""}
                imgSrc={AriveEleven}
                title={"Basic Crew Neck Tee"}
                h5Txt={"$44.00"}
                h6Txt={"Black"}
              />
            </div>
            <div className="">
              <Product
                className={""}
                imgSrc={AriveTwelve}
                title={"Basic Crew Neck Tee"}
                h5Txt={"$44.00"}
                h6Txt={"Black"}
              />
            </div>
            <div className="">
              <Product
                className={""}
                imgSrc={AriveOne}
                title={"Basic Crew Neck Tee"}
                h5Txt={"$44.00"}
                h6Txt={"Black"}
              />
            </div>
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default SpecialOffers;
