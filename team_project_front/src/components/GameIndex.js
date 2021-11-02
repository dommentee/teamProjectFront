import React from 'react';



const GameIndex = (props) => {
  
  return (
    <div>
      <h1>games</h1>
      {props.games.map((game) => {
          return (
            <div>
              {game.title}
            </div>
          )
       })}

    </div>
  )
}
export default GameIndex