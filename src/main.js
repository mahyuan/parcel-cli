import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game'

function Square(props) {
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

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
