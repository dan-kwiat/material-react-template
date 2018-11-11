import useWindowSize from './useWindowSize'

const BREAKPOINT = 840

const useIsDesktop = () => {
  return useWindowSize().innerWidth >= BREAKPOINT
}

export default useIsDesktop
