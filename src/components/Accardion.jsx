import React from "react";
import { useState } from "react";

const Accardion = ({ title, text }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="accardion">
      <div className="header">
        <h2>{title}</h2>
        <button
          className="quest-btn"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "-" : "+"}
        </button>
      </div>
      {show && <p>{text}</p>}
    </div>
  );
};

export default Accardion;
