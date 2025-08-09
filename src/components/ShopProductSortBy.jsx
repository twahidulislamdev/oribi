import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import Flex from "./Flex";

const ShopProductSortBy = () => {
  const [isExpand, setExpand] = useState(false);
  const handleItemClick = (item) => {
    console.log(`Clicked: ${item}`);
    setExpand(false);
  };
  return (
    <>
      <div className="">
        <div className={"flex"}>
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
          <div className=" shadow-lg rounded-lg w-[180px]">
            <button
              onClick={() => handleItemClick("Profile")}
              className="flex items-center w-full px-4 text-base text-menuColor py-3 text-center hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
            >
              Catagory 1
            </button>
            <button
              onClick={() => handleItemClick("Profile")}
              className="flex items-center w-full px-4 text-base text-menuColor py-3 text-center hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
            >
              Catagory 2
            </button>
            <button
              onClick={() => handleItemClick("Profile")}
              className="flex items-center w-full px-4 text-base text-menuColor py-3 text-center hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
            >
              Catagory 3
            </button>
            <button
              onClick={() => handleItemClick("Profile")}
              className="flex items-center w-full px-4 text-base text-menuColor py-3 text-center hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
            >
              Catagory 4
            </button>
            <button
              onClick={() => handleItemClick("Profile")}
              className="flex items-center w-full px-4 text-base text-menuColor py-3 text-center hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
            >
              Catagory 5
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopProductSortBy;
