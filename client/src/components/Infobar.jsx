import React from 'react'

const Infobar = ({room}) => {
  return (
    <div>
       <div>
            <h1 className="">{room}</h1>
       </div>
       <div>
            <a href='/'>close</a>
       </div>
    </div>
  )
}

export default Infobar
