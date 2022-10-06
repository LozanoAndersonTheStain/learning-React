import React from 'react'

const Welcome = (props) => {
  return (
    <div>
      <h1>
        Welcome {props.name} {props.apellidos} to Code School C13
      </h1>

      <img src={props.url} alt="" />
    </div>
  )
}

export default Welcome
