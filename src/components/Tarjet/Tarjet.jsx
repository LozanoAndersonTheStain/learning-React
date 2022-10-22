import React from 'react'
import './Tarjet.css'

const Tarjet = () => {
  return (
    <div className="container">
      <div className="container-tarjet border">
        <img
          className="imagen"
          src="https://cdn.pixabay.com/photo/2014/02/02/17/40/photographs-256888_960_720.jpg"
          alt=""
        />
        <p>
          De los mejores lentes que se podran encontrar, con esta podras tomar
          las mejores fotos del mundo
        </p>
        <p>⬇ Tiene un precio de ⬇</p>
        <br />
        <span>500.000</span>
        <br />
        <button>
          <i class="fa-solid fa-money-bill"></i> Comprar
        </button>
        <br />
        <button>
          <i class="fa-solid fa-cart-shopping"></i> Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default Tarjet
