import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import TitaniumBlack from "../../assets/titaniumBlack.jpg";
import TitaniumGray from "../../assets/titaniumGray.jpg";
import TitaniumSilverBlue from "../../assets/titaniumSilverblue.jpg";
import TitaniumPinkgold from "../../assets/titaniumPinkgold.jpg";
import TitaniumJadegreen from "../../assets/titaniumJadegreen.jpg";

const QuickView = () => {
  return (
    <>
      <div className="mt-10">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[48%]">
              <Flex className={"gap-x-3"}>
                <div className="w-[15%] space-y-3">
                  <Image
                    className={"border-2 border-gray-300 rounded-lg"}
                    imgSrc={TitaniumBlack}
                  />
                  <Image
                    className={"border-2 border-gray-300 rounded-lg"}
                    imgSrc={TitaniumGray}
                  />
                  <Image
                    className={"border-2 border-gray-300 rounded-lg"}
                    imgSrc={TitaniumSilverBlue}
                  />
                  <Image
                    className={"border-2 border-gray-300 rounded-lg"}
                    imgSrc={TitaniumPinkgold}
                  />
                  <Image
                    className={"border-2 border-gray-300 rounded-lg"}
                    imgSrc={TitaniumJadegreen}
                  />
                </div>
                <div className="w-[85%] border-1 border-gray-300 rounded-lg">
                  <Image
                    className={"rounded-lg"}
                    imgSrc={TitaniumBlack}
                    imgAlt={"Quick View Image"}
                  />
                </div>
              </Flex>
            </div>
            <div className="w-[48%] border-1 border-gray-300 rounded-lg"></div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default QuickView;
