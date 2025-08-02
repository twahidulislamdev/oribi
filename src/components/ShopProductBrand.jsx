import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

const ShopProductBrand = () => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="mt-10">
        <div className={"flex justify-between items-center "}>
          <h5 className="text-xl font-bold">Shop by Brand</h5>
          <IoMdArrowDropup
            onClick={() => setExpand(!expand)}
            className={`text-2xl text-mainColor cursor-pointer mr-10 ${
              expand ? "rotate-180" : ""
            } `}
          />
        </div>
        {expand && (
          <ul className="mt-5 mr-10">
            <li className="text-base text-menuColor py-5 border-b-2 border-gray-100">Brand 1</li>
            <li className="text-base text-menuColor py-5 border-b-2 border-gray-100">Brand 2</li>
            <li className="text-base text-menuColor py-5 border-b-2 border-gray-100">Brand 3</li>
            <li className="text-base text-menuColor py-5 border-b-2 border-gray-100">Brand 4</li>
            <li className="text-base text-menuColor py-5 border-b-2 border-gray-100">Brand 5</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ShopProductBrand;
