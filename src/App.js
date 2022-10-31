import React from 'react'

const App = () => {
  const showAlert = () => {
    alert('Hola mundo')
  }

  return (
    <div>
      <button onClick={showAlert}>Mostrar alerta</button>
    </div>
  )
}

export default App
