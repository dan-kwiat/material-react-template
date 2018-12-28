import React, { useState } from 'react'
import { AppBar, AppContent, Drawer } from './components'
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar'
import './App.scss'

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
