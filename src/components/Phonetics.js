import React from "react";

import "../styles/Phonetics.css";

export default function Phonetics(props) {
  let audio = new Audio(props.phone.audio);

  const start = () => {
    audio.play();
  };

  if (props.phone.audio === "" || props.phone.text === "") {
    return null;
  } else {
    return (
      <div className="Phonetics">
        <div className="row mb-3">
          <div className="sound col-2">
            <button className="audioButton" onClick={start}>
              <i className="fa-solid fa-volume-low"></i>
            </button>
          </div>
          <div className="sound-text col-10 ps-3">{props.phone.text}</div>
        </div>
      </div>
    );
  }
}
