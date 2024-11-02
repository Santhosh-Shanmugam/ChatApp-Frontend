import React from 'react'

const input = ({message , setMessage,sendMessage}) => {
  return (
    <form>
        <input className='' type='text' placeholder='Type a message here....' 
                value={message} onChange={(e)=> setMessage(e.target.value)}
                onKeyPress = {(e)=> e.key === 'Enter' ? sendMessage(e) : null}
        />

        <button onClick={(e)=>sendMessage(e)}>Send.</button>
    </form>
  )
}

export default input
