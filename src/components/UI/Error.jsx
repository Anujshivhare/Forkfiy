import React from "react";
import icons from "../../assets/icons.svg";

function Error({ message }) {
  return (
    <div className="error">
      <div>
        <svg>
          <use href={`${icons}#icon-alert-triangle`}></use>
        </svg>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Error;
