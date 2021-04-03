import React from 'react'
import { HeroHeader } from './HeroHeader.style'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// export const logoOut = {
//   start: {
//     scale: 1,
//     opacity: 1,
//   },
//   end: {
//     scale: 0,
//     opacity: 0,
//     transition: {
//       duration: 0.8,
//     },
//   },
// }

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const HeaderComponent = props => {
  return (
    <AnimatePresence>
      <HeroHeader>
        <motion.div
          exit={{ opacity: 0 }}
          transition={transition}
          className="wrapper"
        >
          <Link href="/creative">
            <a>
              <h1>Creative</h1>
            </a>
          </Link>
          <Link href="/portraits">
            <a>
              <h1>Portraits</h1>
            </a>
          </Link>
          <Link href="/motherhood">
            <a>
              <h1>Motherhood</h1>
            </a>
          </Link>
        </motion.div>

        <motion.div
          exit={{ opacity: 0 }}
          transition={transition}
          className="wrapper-two"
        >
          <Link href="/about">
            <a className="about">
              <h1>About</h1>
            </a>
          </Link>

          <div className="social-media">
            <Link href="https://www.instagram.com/galapaglobe/">
              <a target="_blank" rel="norefferer noopener">
                <img src="/instagram.svg" />
              </a>
            </Link>
          </div>
        </motion.div>
      </HeroHeader>
    </AnimatePresence>
  )
}

export default HeaderComponent
