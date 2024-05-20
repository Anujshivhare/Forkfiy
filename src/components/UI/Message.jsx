import React from "react";
import icons from "../../assets/icons.svg";

/**
 * Component to display a message.
 * @param {Object} props - Component props.
 * @param {string} props.message - The message to display.
 * @returns {JSX.Element} The JSX for the Message component.
 */
function Message({ message }) {
  return (
    <div className="message">
      <div>
        <svg>
          <use href={`${icons}#icon-smile`}></use>
        </svg>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Message;
