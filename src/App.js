import { useState } from 'react'
import './App.css';
import MoleContainer from './components/MoleContainer'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i=0; i < 10; i++){
      hills.push(
        <MoleContainer key={i} setScore = {setScore} score={score}/>
      )
    }
    return(
      <div> {hills} </div>
    )
  }

  const playing = () => {
    return(
      <div className="App">
      <h1>Click-a-Mole</h1>
      <p>{score} </p>
      <div className="wrapper"> {createMoleHill()} </div>
    </div>
    )
  }
  
  const gameOver = () => {
    return(
      <div className="gamover">
        <h1>Game Over</h1>
        <button className="btn" onClick={() => setScore(0)}>Restart</button>
      </div>
    )
  }

  return (
    <div>
      {score <= -1 ? gameOver() : playing()}
    </div>
  )
}


export default App;
