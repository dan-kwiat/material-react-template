import useWindowSize from './useWindowSize'

const BREAKPOINT = 800

const useIsMobile = () => {
  return useWindowSize().innerWidth < BREAKPOINT
}

export default useIsMobile
