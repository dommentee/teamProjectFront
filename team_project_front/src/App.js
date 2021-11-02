import React, {useEffect, useState} from 'react';
import axios from 'axios';
import GameIndex from './components/GameIndex'
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

  const handleDelete = (gameData) => {
    axios
    .delete(`http://localhost:3001/games/${gameData._id}`)
    .then(() => {
      axios
        .get('http://localhost:3001/games')
        .then((response) => {
          setGames(response.data)
          console.log(games)
      })
    })
  }

  const handleUpdate = (e) => {
    axios
      .put(
        `http://localhost:3001/games/${gameData._id}`,
        {
          title: e.target[0].value,
          genre: e.target[1].value,
          completed: e.target[2].value
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
  },[])

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

      <GameIndex
       games={games}
      />

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
