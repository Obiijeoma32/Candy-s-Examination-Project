import { useReducer } from "react";

import "./App.css";

function useCounterone() {
  const initialstate = { firstCounter: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, firstCounter: state.firstCounter + action.value };
      case "decrement":
        return { ...state, firstCounter: state.firstCounter - action.value };
      case "setvalue":
        return { ...state, firstCounter: state.firstCounter + action.value };
      case "reset":
        return initialstate;
      default:
        return state;
    }
  };
  // const [state, setState] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialstate);
  // console.log(count);
  const increment = () => dispatch({ type: "increment", value: 1 });

  const decrement = () => dispatch({ type: "decrement", value: 1 >= 0 });

  const setvalue = () => dispatch({ type: "setvalue", value: 5 });

  const reset = () => dispatch({ type: "reset" });

  return { count, increment, decrement, setvalue, reset };
}
export default useCounterone;
