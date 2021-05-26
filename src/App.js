import { KeyboardArrowUpRounded } from '@material-ui/icons'
import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Footer, Header, Main, Navbar, Section } from './components'
import { HashLink } from 'react-router-hash-link'

const App = () => {
  const [showScroll, setShowScroll] = useState(false)
  const [open, setOpen] = useState(false)

  const openNavHandler = () => {
    setOpen(!open)
  }

  const closeNavHandler = () => {
    setOpen(false)
  }

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 24) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 24) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)
  return (
    <Router>
      <HashLink to='/'>
        <motion.div initial={{ opacity: showScroll ? 1 : 0, y: showScroll ? '200%' : 0 }} animate={{ opacity: showScroll ? 1 : 0, y: showScroll ? 0 : '200%', transition: { duration: 0.3 } }} onClick={scrollTop} className={'w-12 h-12 rounded-full shadow-md bg-blue-300 flex justify-center items-center fixed bottom-8 right-8 lg:bottom-12 lg:right-12 z-20 hover:shadow-xl hover:bg-blue-400 cursor-pointer'}>
          <KeyboardArrowUpRounded className='text-white' />
        </motion.div>
      </HashLink>
      <Navbar open={open} openNavHandler={openNavHandler} closeNavHandler={closeNavHandler} />
      <div onClick={closeNavHandler}>
        <Header />
        <Main />
        <Section />
        <Footer />
      </div>
    </Router>
  )
}

export default App
