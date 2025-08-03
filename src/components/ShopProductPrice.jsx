import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
const ShopProductPrice = () => {
      const [expand, setExpand] = useState(false);
  return (
     <>
      <div className="mt-10">
        <div className={"flex justify-between items-center "}>
          <h5 className="text-xl font-bold">Shop by Price</h5>
          <IoMdArrowDropup
            onClick={() => setExpand(!expand)}
            className={`text-2xl text-mainColor cursor-pointer mr-10 ${
              expand ? "rotate-180" : ""
            } `}
          />
        </div>
        {expand && (
          <ul className="mt-3 mr-10">
            <li className="text-base text-menuColor py-5 border-b-2 border-gray-100">$0.00 - $9.99</li>
            <li className="text-base text-menuColor py-5 border-b-2 border-gray-100">$10.00 - $19.99</li>
            <li className="text-base text-menuColor py-5 border-b-2 border-gray-100">$20.00 - $29.99</li>
            <li className="text-base text-menuColor py-5 border-b-2 border-gray-100">$30.00 - $39.99</li>
            <li className="text-base text-menuColor py-5 border-b-2 border-gray-100">$40.00 - $69.99</li>
          </ul>
        )}
      </div>
    </>
  )
}

export default ShopProductPrice