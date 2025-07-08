import React from 'react'
import Badge from "./Badge";

const Product = ({ className, pTxt, h5Txt, h6Txt, imgSrc, imgAlt }) => {
  return (
    <div className={`w-[23%] hover:shadow-lg rounded-lg relative ${className}`}>
      <div className="">
        <img src={imgSrc} alt={imgAlt} />
        <Badge className={"absolute top-5 left-5"} txt={"New"} />
      </div>
      <div className="flex justify-between items-center mt-5  px-5 ">
        <p className={`text-lg font-blod ${className}`}>{pTxt}</p>
        <h5 className={`text-sm text-[#767676] ${className}`}>{h5Txt}</h5>
      </div>
      <h6 className={`text-sm text-[#767676] px-5 pb-10 pt-3 ${className}`}>{h6Txt}</h6>
    </div>
  )
}

export default Product