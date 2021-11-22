import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Image1 from '../../../assets/images/gps-servicio.jpg'
import Image2 from '../../../assets/images/gps-vehicular.jpg'
import "./styles.css"

function SliderHero(){

  return(
    <div className="hero">
      <img src={Image1} />
    </div>
  )
}

export default SliderHero