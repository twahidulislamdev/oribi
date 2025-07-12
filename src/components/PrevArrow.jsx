import { FaCircleArrowLeft } from "react-icons/fa6";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaCircleArrowLeft className="text-4xl text-black absolute bottom-12  z-30 cursor-pointer hover:text-gray-700 transition " />
    </div>
  );
};

export default PrevArrow;
