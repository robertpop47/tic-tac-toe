import React from "react";
import Square from "./Square";

class Board extends React.Component {
  render() {
    const items = this.props.squares.map((value, index) => {
      return (
        <Square
          key={index}
          value={value}
          onClick={() => {
            this.props.onClick(index);
          }}
        />
      );
    });
    return <div className="board">{items}</div>;
  }
}

export default Board;
