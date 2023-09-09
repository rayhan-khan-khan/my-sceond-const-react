import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friends'
export default  function Friends (){

   
    const [friends, setFriends] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return(
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(rayhan => <Friend friends={rayhan}></Friend>)
            }
        </div>
    )
}   

/**
 * 1. state to hold data
 * 2.use effect use dependency array
 * 3. use fecth to load data
 * 4. set lodedt data to the state
 **/ 