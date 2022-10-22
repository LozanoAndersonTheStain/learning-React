import React, { useEffect, useState } from 'react'

const Efecto = () => {
  const [name, setName] = useState('')
  useEffect(() => {
    setName('Anderson')
}, [])

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Efecto
