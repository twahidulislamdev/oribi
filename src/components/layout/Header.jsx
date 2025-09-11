import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import HeaderLogo from "../../assets/headerLogo.png";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { FaSearch, FaUser, FaCaretUp, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [extend, setExtend] = useState(false);
  const [isLoginExpand, setLoginExpand] = useState(false);
  const [isCartExpand, setCartExpand] = useState(false);
  const handleBarClick = () => {
    // console.log(`Clicked: ${item}`);
    setExtend(false);
  };
  const handleLoginClick = () => {
    // console.log(`Clicked: ${item}`);
    setLoginExpand(false);
  };
  return (
    <>
      {/* Header Upper part start  */}
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
                <Link to={"/quickview"}>
                  <li className="text-base text-menuColor hover:text-black font-medium hover:cursor-pointer duration-300 delay-150 ">
                    Quick View
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
      {/* Header Upper part End  */}

      {/* Header Lower part start  */}
      <div className="py-5 bg-[#F5F5F3]">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="relative">
              <Flex className={"gap-x-3"}>
                <HiMiniBars3BottomLeft
                  onClick={() => setExtend(!extend)}
                  className="text-lg hover:cursor-pointer"
                />
                <Heading
                  className={"text-sm text-[#262626] "}
                  txt={"Shop by Category"}
                  as={"h4"}
                />
              </Flex>
              {/* Shop Catagory part start  */}
              {extend && (
                <div className=" shadow-lg rounded-lg w-[150px] mt-3 bg-black absolute">
                  <button
                    onClick={() => handleBarClick("Catagory 1")}
                    className="flex items-center w-full px-4 text-base text-white py-3 text-center   transition-colors duration-150 hover:cursor-pointer border-1 border-gray-500 "
                  >
                    Catagory 1
                  </button>
                  <button
                    onClick={() => handleBarClick("Catagory 2")}
                    className="flex items-center w-full px-4 text-base text-white py-3 text-center  transition-colors duration-150 hover:cursor-pointer border-1 border-gray-500 "
                  >
                    Catagory 2
                  </button>
                  <button
                    onClick={() => handleBarClick("Catagory 3")}
                    className="flex items-center w-full px-4 text-base text-white py-3 text-center  transition-colors duration-150 hover:cursor-pointer "
                  >
                    Catagory 3
                  </button>
                </div>
              )}
              {/* Shop Catagory part start  */}
            </div>
            <div className="flex relative">
              <input
                className="p-3 w-[600px] focus:outline-0 bg-white"
                type="text"
                placeholder="Search Products"
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
            {/* Login and Log out Section Start  */}
            <div className="relative">
              <Flex className={"gap-x-3"}>
                <div className="">
                  <Flex className={"gap-x-1"}>
                    <FaUser
                      onClick={() => setLoginExpand(!isLoginExpand)}
                      className="hover:cursor-pointer"
                    />
                    <FaCaretUp
                      onClick={() => setLoginExpand(!isLoginExpand)}
                      className={`hover:cursor-pointer ${
                        isLoginExpand ? "rotate-180" : ""
                      }`}
                    />
                  </Flex>
                </div>
                <FaShoppingCart
                  onClick={() => setCartExpand(!isCartExpand)}
                  className="hover:cursor-pointer"
                />
              </Flex>
              {/* Shop cart Drop Down start  */}
              {isCartExpand && (
                <div className="w-[500px] h-[570px] p-7 bg-gray-300 absolute mt-2 top-10 right-0 z-5">
                  <div className="flex justify-between items-center ">
                    <h6 className="text-2xl font-semibold">Your Cart</h6>
                    <GrClose
                      onClick={() => setCartExpand(false)}
                      className="text-2xl font-semibold hover:cursor-pointer"
                    />
                  </div>
                </div>
              )}
              {/* Shop cart Drop Down End  */}

              {/* Login and Logout Drop down Start  */}
              {isLoginExpand && (
                <div className="w-[100px] bg-amber-100 absolute mt-2 Right-30 ">
                  <button
                    onClick={() => handleLoginClick("Login")}
                    className="w-full bg-black text-center py-1.5 text-white border-b-1 hover:cursor-pointer border-gray-500 "
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleLoginClick(" Log Out")}
                    className="w-full bg-black text-center py-1.5 hover:cursor-pointer text-white "
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
            {/* Login and Log out Section End  */}
          </Flex>
        </Container>
      </div>
      {/* Header Lower part End  */}
    </>
  );
};

export default Header;
