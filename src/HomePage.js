import "./App.css";
import useCounterone from "./useCounterone";
import Clock from "./Clock";
import Footer from "./Footer";
import { HelmetProvider } from "react-helmet-async";
import React from "react";

const HomePage = () => {
  const { count, increment, decrement, setvalue, reset } = useCounterone(0);

  return (
    <React.Fragment>
      <HelmetProvider>
        <meta name="description" content="Home Page" />
        <title>Home Page</title>
      </HelmetProvider>
      <section className="button-section">
        <h1 className="page-header">Custom Counter Hook Page </h1>
        <Clock />
        <h2 className="button-header">{count.firstCounter === 0 ? 0 : count.firstCounter}</h2>
        <button className="buttons" onClick={increment}>
          Increase
        </button>
        <button className="buttons" onClick={decrement} disabled={count.firstCounter === 0}>
          Decrease
        </button>
        <button className="buttons" onClick={setvalue}>
          Set Value
        </button>
        <button className="buttons" onClick={reset}>
          Reset
        </button>
        <Footer />
      </section>
    </React.Fragment>
  );
};
export default HomePage;
