import React from 'react';
import { useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'
import '../App.css'

export default function MoleContainer(props){
     let [displayMole, setDisplayMole] = useState(false);

     const Clicked = () => {
      /* add or subtact 1 if user clicks mole or hole respectively */
      displayMole ? props.setScore(props.score +1) : props.setScore(props.score -1)
      setDisplayMole(false) 
     }

     return (
        <div className="mole-container">
            {/* value of displayMole is not constant */}
            {displayMole ? <Mole setDisplayMole={setDisplayMole} Clicked={Clicked}/> : <EmptySlot setDisplayMole={setDisplayMole} Clicked={Clicked}/>}
        </div>
     )
}