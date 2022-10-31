import React from 'react'

const Listar = () => {
  const nombres = ['Juan', 'Kandris', 'Laura', 'Daniela']

  return (
    <div>
      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  )
}

export default Listar
