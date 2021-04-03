import React from 'react'
import { TextFeature } from './TextFeature.style'
import { motion } from 'framer-motion'
import Link from 'next/link'
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

const TextFeatureComponent = ({ title, textOne, textTwo, titleTwo }) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })
  return (
    <TextFeature ref={ref}>
      <motion.div
        variants={textIn}
        initial="hide"
        animate={inView ? 'start' : 'end'}
      >
        <div className="columns">
          <h1>{title}</h1>
          <p>{textOne}</p>
        </div>
      </motion.div>
      <motion.div
        variants={textIn}
        initial="hide"
        animate={inView ? 'start' : 'end'}
        className="columns"
      >
        <div>
          <h2>{titleTwo}</h2>
          <p>{textTwo}</p>
          <div className="social-media">
            <Link href="https://www.instagram.com/galapaglobe/">
              <a target="_blank" rel="norefferer noopener">
                <img src="/instagram-black.svg" />
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </TextFeature>
  )
}

export default TextFeatureComponent
