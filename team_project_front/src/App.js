import React, {useEffect, useState} from 'react';
import axios from 'axios';
import GameIndex from './components/GameIndex'
import GameForm from './components/GameForm'

const App = () => {
  let [title, setTitle] = useState('')
  let [genre, setGenre] = useState('')
  let [completed, setCompleted] = useState(false)
  let [games, setGames] = useState([])//state of api array //change api array state

  let [editTitle, setEditTitle] = useState('')
  let [editGenre, setEditGenre] = useState('')
  let [editCompleted, setEditCompleted] = useState(false)
  let [editGameId, setEditGameId] = useState('')


  const handleTitle = (e) => {
    setTitle(e.target.value)
    setEditTitle(e.target.value)
  }
  const handleGenre = (e) => {
    setGenre(e.target.value)
    setEditGenre(e.target.value)
  }
  const handleCompleted = (e) => {
    setCompleted(e.target.checked)
    setEditCompleted(e.target.checked)
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
    e.preventDefault()
    axios
      .put(
        `http://localhost:3001/games/${editGameId}`,
        {
          title: editTitle,
          genre: editGenre,
          completed: editCompleted,
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

  const editButton = (gameData) => {
    setEditGameId(gameData._id)
    setEditTitle(gameData.title)
    setEditGenre(gameData.genre)
    setEditCompleted(gameData.completed)
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

      <div className="edit_form">
        <form onSubmit={handleUpdate}>
          <input type="text" onChange={handleTitle} value={editTitle}/>
          <input type="text" onChange={handleGenre} value={editGenre}/>
          <input type="checkbox" onChange={handleCompleted}/>
          <input type="submit" value="update"/>
        </form>
      </div>

      <GameIndex
        games={games}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleTitle={handleTitle}
        editButton={editButton}
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
