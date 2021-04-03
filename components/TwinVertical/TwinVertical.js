import React from 'react'
import { TwinVertical } from './TwinVertical.style'

const TwinVerticalComponent = ({ imageOne, imageTwo }) => {
  return (
    <TwinVertical>
      <div className="twin-image">
        <img src={imageOne} />
      </div>
      <div className="twin-image">
        <img src={imageTwo} />
      </div>
    </TwinVertical>
  )
}

export default TwinVerticalComponent
