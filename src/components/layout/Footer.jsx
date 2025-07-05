import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import HeaderLogo from "../../assets/headerLogo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="py-15 mt-15 bg-[#F5F5F3]">
        <Container>
          <div className="flex justify-between">
            {/* First part start  */}
            <div className="w-[15%]">
              <Heading className={""} txt={"MENU"} as={"h4"} />
              <ul className="mt-5 space-y-2">
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Home
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Shop
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  About
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Contact
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Journal
                </li>
              </ul>
            </div>
            {/* First part End  */}
            {/* Second part start  */}
            <div className="w-[15%]">
              <Heading className={""} txt={"SHOP"} as={"h4"} />
              <ul className="mt-5 space-y-2">
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Category 1
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Category 2
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Category 3
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Category 4
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Category 5
                </li>
              </ul>
            </div>
            {/* Second part End  */}
            {/* Third part start  */}
            <div className="w-[15%]">
              <Heading className={""} txt={"HELP"} as={"h4"} />
              <ul className="mt-5 space-y-2">
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Privacy Policy
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Terms & Conditions
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Special E-shop
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Shipping
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Secure Payments
                </li>
              </ul>
            </div>
            {/* Third part End  */}
            {/* Four part Start  */}
            <div className="w-[25%]">
              <Heading className={""} txt={"(052) 611-5711"} as={"h4"} />
              <ul className="mt-5 space-y-2">
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  company@domain.com
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  575 Crescent Ave. Quakertown, PA 18951
                </li>
              </ul>
            </div>
            {/* Four part End  */}
            {/* Five part Start  */}
            <div className="w-[30%]">
              <Image imgSrc={HeaderLogo} imgAlt={"headerLogo"} />
            </div>
            {/* Five part Start  */}
          </div>
          {/* Copy Right part start  */}
          <div className="mt-15">
            <Flex className={"justify-between"}>
              <div className="flex items-center space-x-5">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
              <p className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                2020 Orebi Minimal eCommerce Figma Template by Adveits
              </p>
            </Flex>
          </div>
          {/* Copy Right part start  */}
        </Container>
      </div>
    </>
  );
};

export default Footer;
