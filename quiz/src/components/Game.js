import React from "react";
import questions from "../questions";
export default function Game({question, onClickVariant, step}){
    const percentage = Math.round(step / questions.length * 100);
    return(
        <>
        <div className="progress">
            <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
            {
                question.variants.map((item, index) => <li onClick={() => onClickVariant(index)} key={index}>{item}</li>)
            }
      </ul>
    </>
    )
}
