import React from 'react'
import PropTypes from 'prop-types'
import TopAppBar from '@material/react-top-app-bar'
import MaterialIcon from '@material/react-material-icon'

const renderDrawerIcon = onClick => (
  <MaterialIcon
    icon='menu'
    onClick={onClick}
  />
)

const AppBar = ({ isDesktop, setIsDrawerOpen }) => (
  <TopAppBar
    title='Title'
    fixed
    navigationIcon={isDesktop ? null : renderDrawerIcon(() => setIsDrawerOpen(true))}
  />
)
AppBar.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  setIsDrawerOpen: PropTypes.func.isRequired,
}

export default AppBar