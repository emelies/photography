import React from 'react'
import { HeroFooter } from './HeroFooter.style'
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

// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const FooterComponent = props => {
  return (
    <HeroFooter>
      <div></div>
      <div className="dots">{/* <img src="/dots.svg" /> */}</div>

      <Link href="/">
        <a>
          <motion.img
            className="logo-big"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src="/logo-circle.svg"
          />
          <motion.img
            className="logo-small"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src="/logo-small.svg"
          />
        </a>
      </Link>
    </HeroFooter>
  )
}

export default FooterComponent
