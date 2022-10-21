import React from "react";

import "../styles/Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div className="row mb-3">
        <div className="sound col-2 ">
          <a href={props.phone.audio} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-volume-low"></i>
          </a>
        </div>
        <div className="sound-text col-10 ps-3">{props.phone.text}</div>
      </div>
    </div>
  );
}
