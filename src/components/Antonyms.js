import React from "react";

export default function Antonyms(props) {
  if (props.antonyms.length) {
    return <div className="Antonyms"></div>;
  } else {
    return null;
  }
}
