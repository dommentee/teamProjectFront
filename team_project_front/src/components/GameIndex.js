import React from 'react';



const GameIndex = (props) => {

  return (
    <div>
      <h1>games</h1>
      {props.games.map((game) => {
          return (
            <div className="game_card">
              <div className="info">Title: {game.title}</div>
              <div className="info">Genre: {game.genre}</div>
              <div className="info">Completed: {game.completed}</div>
            </div>
          )
       })}

    </div>
  )
}
export default GameIndex