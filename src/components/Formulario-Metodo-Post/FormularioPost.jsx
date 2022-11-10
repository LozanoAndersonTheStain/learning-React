import React, { useState } from 'react'
import axios from 'axios'

const FormularioPost = () => {
  const [tittle, setTittle] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState('')

  const addNew = async (e) => {
    e.preventDefault()

    const newData = {
      tittle: tittle,
      date: date,
      description: description,
      author: author,
      image: image,
    }

    let headersList = {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      'Content-Type': 'application/json',
    }

    let bodyContent = JSON.stringify(newData)

    let reqOptions = {
      url: `https://crudcrud.com/api/${process.env.REACT_APP_KEY_CRUD}/news`,
      method: 'POST',
      headers: headersList,
      data: bodyContent,
    }

    let response = await axios.request(reqOptions)
    console.log(response.data)

    setTittle('')
    setDate('')
    setDescription('')
    setAuthor('')
    setImage('')
  }

  return (
    <div>
      <form onSubmit={addNew}>
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
          placeholder="Ingrese una imagen referente a la noticia"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input type="submit" value="enviar" />
      </form>
    </div>
  )
}

export default FormularioPost
