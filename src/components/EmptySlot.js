import { useEffect } from "react"; 
import molehill from "../img/molehill.jpg"

export default function EmptySlot(props){

    useEffect(() =>{
        let randomSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img src={molehill} alt="molehill" className="image"/>
        </div>
    )
}