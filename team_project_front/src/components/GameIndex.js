import React from 'react';

const GameIndex = (props) => {

  return (
    <div>
    {props.games.map((game) => {
      return (

        <div className="container">
          <div className="game_card">
            <div className="info">Title: {game.title}</div>
            <div className="info">Genre: {game.genre}</div>
            <div className="info">Completed: {game.completed}</div>
            <button onClick={
              (e)=> {props.handleDelete(game)}
            }>delete</button>

            <button onClick={
              (e)=> {props.editButton(game)}
            }>edit</button>
          </div>
        </div>
      )
    })}
    </div>
  )
}
export default GameIndex
