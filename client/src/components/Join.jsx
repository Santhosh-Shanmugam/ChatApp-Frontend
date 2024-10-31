import React,{useState} from 'react'
import { Link } from 'react-router-dom'


const Join = () => {

  const [name , setName] = useState('');
  const [room , setRoom] =  useState('');
  // const [error , setError] = useState('')


  return (
    <div className="">
       <div className="">
            <h1> Join the Chat!</h1>
            <input placeholder='Name' className='' type='text' onChange={(event)=> setName(event.target.value)}></input>
            <input placeholder='Room' className='' type='text' onChange={(event) => setRoom(event.target.value)}></input>
            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat ? name=${name} & room=${room}`}>
                <button type='submit'>Sign in</button>
            </Link>
       </div>
    </div>
  )
}

export default Join
