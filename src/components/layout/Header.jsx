import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import HeaderLogo from "../../assets/headerLogo.png";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { FaSearch, FaUser, FaCaretUp, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isExpand, setExpand] = useState(false);
  return (
    <>
      <div className="py-6">
        <Container>
          <Flex>
            <div className="">
              <Link to={"/"}>
                <Image imgSrc={HeaderLogo} />
              </Link>
            </div>
            <div className="m-auto">
              <ul className="flex items-center gap-x-15">
                <Link to={"/"}>
                  <li className="text-base text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150  ">
                    Home
                  </li>
                </Link>
                <Link to={"/shop"}>
                  <li className="text-base text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                    Shop
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="text-base text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                    About
                  </li>
                </Link>
                <Link to={"/contacts"}>
                  <li className="text-base text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                    Contact
                  </li>
                </Link>
                <li className="text-base text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                  Journal
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="py-5 bg-[#F5F5F3]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Flex className={"gap-x-3"}>
                <HiMiniBars3BottomLeft className="text-lg" />
                <Heading
                  className={"text-sm text-[#262626] "}
                  txt={"Shop by Category"}
                  as={"h4"}
                />
              </Flex>
              
            </div>
            <div className="flex relative">
              <input
                className="p-3 w-[600px] focus:outline-0 bg-white"
                type="text"
                placeholder="Search Products"
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
            <div className="relative">
              <Flex className={"gap-x-3"}>
                <div className="">
                  <Flex className={"gap-x-1"}>
                    <FaUser />
                    <FaCaretUp
                      onClick={() => setExpand(!isExpand)}
                      className={`${isExpand ? "rotate-180" : ""}`}
                    />
                  </Flex>
                </div>
                <FaShoppingCart />
              </Flex>
              {isExpand && (
                <div className="w-[100px] bg-amber-100 absolute mt-2 Right-30 ">
                  <button className="w-full bg-black text-center py-1.5 text-white border-b-1 border-white ">
                    Login
                  </button>
                  <button className="w-full bg-black text-center py-1.5 text-white ">
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
