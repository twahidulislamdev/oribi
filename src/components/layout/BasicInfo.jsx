import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import { FaTruck, FaUndoAlt } from "react-icons/fa";
import { PiNumberTwoBold } from "react-icons/pi";

const BasicInfo = () => {
  return (
    <div className="py-5">
      <Container>
        <Flex className={"justify-between"}>
          <div className="flex items-center space-x-2">
            <PiNumberTwoBold />
            <p className="text-base text-menuColor font-medium">
              Two years warranty
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaTruck />
            <p className="text-base text-menuColor font-medium">
              Free shipping
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaUndoAlt />
            <p className="text-base text-menuColor font-medium">
              Two years warranty
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default BasicInfo;
