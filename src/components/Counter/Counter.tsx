// src/components/Counter.tsx
import React, {memo} from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset} from "../../state/slice/counterSlice"; // Import actions
import {RootState} from "@/state/store";

// Counter component
const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value); // Select counter value from state

  return (
    <div>
      <h2>Counter: {count}</h2> {/* Display the counter value */}
      <button onClick={() => dispatch(increment())}>Increment</button>{" "}
      {/* Increment button */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>{" "}
      {/* Decrement button */}
      <button onClick={() => dispatch(reset())}>Reset</button>{" "}
      {/* Reset button */}
    </div>
  );
};

export default memo(Counter);
