import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TopAppBar from '@material/react-top-app-bar'
import MaterialIcon from '@material/react-material-icon'

const renderDrawerIcon = onClick => (
  <MaterialIcon
    icon='menu'
    onClick={onClick}
  />
)

const AppBar = ({ isMobile, setIsDrawerOpen }) => (
  <TopAppBar
    title='Title'
    navigationIcon={isMobile ? renderDrawerIcon(() => setIsDrawerOpen(true)) : null}
  />
)
AppBar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  setIsDrawerOpen: PropTypes.func.isRequired,
}

export default AppBar