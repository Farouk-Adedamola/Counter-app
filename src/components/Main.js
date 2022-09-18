import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [initial, progress] = useState(0);

  function setIncrement() {
    progress(initial + 1);
  }
  function setDecreament() {
    if (initial >= 1) {
      progress(initial - 1);
    } else {
      progress(initial);
    }
  }
  function setReset() {
    progress(0);
  }

  const complexIncrease = () => {
    setTimeout(() => {
      progress((prevInitial) => {
        return prevInitial + 1;
      });
    }, 2000);
  };

  return (
    <React.Fragment>
      <div
        style={{
          margin: "3rem 0",
          backgroundColor: "#F1F5F8",
          padding: "10px 12px",
          maxWidth: "700px",
          margin: "10px auto",
        }}
      >
        <h2 className="header-text">Counter App</h2>
        <h1 className="header-counter">{initial}</h1>
        <div className="inner-container">
          <button href="#" className="big-btn" onClick={setIncrement}>
            Increase
          </button>
          <button href="#" className="red-big-btn" onClick={setDecreament}>
            Decrease
          </button>
          <button href="#" className="res-big-btn" onClick={setReset}>
            Reset
          </button>
        </div>
      </div>

      <div
        style={{
          margin: "3rem 0",
          backgroundColor: "#F1F5F8",
          padding: "10px 12px",
          maxWidth: "700px",
          margin: "70px auto",
        }}
      >
        <h2 className="header-text">Counter App</h2>
        <h1 className="header-counter">{initial}</h1>
        <div className="inner-container">
          <button href="#" className="big-btn" onClick={complexIncrease}>
            Complex Increase
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
