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
        <div className="row">
          <div className="sound col-md-5">
            <button className="audioButton" onClick={start}>
              <i className="fa-solid fa-volume-low"></i>
            </button>
          </div>
          <div className="sound-text col-md-7">{props.phone.text}</div>
        </div>
      </div>
    );
  }
}
