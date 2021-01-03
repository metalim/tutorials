import React from 'react'

import Square from './Square'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  renderSquare(i,winline) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
        win={winline ? winline.includes(i) : false}
      />
    )
  }

  render() {

    let rows = []
    for (let y=0; y<3; y++) {
      let cols = []
      for (let x=0; x<3; x++) {
        cols.push(this.renderSquare(x+y*3, this.props.winline))
      }
      rows.push(
        <div className="board-row" key={y}>
          {cols}
        </div>
      )
    }
    return (
      <div>
        {rows}
      </div>
    )
  }
}

export default Board
