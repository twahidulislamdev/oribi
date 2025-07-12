import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import AriveOne from "../../assets/ariveOne.png";
import AriveTwo from "../../assets/ariveTwo.png";
import AriveThree from "../../assets/ariveThree.png";
import AriveFour from "../../assets/ariveFour.png";
import AriveNine from "../../assets/ariveNine.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const BestSelling = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="mt-15">
        <Container>
          <div className="pb-10 text-[35px] font-bold">Best Selling</div>
          <div className="relative ">
            <Slider className="" {...settings}>
              <div className="">
                <Product
                  className={""}
                  imgSrc={AriveOne}
                  imgAlt={"Arive One"}
                  text={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  productColor={"Black"}
                />
              </div>
              <div>
                <Product
                  className={""}
                  imgSrc={AriveTwo}
                  imgAlt={"Arive One"}
                  text={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  productColor={"Black"}
                />
              </div>
              <div>
                <Product
                  className={""}
                  imgSrc={AriveThree}
                  imgAlt={"Arive One"}
                  text={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  productColor={"Black"}
                />
              </div>
              <div>
                <Product
                  className={""}
                  imgSrc={AriveFour}
                  imgAlt={"Arive One"}
                  text={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  productColor={"Black"}
                />
              </div>
              <div>
                <Product
                  className={""}
                  imgSrc={AriveNine}
                  imgAlt={"Arive One"}
                  text={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  productColor={"Black"}
                />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BestSelling;
