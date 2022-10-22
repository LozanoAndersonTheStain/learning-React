import React from 'react'
import './Clock.css'

const Clock = () => {
  return (
    <div className="constaainerHora">
      <h1 className="lugar">Hello, World</h1>
      <div className="hora">
        <h2>
          It´s Time
          {new Date().toLocaleTimeString()}
        </h2>
      </div>
    </div>
  )
}

export default Clock
