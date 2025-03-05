import { useState, useRef } from "react";

export default function AvoidReRenders() {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  renders.current += 1; // Updates but does not trigger re-render

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold">Avoid Re-renders with useRef</h2>
      <p className="mt-2">Count: {count}</p>
      <p className="mt-2">Component renders: {renders.current}</p>
      <button onClick={() => setCount(count + 1)} className="mt-4">
        Increment Count
      </button>
    </div>
  );
}
