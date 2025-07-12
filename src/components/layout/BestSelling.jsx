import Container from "../Container";
import Flex from "../Flex";
import Image from '../Image';
import AriveFive from '../../assets/ariveFive.png';
import AriveSix from '../../assets/ariveSix.png'
import AriveSeven from '../../assets/ariveSeven.png';
import AriveEight from '../../assets/ariveEight.png';
import AriveTwelve from '../../assets/ariveTwelve.png';
import Badge from "../Badge";
import Heading from '../Heading';
import Product from "../Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BestSelling = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 2000,   
    arrows: false, 
    nextArrow: 'ttttttt',
    prevArrow: 'ttettet',
  };
  return (
    <>
      <div className=" mt-15">
        <Container>
          <Heading
            className={"text-[35px] font-bold"}
            txt={"New Arives"}
            as={"h3"}
          />
            <Slider className="mt-10" {...settings}>
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
                  imgSrc={AriveFive}
                  title={"Basic Crew Neck Tee"}
                  h5Txt={"$44.00"}
                  h6Txt={"Black"}
                />
              </div>
              <div>
                <Product
                  className={""}
                  imgSrc={AriveSix}
                  title={"Basic Crew Neck Tee"}
                  h5Txt={"$44.00"}
                  h6Txt={"Black"}
                />
              </div>
              <div>
                <Product
                  className={""}
                  imgSrc={AriveSeven}
                  title={"Basic Crew Neck Tee"}
                  h5Txt={"$44.00"}
                  h6Txt={"Black"}
                />
              </div>
              <div className="">
                <Product
                  className={""}
                  imgSrc={AriveEight}
                  title={"Basic Crew Neck Tee"}
                  h5Txt={"$44.00"}
                  h6Txt={"Black"}
                />
              </div>
            </Slider>
        </Container>
      </div>
    </>
  )
}

export default BestSelling