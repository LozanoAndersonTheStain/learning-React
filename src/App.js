import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import Formulario from './components/Formulario/Formulario'
// import Listar from './components/Listar/listar'
import FormularioSelect from './components/FormularioSelect/FormularioSelect'
// import FormilarioStates from './components/FormularioStates/FormilarioStates'
// import FormularioValidacion from './components/Formulario-Validacion/FormularioValidacion'
import FormularioPost from './components/Formulario-Metodo-Post/FormularioPost'
import TablaPersonajes from './components/Consumo-Api/TablaPersonajes'
import Header from './components/Header/Header'

const App = () => {
  return (
    <Router>
      {/* <Listar /> */}
      {/* <Formulario /> */}
      {/* <FormularioSelect /> */}
      {/* <FormilarioStates /> */}
      {/* <FormularioValidacion /> */}
      {/* <TablaPersonajes /> */}
      {/* <FormularioPost /> */}
      <Header />

      <Routes>
        <Route path="/" element={<FormularioPost />} />
        <Route path="/personajes" element={<TablaPersonajes />} />
        <Route path="/formulario-select" element={<FormularioSelect />} />
      </Routes>
    </Router>
  )
}

export default App
