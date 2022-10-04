import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './App.css'
import Clock from './components/Clock'

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
    </div>
  )
}
export default App
