import { FaCircleArrowLeft } from "react-icons/fa6";

const PrevArrow = ({onClick }) => {
  return (
    <div
      className={`absolute top-[40%] left-[20px] z-10 transform -translate-y-1/2 cursor-pointer `}
      onClick={onClick}
    >
      <FaCircleArrowLeft className="text-4xl text-black bg-white rounded-full p-1 shadow" />
    </div>
  );
};

export default PrevArrow;
