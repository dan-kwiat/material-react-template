import React, { useState } from 'react'
import { useIsDesktop } from './hooks'
import { AppBar, AppContent, Drawer } from './components'
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar'
import './App.css'
import '@material/react-drawer/dist/drawer.min.css'
import '@material/react-list/dist/list.min.css'
import '@material/react-top-app-bar/dist/top-app-bar.min.css'
import '@material/react-material-icon/dist/material-icon.min.css'

const AppLayout = () => {
  const isDesktop = useIsDesktop()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div className={isDesktop ? 'desktop-drawer-container' : null}>
      <Drawer
        isDesktop={isDesktop}
        isOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <div className={isDesktop ? 'desktop-drawer-app-content' : null}>
        <AppBar
          isDesktop={isDesktop}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <TopAppBarFixedAdjust>
          <AppContent />
        </TopAppBarFixedAdjust>
      </div>
    </div>
  )
}

export default AppLayout
