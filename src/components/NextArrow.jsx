import { FaCircleArrowRight } from "react-icons/fa6";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className={`absolute top-[40%] right-[20px] z-10 transform -translate-y-1/2 cursor-pointer`}
      onClick={onClick}
    >
      <FaCircleArrowRight className="text-4xl text-black bg-white rounded-full p-1 shadow" />
    </div>
  );
};

export default NextArrow;
