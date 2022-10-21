import React from "react";

export default function Photos(props) {
  if (props.pic) {
    return (
      <div className="Photo">
        {props.pic.map(function (photo, index) {
          return <img src={photo.src.tiny} key={index} alt="" />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
