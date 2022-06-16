import React from 'react';
import { useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'
import '../App.css'

export default function MoleContainer(props){
     let [displayMole, setDisplayMole] = useState(false);
     const moleClicked = () => {
        props.setScore(props.score +1)
        setDisplayMole(false)
     }
     return (
        <div className="mole-container">
            {displayMole ? <Mole setDisplayMole={setDisplayMole}
             moleClicked={moleClicked}/> : <EmptySlot setDisplayMole={setDisplayMole}/>}
        </div>
     )
}