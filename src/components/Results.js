import React from "react";
import Phonetics from "./Phonetics";
import Photos from "./Photos";
import Meaning from "./Meaning";

import "../styles/Results.css";

export default function Results(props) {
  if (props.resultData) {
    return (
      <div className="Results">
        <section className="card mb-3 shadow-sm">
          <div className="card-body row">
            <div className="col-4">
              <h2>{props.resultData.word}</h2>

              {/*Looping through each phonetics: find audio & text */}
              {props.resultData.phonetics.map((phonetic, index) => {
                return (
                  <div key={index}>
                    <Phonetics phone={phonetic} />
                  </div>
                );
              })}
            </div>
            <div className="col-8">
              <Photos pic={props.photoResult} />
            </div>
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
