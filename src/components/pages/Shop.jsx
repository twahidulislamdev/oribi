import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import ShopProductCatagory from "../ShopProductCatagory";
import ShopProductColor from "../ShopProductColor";
import ShopProductBrand from "../ShopProductBrand";
import ShopProductPrice from "../ShopProductPrice";
import ShopProductSortBy from "../ShopProductSortBy";
import ShopProductShow from "../ShopProductShow";
import AriveOne from "../../assets/ariveOne.png";
import AriveTwo from "../../assets/ariveTwo.png";
import AriveThree from "../../assets/ariveThree.png";
import AriveFour from "../../assets/ariveFour.png";
import AriveNine from "../../assets/ariveNine.png";
import ShopProduct from "../ShopProduct";
import axios from "axios";
import { Link } from "react-router-dom";

const Shop = () => {
  const [myProduct, setMyProdyct] = useState([]);
  useEffect(() => {
    async function allDatas() {
      let data = await axios.get("https://twahidulislamdev.github.io/product-aip/data/products/index.json");
      setMyProdyct(data.data.data);
      console.log(data.data.data);
    }
    allDatas();
  }, []);
  return (
    <>
      <div className="">
        <Container>
          {/* Shop part Top part start  */}
          <div className="py-10">
            <h4 className="text-4xl font-bold">Product</h4>
            <p className="text-menuColor text-sm mt-3">Home / Product</p>
          </div>
          {/* Shop part Top part End  */}
          <Flex className={"justify-between"}>
            {/* Shop part catagory, color, brand price Start */}
            <div className="w-[30%]">
              <ShopProductCatagory />
              <ShopProductColor />
              <ShopProductBrand />
              <ShopProductPrice />
            </div>
            {/* Shop part catagory, color, brand price End */}
            <div className="w-[70%]">
              <Flex className={"justify-end gap-x-10"}>
                <ShopProductSortBy />
                <ShopProductShow />
              </Flex>
              {/* Shop Product part Start  */}
              <div className="mt-5">
                <Container>
                  <div className=" relative ">
                    <Flex className={"justify-between flex-wrap gap-y-5"}>
                      {myProduct.map((item) => (
                          <ShopProduct
                          className={""}
                          title={item.title}
                          price={item.price}
                          imgSrc={item.image}
                          imgAlt={"Arive One"}
                          text={"New"}
                          brand={item.brand	}
                          category={item.category	}
                        />
                      ))}
                    </Flex>
                  </div>
                </Container>
              </div>
              {/* Shop Product part End  */}
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Shop;
