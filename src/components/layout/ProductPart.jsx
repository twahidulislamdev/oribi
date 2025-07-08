import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from '../Image';
import AriveOne from '../../assets/ariveOne.png';
import AriveTwo from '../../assets/ariveTwo.png';
import AriveThree from '../../assets/ariveThree.png';
import AriveFour from '../../assets/ariveFour.png';
import AriveFive from '../../assets/ariveFive.png';
import AriveSix from '../../assets/ariveSix.png'
import AriveSeven from '../../assets/ariveSeven.png';
import AriveEight from '../../assets/ariveEight.png';
import Badge from "../Badge";
import Heading from '../Heading';
import Product from "../Product";

const ProductPart = () => {
  return (
    <div className="mt-15">
      <Container>
        <Heading
          className={"text-[40px] font-bold"}
          txt={"New Arives"}
          as={"h3"}
        />
        <Flex className={"mt-10 justify-between flex-wrap gap-y-15"}>
          <Product
            className={""}
            imgSrc={AriveOne}
            pTxt={"Basic Crew Neck Tee"}
            h5Txt={"$44.00"}
            h6Txt={"Black"}
          />
          <Product
            className={""}
            imgSrc={AriveTwo}
            pTxt={"Basic Crew Neck Tee"}
            h5Txt={"$44.00"}
            h6Txt={"Black"}
          />
          <Product
            className={""}
            imgSrc={AriveThree}
            pTxt={"Basic Crew Neck Tee"}
            h5Txt={"$44.00"}
            h6Txt={"Black"}
          />
          <Product
            className={""}
            imgSrc={AriveFour}
            pTxt={"Basic Crew Neck Tee"}
            h5Txt={"$44.00"}
            h6Txt={"Black"}
          />
          <Product
            className={""}
            imgSrc={AriveFive}
            pTxt={"Basic Crew Neck Tee"}
            h5Txt={"$44.00"}
            h6Txt={"Black"}
          />
          <Product
            className={""}
            imgSrc={AriveSix}
            pTxt={"Basic Crew Neck Tee"}
            h5Txt={"$44.00"}
            h6Txt={"Black"}
          />
          <Product
            className={""}
            imgSrc={AriveSeven}
            pTxt={"Basic Crew Neck Tee"}
            h5Txt={"$44.00"}
            h6Txt={"Black"}
          />
          <Product
            className={""}
            imgSrc={AriveEight}
            pTxt={"Basic Crew Neck Tee"}
            h5Txt={"$44.00"}
            h6Txt={"Black"}
          />
        </Flex>
      </Container>
    </div>
  )
}

export default ProductPart