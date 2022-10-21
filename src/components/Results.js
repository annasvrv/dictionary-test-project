import React from "react";
import Phonetics from "./Phonetics";
import Photos from "./Photos";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.resultData) {
    return (
      <div className="Results">
        <section className="card mb-3 shadow-sm">
          <div className="card-body">
            {/* place pics results */}

            <h2>{props.resultData.word}</h2>
            {/* phonetic place */}
            <Phonetics />

            <Photos pic={props.photoResult} />
          </div>
        </section>

        {props.resultData.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning defData={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
