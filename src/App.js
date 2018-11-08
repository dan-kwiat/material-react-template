import React, { Component, useState } from 'react'
import { useIsMobile } from './hooks'
import Drawer from './components/Drawer'
import AppBar from './components/AppBar'
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar'
import './App.css'
import '@material/react-drawer/dist/drawer.css'
import '@material/react-list/dist/list.css'
import '@material/react-top-app-bar/dist/top-app-bar.css'
import '@material/react-material-icon/dist/material-icon.css'

const AppLayout = () => {
  const isMobile = useIsMobile()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div className={isMobile ? null : 'desktop-drawer-container'}>
      <Drawer
        isMobile={isMobile}
        isOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <div className={isMobile ? null : 'desktop-drawer-app-content'}>
        <AppBar
          isMobile={isMobile}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <TopAppBarFixedAdjust>
          <div style={{ textAlign: 'center', fontSize: '1.5em', }}>
            {[...new Array(100)].map((x, i) => <p key={i}>{i}</p>)}
          </div>
        </TopAppBarFixedAdjust>
      </div>
    </div>
  )
}

export default AppLayout
