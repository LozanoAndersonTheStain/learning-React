import { isEmpty } from 'lodash'
import React, { useState } from 'react'

const FormularioValidacion = () => {
  const [nombre, setNombre] = useState('')

  const showAlert = (e) => {
    e.preventDefault()
    if (isEmpty(nombre)) {
      alert('El campo Nombre no puede estar vacío')
      return
    }
    setNombre('')
    return
  }

  return (
    <div>
      <form onSubmit={showAlert}>
        <input
          type="text"
          placeholder="Ingrese un nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <input type="submit" value="Enviar" />
        <h1>{nombre}</h1>
      </form>
    </div>
  )
}

export default FormularioValidacion
