import Badge from "./Badge";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";

const Product = ({ imgSrc, imgAlt, text, title, price, productColor }) => {
  return (
    <>
      <div className="w-[23%] relative group border-2 border-gray-200">
        <img src={imgSrc} alt={imgAlt} />
        <Badge className={"absolute top-5 left-5"} badgeText={text} />
        <div className="bg-white p-7.5 space-y-3 absolute bottom-22 left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
          <Flex className={"justify-end gap-x-2"}>
            <p className="text-sm">Add to Wish List</p>
            <FaHeart />
          </Flex>
          <Flex className={"justify-end gap-x-2"}>
            <p className="text-sm">Compare</p>
          </Flex>
          <Flex className={"justify-end gap-x-2"}>
            <p className="text-sm">Add to Cart</p>
          </Flex>
        </div>
        <div className="pb-3 px-2 mt-5 ">
          <Flex className={"justify-between"}>
            <h3 className="text-[#262626] text-base font-bold">{title}</h3>
            <h4 className="text-[#767676] text-base font-bold">{price}</h4>
          </Flex>
          <p className="text-[#767676] text-base font-bold pt-2">
            {productColor}
          </p>
        </div>
      </div>
    </>
  );
};
export default Product;
