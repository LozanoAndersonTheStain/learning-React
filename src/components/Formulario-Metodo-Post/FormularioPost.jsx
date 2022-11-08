import React, { useState } from 'react'

const FormularioPost = () => {
  const [tittle, setTittle] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState('')

  const showAlert = (e) => {
    e.preventDefault()
    alert(`${tittle} ${author}`)

    setTittle('')
    setDate('')
    setDescription('')
    setAuthor('')
    setImage('')
  }

  return (
    <div>
      <form onSubmit={showAlert}>
        <input
          type="text"
          placeholder="Ingrese titulo"
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
        />

        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />

        <textarea
          type="text"
          placeholder="Ingrese la description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ingrese el autor de la noticia"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ingrese una imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input type="submit" value="enviar" />
      </form>
    </div>
  )
}

export default FormularioPost
