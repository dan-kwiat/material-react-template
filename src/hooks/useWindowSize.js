import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

const THROTTLE_LIMIT = 300

const getSize = () => {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  }
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize())

  const handleResize = throttle(
    () => {
      setWindowSize(getSize())
    },
    THROTTLE_LIMIT,
  )

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize