import React from "react";

import "../styles/Photos.css";

export default function Photos(props) {
  if (props.pic) {
    return (
      <div className="Photo">
        <div className="row">
          {props.pic.map(function (photo, index) {
            return (
              <div className="col-3">
                <a
                  href={photo.src.original}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={photo.src.tiny}
                    alt=""
                    className="img-fluid img-thumbnail"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
