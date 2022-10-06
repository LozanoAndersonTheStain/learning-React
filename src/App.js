import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './App.css'
import Clock from './components/Clock'
import Tarjet from './components/Tarjet'
import Welcome from './components/Welcome'

const images = [
  'https://cdn.pixabay.com/photo/2022/09/02/13/35/mountains-7427623_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/09/02/11/27/otter-7427340_960_720.jpg',
  'https://cdn.pixabay.com/photo/2014/05/28/20/50/wildcat-356805_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/06/26/14/53/bird-7285669_960_720.jpg',
  'https://cdn.pixabay.com/photo/2014/05/28/20/50/wildcat-356805_960_720.jpg',
]
const App = () => {
  return (
    <div>
      <Slide duration={3000}>
        {images.map((image, index) => (
          <div>
            <div key={index} className="each-slide-effect">
              <img src={image} className="image" />

              <a href="https://www.google.com" target="_blank">
                Ver más
              </a>
            </div>
          </div>
        ))}
      </Slide>
      <Clock />
      <div className="tarjets">
        <Tarjet />
        <Tarjet />
        <Tarjet />
        <Tarjet />
      </div>
      <h1>Buenos días</h1>
      <Welcome
        name="Anderson"
        apellidos="Lozano Velasquez"
        url="https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg"
      />
      <Welcome
        name="Pepito"
        apellidos="Lopera"
        url="https://cdn.pixabay.com/photo/2016/10/13/00/03/girl-1736419_960_720.jpg"
      />
    </div>
  )
}
export default App
