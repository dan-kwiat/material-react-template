import React, { useState } from 'react'
import PropTypes from 'prop-types'
import List, {
  ListItem,
  ListItemText,
  ListItemGraphic,
  ListItemMeta,
} from '@material/react-list'
import MaterialIcon from '@material/react-material-icon'

const DrawerList = ({ onItemClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <List
      singleSelection
      selectedIndex={selectedIndex}
      handleSelect={setSelectedIndex}
    >
      <ListItem onClick={onItemClick}>
        <ListItemGraphic graphic={<MaterialIcon icon='home'/>} />
        <ListItemText primaryText='Home' />
      </ListItem>
      <ListItem onClick={onItemClick}>
        <ListItemGraphic graphic={<MaterialIcon icon='search'/>} />
        <ListItemText primaryText='Search' />
      </ListItem>
      <ListItem onClick={onItemClick}>
        <ListItemGraphic graphic={<MaterialIcon icon='settings'/>} />
        <ListItemText primaryText='Settings' />
        <ListItemMeta meta='meta info' />
      </ListItem>
    </List>
  )
}
DrawerList.propTypes = {
  onItemClick: PropTypes.func.isRequired,
}

export default DrawerList