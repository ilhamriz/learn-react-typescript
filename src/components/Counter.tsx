import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "INCREMENT" | "DECREMENT",
  payload: number
};

type ResetAction = {
  type: "RESET",
};

// DEFAULT
// type CounterAction = {
//   type: string,
//   payload: number
// };

type CounterAction = UpdateAction | ResetAction;

const initialize = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return initialize;
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialize);

  return (
    <div>
      <span>Count: {state.count}</span>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}
