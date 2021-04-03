import React from 'react'
import { HeroImage } from './HeroImage.style'

const ImageComponent = props => {
  return (
    <HeroImage>
      <div className="background-image">
        <img src="/photo/mimmi4.jpg" />
      </div>
    </HeroImage>
  )
}

export default ImageComponent
