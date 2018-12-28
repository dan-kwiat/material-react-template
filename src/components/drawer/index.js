import React from 'react'
import PropTypes from 'prop-types'
import {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
} from '@material/react-drawer'
import DeviceAppropriateDrawer from './DeviceAppropriateDrawer'
import DrawerList from './DrawerList'

const Drawer = props => (
  <DeviceAppropriateDrawer {...props}>
    <DrawerHeader>
      <DrawerTitle>
        Drawer Title
      </DrawerTitle>
      <DrawerSubtitle>
        Drawer Subtitle
      </DrawerSubtitle>
    </DrawerHeader>
    <DrawerContent>
      <DrawerList
        onItemClick={() => {
          props.setIsDrawerOpen && props.setIsDrawerOpen(false)
        }}
      />
      <a href='/'>test link</a>
    </DrawerContent>
  </DeviceAppropriateDrawer>
)
Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsDrawerOpen: PropTypes.func.isRequired,
}

export default Drawer