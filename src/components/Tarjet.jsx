import React from 'react'
import './Tarjet.css'

const Tarjet = () => {
  return (
    <div className="container-tarjet">
      <img
        src="https://cdn.pixabay.com/photo/2014/02/02/17/40/photographs-256888_960_720.jpg"
        alt=""
      />
      <p>
        De los mejores lentes que se podran encontrar, con esta podras tomar las
        mejores fotos del mundo
      </p>
      <p>⬇ Tiene un precio de ⬇</p>
      <span>5.000</span>
      <br />
      <button>Comprar</button>
      <br />
      <button>Añadir al carrito</button>
    </div>
  )
}

export default Tarjet
