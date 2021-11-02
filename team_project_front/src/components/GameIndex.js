import React from 'react';



const GameIndex = (props) => {

  return (
    <div>
      <h1>games</h1>
      {props.games.map((game) => {
        return (
          <div className="container">
            <div className="game_card">
              <div className="info">Title: {game.title}</div>
              <div className="info">Genre: {game.genre}</div>
              <div className="info">Completed: {game.completed}</div>
              <div className="info">Id: {game._id}</div>
              <button onClick={
                (e)=> {props.handleDelete(game)}
              }>delete</button>

              <button onClick={
                (e)=> {props.editButton(game)}
              }>update</button>

            </div>
            <div className="edit_form">
              <form onSubmit={props.handleUpdate}>
                <input type="hidden" value={game._id} />
                <input type="text" onChange={props.handleTitle}/>
                <input type="text" value={game.genre}/>
                <input type="checkbox" value={game.completed} />
                <input type="submit" value="submit"/>
              </form>
            </div>
            
          </div>
            
          )
      })}
    </div>
  )
}
export default GameIndex