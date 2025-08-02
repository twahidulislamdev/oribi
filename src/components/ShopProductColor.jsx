import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
const ShopProductColor = () => {
  const [expand, setExpand] = useState(true);
  return (
    <>
      <div className="mt-10">
        <div className={"flex justify-between items-center "}>
          <h5 className="text-xl font-bold">Shop by Color</h5>
          <IoMdArrowDropup
            onClick={() => setExpand(!expand)}
            className={`text-2xl text-mainColor cursor-pointer mr-10 ${
              expand ? "rotate-180" : ""
            } `}
          />
        </div>
        {expand && (
          <div className="">
            <div className="flex gap-x-5 py-5 border-b-2 border-gray-100 mr-10">
              <div className="w-5 h-5 rounded-[50%] bg-black"></div>
              <p className="text-base text-menuColor">Color 1</p>
            </div>
            <div className="flex gap-x-5 py-5 border-b-2 border-gray-100 mr-10">
              <div className="w-5 h-5 rounded-[50%] bg-[#FF8686]"></div>
              <p className="text-base text-menuColor">Color 1</p>
            </div>
            <div className="flex gap-x-5 py-5 border-b-2 border-gray-100 mr-10">
              <div className="w-5 h-5 rounded-[50%] bg-red-500"></div>
              <p className="text-base text-menuColor">Color 1</p>
            </div>
            <div className="flex gap-x-5 py-5 border-b-2 border-gray-100 mr-10">
              <div className="w-5 h-5 rounded-[50%] bg-blue-500"></div>
              <p className="text-base text-menuColor">Color 1</p>
            </div>
            <div className="flex gap-x-5 py-5 border-b-2 border-gray-100 mr-10">
              <div className="w-5 h-5 rounded-[50%] bg-green-500"></div>
              <p className="text-base text-menuColor">Color 1</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopProductColor;
