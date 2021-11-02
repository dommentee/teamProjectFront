import React, {useEffect, useState} from 'react';
import axios from 'axios';
import GameForm from './components/GameForm'

const App = () => {
  let [title, setTitle] = useState()
  let [genre, setGenra] = useState()
  let [completed, setCompleted] = useState(false)
  let [games, setGames] = useState([])//state of api array //change api array state

  //connects to api and pulls all games 
  useEffect(() => {
    axios
      .get('http://localhost:3001/games')
      .then((response) => {
        setGames(response.data)
        conole.log(games)
      })
  })

  return (
    <div className="container">
      <h1>Video game Stats Tracker</h1>
      <GameForm />

    </div>
  )
}

export default App;
