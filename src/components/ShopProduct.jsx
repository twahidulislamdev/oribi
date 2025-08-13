import Badge from "./Badge";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const ShopProduct = ({
  imgSrc,
  imgAlt,
  text,
  title,
  price,
  productColor,
  category,
  brand,
}) => {
  return (
    <>
      <div className="w-[32%]  relative group border-2 border-gray-200">
        <img src={imgSrc} alt={imgAlt} />
        <Badge className={"absolute top-2 left-2"} badgeText={text} />
        <div className="bg-white p-7.5 space-y-3 absolute bottom-22 left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
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
        <div className="pb-3 px-2 py-5 ">
          <Flex className={"justify-between"}>
            <h3 className="text-[#262626] text-base font-bold mt-5">{title}</h3>
            <h4 className="text-[#767676] text-base font-bold mt-5">{price}</h4>
          </Flex>
          <p className="text-[#767676] text-base font-bold pt-2">
            {productColor}
          </p>
          <Flex className={"justify-between items-center"}>
          <h6 className="text-[#767676] text-base  pt-2 uppercase">
            {brand}
          </h6>
            <h5 className="text-[#767676] text-base pt-2 uppercase">
            {category}
          </h5>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default ShopProduct;
