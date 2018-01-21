import React from 'react';
import ReactDOM from 'react-dom';

export default function Square(props) {
  if(props.hightlight) {
    return (
      <button className="square" onClick={() => props.onClick()} style={{color: "red"}}> 
        {props.value}
      </button>
    )
  } else {
    return (
      <button className="square" onClick={()=> props.onClick()}>
        {props.value}
      </button>
    );
  }
} 
