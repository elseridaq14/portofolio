import React, { useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ScrollToSection = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  useLayoutEffect(() => {
    // // console.log('ScrollToSection useLayoutEffect triggered.')
    // console.log('Current location state:', location.state)
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo
      console.log('Attempting to scroll to ID:', id)
      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            // console.log('Element found:', element)
            element.scrollIntoView({ behavior: 'smooth' })
          } else {
            // console.log('Element not found for ID:', id)
          }
          navigate(location.pathname, { replace: true, state: {} })
        //   console.log('Location state cleared.')
        }, 0)
      }
    }
  }, [location, navigate])

  return <>{children}</>
}

export default ScrollToSection 