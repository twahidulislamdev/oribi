import React from 'react'
import Image from '../Image'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Link to={"/shop"}>
    <div className='mt-5 bg-[url(/src/assets/bannerImg.png)] h-[550px] bg-no-repeat bg-center bg-cover '  >
        {/* <Image className={""} imgSrc={BannerImg} imgAlt={"Banner Image"} /> */}
    </div>
    </Link>
  )
}

export default Banner