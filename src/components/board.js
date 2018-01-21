import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        key={i} 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)} 
        highlight={this.props.winnerLine.includes(i)}
      />
    );
  }

  render() {
    var rows = [];
    for(var i=0; i<3; i++) {
      var row = [];
      for(var j=3*i; j<3*i+3; j++) {
        row.push(this.renderSquare(j));
      }
      rows.push(<div className="board=row" key={i}>{row}</div>)
    }
    return (
      <div>
        {rows}
      </div>
    );
  }
}

module.exports = Board