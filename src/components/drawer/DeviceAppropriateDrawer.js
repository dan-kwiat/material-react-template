import React from 'react'
import PropTypes from 'prop-types'
import NavDrawer from '@material/react-drawer'

const DeviceAppropriateDrawer = ({ isOpen, setIsDrawerOpen, children }) => (
  <>
    <NavDrawer
      className='permanent-drawer'
    >
      {children}
    </NavDrawer>
    <NavDrawer
      className='modal-drawer'
      modal
      open={isOpen}
      onOpen={() => setIsDrawerOpen(true)}
      onClose={() => setIsDrawerOpen(false)}
    >
      {children}
    </NavDrawer>
  </>
)
DeviceAppropriateDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsDrawerOpen: PropTypes.func.isRequired,
}

export default DeviceAppropriateDrawer