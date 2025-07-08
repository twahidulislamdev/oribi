import React from "react";
import Image from "../Image";
import AddBanner from "../../assets/adBanner.png";
import Container from "../Container";
import { Link } from "react-router-dom";

const AnotherAd = () => {
  return (
    <div className="mt-10">
      <Container>
        <Link to={"/shop"}>
          <Image className={""} imgSrc={AddBanner} imgAlt={"Ad Image"} />
        </Link>
      </Container>
    </div>
  );
};

export default AnotherAd;
