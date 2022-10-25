import React from "react";

import "../styles/Phonetics.css";

export default function Phonetics(props) {
  let audio = new Audio(props.phone.audio);

  // let start = () => new Audio(props.phone.audio).play();

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
