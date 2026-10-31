import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

function App() {

  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="grid min-h-screen">
              <AnimatePresence>
                {showWelcome ? (
                  <motion.div
                    key="welcome"
                    className="col-start-1 row-start-1"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <WelcomePage />
                  </motion.div>
                ) : (
                  <motion.div
                    key="home"
                    className="col-start-1 row-start-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <HomePage />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
