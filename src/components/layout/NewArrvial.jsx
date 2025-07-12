import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import AriveOne from "../../assets/ariveOne.png";

const NewArrvial = () => {
  return (
    <>
      <div className="mt-10">
        <Container>
          <div className=""></div>
          <div className="">
            <Flex className={"justify-between"}>
              <Product
                className={""}
                imgSrc={AriveOne}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={AriveOne}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={AriveOne}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={AriveOne}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrvial;
