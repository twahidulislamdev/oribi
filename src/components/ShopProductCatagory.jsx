import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const ShopProductCatagory = () => {
  const [expand, setExpand] = useState(true);
  return (
    <>
      <div className="">
        <div className={"flex justify-between items-center "}>
          <h5 className="text-xl font-bold">Shop by Category</h5>
          <FiPlus
            onClick={() => setExpand(!expand)}
            className={`text-xl text-mainColor cursor-pointer mr-10 ${
            expand ? <FiPlus/> : <FiMinus/>} `}
          />
        </div>
        {expand && (
          <ul className="mt-5 space-y-3">
            <li className="text-base text-menuColor">Catagory 1</li>
            <li className="text-base text-menuColor">Catagory 2</li>
            <li className="text-base text-menuColor">Catagory 3</li>
            <li className="text-base text-menuColor">Catagory 4</li>
            <li className="text-base text-menuColor">Catagory 5</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ShopProductCatagory;
