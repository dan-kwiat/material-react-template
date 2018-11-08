import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavDrawer, {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
} from '@material/react-drawer'
import List, {
  ListItem,
  ListItemText,
  ListItemGraphic,
  ListItemMeta,
} from '@material/react-list'
import MaterialIcon from '@material/react-material-icon'

const DrawerList = ({ onItemClick }) => (
  <List>
    <ListItem onClick={onItemClick}>
      <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
      <ListItemText primaryText='List Item 1' />
      <ListItemMeta meta='meta info' />
    </ListItem>
    <ListItem onClick={onItemClick}>
      <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
      <ListItemText primaryText='List Item 1' />
    </ListItem>
    <ListItem onClick={onItemClick}>
      <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
      <ListItemText primaryText='List Item 3' />
    </ListItem>
  </List>
)
DrawerList.propTypes = {
  onItemClick: PropTypes.func.isRequired,
}

const Drawer = ({ isMobile, isOpen, setIsDrawerOpen }) => {
  return (
    <NavDrawer
      modal={isMobile}
      open={isMobile ? isOpen : undefined}
      onOpen={() => setIsDrawerOpen(true)}
      onClose={() => setIsDrawerOpen(false)}
    >
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
          onItemClick={() => isMobile && setIsDrawerOpen(false)}
        />
      </DrawerContent>
    </NavDrawer>
  )
}
Drawer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsDrawerOpen: PropTypes.func.isRequired,
}

export default Drawer