import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import './App.css'
// import Casa from './components/Casa/Casa'
import Contador from './components/Contador/Contador'
import Efecto from './components/Efecto'
import EjemploConStates from './components/EjemploConStates'
import Pokemon from './components/Pokemon'
// import Welcome from './welcome/Welcome'

const App = () => {
  // const usuario = {
  //   name: 'Anderson',
  //   lastname: 'Lozano Velasquez',
  //   avatar:
  //     'https://i.pinimg.com/564x/c6/f5/40/c6f54056a6e3138c3c063add2f2ecd98.jpg',
  // }
  return (
    <div>
      {/* <Welcome usuario={usuario} />
      <Casa color="Rojo" tipo="VIS" />
      <Casa color="Verde" tipo="Palacio" /> */}
      <Contador />
      <EjemploConStates />
      <Efecto />
      <Pokemon />
    </div>
  )
}

export default App
