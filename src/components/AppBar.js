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

const AppBar = ({ setIsDrawerOpen }) => (
  <>
    <TopAppBar
      className='mobile-appbar'
      title='Title'
      navigationIcon={renderDrawerIcon(() => setIsDrawerOpen(true))}
    />
    <TopAppBar
      className='desktop-appbar'
      title='Title'
      fixed
    />
  </>
)
AppBar.propTypes = {
  setIsDrawerOpen: PropTypes.func.isRequired,
}

export default AppBar