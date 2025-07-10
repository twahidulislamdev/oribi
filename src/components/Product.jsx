import React from "react";
import Badge from "./Badge";
import Flex from "./Flex";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const Product = ({ className, title, h5Txt, h6Txt, imgSrc, imgAlt }) => {
  return (
    <>
      <div className={`w-[23%]  shadow-md rounded-lg  ${className}`}>
        <div className="relative group">
          <img src={imgSrc} alt={imgAlt} />
          <Badge className={"absolute top-5 left-5"} txt={"New"} />
          <div className="bg-white p-7.5 space-y-3 absolute bottom-0 left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <Flex className={"justify-end gap-x-2"}>
              <p className="text-sm">Add to Wish List</p>
              <FaHeart />
            </Flex>
            <Flex className={"justify-end gap-x-2"}>
              <p className="text-sm">Compare</p>
              <FaCodeCompare />
            </Flex>
            <Flex className={"justify-end gap-x-2"}>
              <p className="text-sm">Add to Cart</p>
              <FaShoppingCart />
            </Flex>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center mt-5  px-5 ">
            <p className={`text-lg font-blod ${className}`}>{title}</p>
            <h5 className={`text-sm text-[#767676] ${className}`}>{h5Txt}</h5>
          </div>
          <h6 className={`text-sm text-[#767676] px-5 pb-5 pt-3 ${className}`}>
            {h6Txt}
          </h6>
        </div>
      </div>
    </>
  );
};

export default Product;
