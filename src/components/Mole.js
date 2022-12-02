import { useEffect } from 'react'
import mole from '../img/mole.png'

export default function Mole(props){
    var randomSeconds
    var screenSize = window.innerWidth
    console.log(screenSize)

    useEffect(() => {
        /* Game speed dependent on if device is a touch screen(mobile) or uses mouse/trackpad(laptop) */
        screenSize <= 800 ? 
            randomSeconds = Math.ceil(Math.random() * 900) : 
            randomSeconds = Math.ceil(Math.random() * 1200) 
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img src={mole} alt="mole" onClick={props.Clicked} className="mole"/>
        </div>
    )
}