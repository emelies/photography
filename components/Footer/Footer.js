import React from 'react'
import { Footer } from './Footer.style'
import Link from 'next/link'
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
      delay: 2,
      duration: 5,
      ease: Ease,
    },
  },
}

const FooterComponent = props => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })
  return (
    <div ref={ref}>
      <Footer>
        <motion.div
          variants={textIn}
          initial="hide"
          animate={inView ? 'start' : 'end'}
          className="wrapper"
        >
          <Link href="/creative">
            <a>
              <h1>Creative</h1>
            </a>
          </Link>
          <Link href="/motherhood">
            <a>
              <h1>Motherhood</h1>
            </a>
          </Link>
          <Link href="/portraits">
            <a>
              <h1>Portraits</h1>
            </a>
          </Link>
        </motion.div>

        <motion.div
          variants={textIn}
          initial="hide"
          animate={inView ? 'start' : 'end'}
          className="wrapper-two"
        >
          <div></div>
          <Link href="/about">
            <a>
              <h1>About</h1>
            </a>
          </Link>
          <div className="social-media">
            <Link href="https://www.instagram.com/galapaglobe/">
              <a target="_blank" rel="norefferer noopener">
                <img src="/instagram-black.svg" />
              </a>
            </Link>
          </div>
        </motion.div>
      </Footer>
    </div>
  )
}

export default FooterComponent
