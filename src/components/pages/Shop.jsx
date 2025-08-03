import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import ShopProductCatagory from "../ShopProductCatagory";
import ShopProductColor from "../ShopProductColor";
import ShopProductBrand from "../ShopProductBrand";
import ShopProductPrice from "../ShopProductPrice";
import ShopProductSortBy from "../ShopProductSortBy";
import ShopProductShow from "../ShopProductShow";

const Shop = () => {
  return (
    <>
      <div className="">
        <Container>
          <div className="py-10">
            <h4 className="text-4xl font-bold">Product</h4>
            <p className="text-menuColor text-sm mt-3">Home / Product</p>
          </div>
          <Flex className={"justify-between"}>
            <div className="w-[30%]">
              <ShopProductCatagory />
              <ShopProductColor />
              <ShopProductBrand />
              <ShopProductPrice />
            </div>
            <div className="w-[70%]">
              <Flex className={"justify-end gap-x-10"}>
                <ShopProductSortBy />
                <ShopProductShow />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Shop;
