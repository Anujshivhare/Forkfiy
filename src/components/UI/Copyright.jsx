import React from "react";

/**
 * Component to display copyright information.
 * @returns {JSX.Element} The JSX for the Copyright component.
 */
function Copyright() {
  return (
    <p className="copyright">
      &copy; Copyright by{" "}
      <a
        className="twitter-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/jonasschmedtman"
      >
        Jonas Schmedtmann
      </a>
      . For learning or portfolio use only. Developed in React by{" "}
      <a
        className="twitter-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/CodaMystiqe"
      >
        CodaMystique
      </a>
      . Source code on{" "}
      <a
        href="https://github.com/CodaMystique/Forkify"
        className="twitter-link"
        target="_blank"
      >
        Github
      </a>
      .
    </p>
  );
}

export default Copyright;
