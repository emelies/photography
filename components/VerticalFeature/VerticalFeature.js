import React from 'react'
import { VerticalFeature } from './VerticalFeature.style'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Ease = [0.43, 0.13, 0.23, 0.96]

export const textIn = {
  start: {
    opacity: 1,
  },
  end: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: Ease,
    },
  },
}

const VerticalFeatureComponent = ({ image, title, text, name }) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })
  return (
    <VerticalFeature ref={ref}>
      <div className="horizontal">
        <img src={image} />
      </div>
      <motion.div
        variants={textIn}
        initial="hide"
        animate={inView ? 'start' : 'end'}
        className="column"
      >
        <div className="sticky">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </motion.div>
    </VerticalFeature>
  )
}

export default VerticalFeatureComponent
