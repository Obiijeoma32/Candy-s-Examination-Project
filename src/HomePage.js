import React, { useState, useReducer } from "react";
// import useCounterone from "./useCounterone";
import Clock from "./Clock";
import Footer from "./Footer";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import { initialState, reducer } from "./useReducer";

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState(false);
  const [text, setText] = useState("");

  const handleIncreament = () => {
    dispatch({ type: "increase" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrease" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    setText(0);
  };

  const handleValue = () => {
    setValue(true);
  };

  return (
    <React.Fragment>
      <HelmetProvider>
        <meta name="description" content="Home Page" />
        <title>Home Page</title>
      </HelmetProvider>
      <section className="button-section">
        <h1 className="page-header">Custom Counter Hook Page </h1>
        <Clock />
        {!value && <div className="button-header">{!text ? state.value : +text + state.value}</div>}
        {value && <input className="button-header" value={!text ? state.value : +text + state.value} onChange={(e) => setText(e.target.value)} />}
        <button className="buttons" onClick={handleIncreament}>
          Increase
        </button>
        <button className="buttons" onClick={handleDecrement} disabled={state.value === 0}>
          Decrease
        </button>
        <button className="buttons" onClick={handleValue}>
          Set Value
        </button>
        <button className="buttons" onClick={handleReset}>
          Reset
        </button>
        <Footer />
      </section>
    </React.Fragment>
  );
};
export default HomePage;
