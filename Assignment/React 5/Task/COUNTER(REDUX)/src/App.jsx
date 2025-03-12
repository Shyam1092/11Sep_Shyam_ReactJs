import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";


function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
