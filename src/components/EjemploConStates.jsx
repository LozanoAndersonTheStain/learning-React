import React, { useState } from 'react'

const EjemploConStates = () => {
  const [edad, setEdad] = useState(21)
  const [fruta, setFruta] = useState('Manzana')
  const [tareas, setTareas] = useState([{ id: 1, tarea1: 'Aprender React Js' }])

  return (
    <div>
      <h3>{edad}</h3>
      <h3>{fruta}</h3>
      <div key={tareas[0].id}>
        <h3>{tareas[0].tarea1}</h3>
      </div>
      <br />
      <button onClick={() => setFruta('Fresa')}>Quiero una fresa</button>
      <br />
      <button onClick={() => setFruta('Manzana')}>Quiero una manzana</button>
    </div>
  )
}

export default EjemploConStates
