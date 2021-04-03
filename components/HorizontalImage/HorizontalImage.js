import React from 'react'
import { HorizontalImage } from './HorizontalImage.style'
import { motion } from 'framer-motion'

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }

const HorizontalImageComponent = ({ image }) => {
  return (
    <HorizontalImage>
      <motion.div
        className="horizontal"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          exit: {
            opacity: 0,
            transition: { transition },
          },
        }}
      >
        <img src={image} />
      </motion.div>
    </HorizontalImage>
  )
}

export default HorizontalImageComponent
