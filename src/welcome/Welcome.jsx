import React from 'react'
import './Welcome.css'

const Welcome = ({usuario:{name, lastname, age, avatar}}) => {
  return (
    <div>
      <h1>
        Welcome {name} {lastname} to Code School C13
      </h1>
      <span>
        {
          age
        }
      </span>
      <img className='img' src={avatar} alt="" />
    </div>
  )
}

export default Welcome
