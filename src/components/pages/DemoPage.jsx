import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "/src/components/features/counterSlice";

const DemoPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className="flex justify-center items-center gap-x-3">
          <button className="py-3 px-5 bg-amber-400"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button className="py-3 px-5 bg-amber-400"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
