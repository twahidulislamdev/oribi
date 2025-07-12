import { FaCircleArrowRight } from "react-icons/fa6";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaCircleArrowRight className=" text-4xl text-black absolute bottom-12 right-20  cursor-pointer hover:text-gray-700 transition " />
    </div>
  );
};

export default NextArrow;
