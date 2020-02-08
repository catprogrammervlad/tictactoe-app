import React, { Component } from 'react';
import './style.css';

class App extends Component {
  state = {
    board: Array(9).fill(null),
    player: 'X',
    winner: null,
    stopGame: null
  };


  restartGame = () => {
    let restartState = {
      board: Array(9).fill(null),
      player: 'X',
      winner: null,
      stopGame: null
    }
    this.setState(restartState)
  }

  checkWinner = () => {
    let winLines =
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
    
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];

      if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
        if (this.state.board[a] === "X") {
          alert('The X Win!!!')
          this.setState({
            winner: this.state.player
          })
          setTimeout(this.restartGame, 3000);
        } else {
          alert('The O Win!!!')
          this.setState({
            winner: this.state.player
            
          })
          setTimeout(this.restartGame, 3000);
        }

      }
      

      
     }
  }

  handlerClick = (index) => {
    let newBoard = this.state.board;

    if (newBoard[index] === null && this.state.winner === null) {
      newBoard[index] = this.state.player;

      let newPlayer = this.state.player === 'X' ? 'О' : 'X';
      this.setState({
        board: newBoard,
        player: newPlayer
      });

      this.checkWinner();

    }
    

    
    
    
    
  };

  render() {
    const Cell = this.state.board.map((cell, index) => (
      <div
        className='cell'
        key={index}
        onClick={() => this.handlerClick(index)}>
        {cell}
      </div>
    ));
    return (
      <div className='container'>
        <h1>TicTacToe Game</h1>

        <div className='board'>{Cell}</div>
      </div>
    );
  }
}

export default App;
