import React, {useEffect, useState} from 'react';
import axios from 'axios';
import GameForm from './components/GameForm'

const App = () => {
  let [title, setTitle] = useState('')
  let [genre, setGenre] = useState('')
  let [completed, setCompleted] = useState(false)
  let [games, setGames] = useState([])//state of api array //change api array state

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleGenre = (e) => {
    setGenre(e.target.value)
  }
  const handleCompleted = (e) => {
    setCompleted(e.target.checked)
  }

  const handleGameForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/games',
      {
        title: title,
        genre: genre,
        completed: completed
      }
    )
      .then(() => {
      axios
      .get('http://localhost:3001/games')
      .then((response) => {
        setGames(response.data)
      })
    })

  }

  //connects to api and pulls all games
  useEffect(() => {
    axios
      .get('http://localhost:3001/games')
      .then((response) => {
        setGames(response.data)
        console.log(games)
      })
  })

  return (
    <div className="container">
      <h1>Video game Stats Tracker</h1>
      <div className="form_wrap">
        <form onSubmit={handleGameForm}>
          <input type="text" onChange={handleTitle}/>
          <input type="text" onChange={handleGenre} />
          <input type="checkbox" onChange={handleCompleted} />
          <input type="submit" value="submit"/>

        </form>
      </div>

    </div>
  )

}
//need lift state
// return (
//   <div className="container">
//     <h1>Video game Stats Tracker</h1>
//     {/* <GameForm /> */}

//   </div>
// )


export default App;
