import React from 'react'
import { Header } from './Header.style'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const HeaderComponent = props => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ transition }}
      >
        <Header>
          <div className="wrapper">
            <Link href="/">
              <a>
                <motion.img
                  className="logo-big"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  src="/logo-big-black.svg"
                />
                <motion.img
                  className="logo-small"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  src="/logo-small-black.svg"
                />
              </a>
            </Link>
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
          </div>

          <div className="wrapper-two">
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
          </div>
        </Header>
      </motion.div>
    </AnimatePresence>
  )
}

export default HeaderComponent
