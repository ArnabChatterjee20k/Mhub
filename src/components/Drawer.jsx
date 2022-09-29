import React from 'react'
import List  from '@mui/material/List'
import ListItem  from '@mui/material/ListItem'
import ListItemButton  from '@mui/material/ListItemButton'
import ListItemText  from '@mui/material/ListItemText'
import SwipeableDrawer  from '@mui/material/SwipeableDrawer'
import grey  from '@mui/material/colors/grey'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useDrawer } from '../context/DrawerContext/DrawerContextProvider'
import Box  from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

const Drawer = () => {
  const {visible,setVisible} = useDrawer();
  const toggleNav = ()=>{
    setVisible(nav=>!nav)
  }
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={visible}
      onClose={()=>toggleNav()}
      onOpen={()=>toggleNav()}
    >
      <Box sx={{ borderTop:`2px solid ${grey[500]}`,borderTopLeftRadius:8,borderTopRightRadius:8}}>
        <IconButton sx={{display:"block",marginInline:"auto"}} onClick={toggleNav}>
          <ExpandMoreIcon fontSize='large'/>
        </IconButton>
        <List sx={{display:"flex",flexDirection:"column" }}>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      
    </SwipeableDrawer>
  )
}

export default Drawer