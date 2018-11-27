import React, { useState } from 'react'
import { AppBar, AppContent, Drawer } from './components'
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar'
import './App.css'
import '@material/react-drawer/dist/drawer.min.css'
import '@material/react-list/dist/list.min.css'
import '@material/react-top-app-bar/dist/top-app-bar.min.css'
import '@material/react-material-icon/dist/material-icon.min.css'

const AppLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div className='desktop-drawer-container'>
      <Drawer
        isOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <div className='desktop-drawer-app-content'>
        <AppBar
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
