import React, { useEffect, useState } from 'react'
import './TablaPersonajes.css'


const TablaPersonajes = () => {
  const [personajes, setPersonajes] = useState([])

  const fetchPersonajes = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`)
    const data = await response.json()
    setPersonajes(data.results)
  }
  useEffect(() => {
    fetchPersonajes()
  }, [])

  return (
    <div>
      <table id="users" className='container-table'>
        <thead className='container-cabecera'>
          <tr className='titulos'>
            <th>Name</th>
            <th>Status</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {personajes.map((personaje) => (
            <tr key={personaje._id}>
              <td className='text'>{personaje.name}</td>
              <td className='status'>{personaje.status}</td>
              <td>
                <img src={personaje.image} alt="" className='image'/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaPersonajes
