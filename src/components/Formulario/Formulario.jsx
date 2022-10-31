import React, { useState } from 'react'

const Formulario = () => {
  const [description, setDescription] = useState('')

  const showAlert = (e) => {
    e.preventDefault()
    alert(description)
  }

  return (
    <div>
      {description === '' ? null : <h1>{description}</h1>}
      <form onSubmit={showAlert}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Formulario
