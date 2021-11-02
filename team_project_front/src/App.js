import React, {useEffect, useState} from 'react';
import axios from 'axios';
import GameForm from './components/GameForm'

const App = () => {
  let [title, setTitle] = useState()
  let [genra, setGenra] = useState()
  let [completed, setCompleted] = useState(false)


  return (
    <div className="container">
      <h1>Video game Stats Tracker</h1>
      <GameForm />

    </div>
  )
}

export default App;
