import { useState } from 'react'
import './App.css';
import MoleContainer from './components/MoleContainer'
import './App.css'

function App() {

  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i=0; i < 10; i++){
      hills.push(
        <MoleContainer
        key={i}
        setScore = {setScore} 
        score={score}
        />
      )
    }
    return(
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Click-a-Mole</h1>
      {createMoleHill()}
      {score }
    </div>
  );
}

export default App;
