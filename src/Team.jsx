import { useState } from "react"

export default function Team (){

    const [team, setTeam] = useState(11)

   const handleAdd = () =>{
    const newTeam = team + 1;
    setTeam(newTeam)
   }
   const handleRemove = () =>{
    setTeam(team - 1)
   }
    const styleTeam = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={styleTeam}>
            <h3>Player: {team}</h3>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRemove}>-</button>
        </div>
    )
}