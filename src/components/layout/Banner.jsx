import React from 'react'
import Image from '../Image'
import BannerImg from '../../assets/bannerImg.png'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Link to={"/shop"}>
    <div className='mt-5'>
        <Image className={""} imgSrc={BannerImg} imgAlt={"Banner Image"} />
    </div>
    </Link>
  )
}

export default Banner