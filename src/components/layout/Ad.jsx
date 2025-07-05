import React from "react";
import Container from "../Container";
import Image from "../Image";
import RoseLamp from "../../assets/roseLamp.png";
import WalClock from "../../assets/walClock.png";
import TableLamp from "../../assets/tableLamp.png";
import { Link } from "react-router-dom";

const Ad = () => {
  return (
    <div className="mt-12">
      <Container>
        <div className="flex justify-between ">
          <div className="w-[48.5%]">
            <Link to={"/shop"}>
              <Image
                className={"w-full"}
                imgSrc={RoseLamp}
                imgAlt={"rose lamp"}
              />
            </Link>
          </div>
          <div className="w-[48.5%] space-y-8">
            <div className="">
              <Link to={"/shop"}>
                <Image
                  className={"w-full"}
                  imgSrc={WalClock}
                  imgAlt={"rose lamp"}
                />
              </Link>
            </div>
            <div className="">
              <Link to={"/shop"}>
                <Image
                  className={"w-full"}
                  imgSrc={TableLamp}
                  imgAlt={"rose lamp"}
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ad;
