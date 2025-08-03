import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import Flex from "./Flex";

const ShopProductSortBy = () => {
  const [isExpand, setExpand] = useState(false);
  return (
    <>
      <div className="">
        <div className={"flex  "}>
          <h5 className="text-base mr-10 text-menuColor">Sort By: </h5>
          <Flex className={"gap-x-5"}>
            <h5 className="text-base text-menuColor">Future </h5>
            <IoMdArrowDropup
              onClick={() => setExpand(!isExpand)}
              className={`text-2xl text-menuColor cursor-pointer  ${
                isExpand ? "rotate-180" : ""
              } `}
            />
          </Flex>
        </div>
        {isExpand && (
          <div className="shadow-lg rounded-lg w-[180px]">
            <ul className="mt-3 ">
            <li className="text-base text-menuColor py-3 text-center ">Catagory 1</li>
            <li className="text-base text-menuColor py-3 text-center ">Catagory 2</li>
            <li className="text-base text-menuColor py-3 text-center ">Catagory 3</li>
            <li className="text-base text-menuColor py-3 text-center ">Catagory 4</li>
            <li className="text-base text-menuColor py-3 text-center ">Catagory 5</li>
          </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopProductSortBy;
