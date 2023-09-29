import React, { useState } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import HouseIcon from '@mui/icons-material/House';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AdminInpPanel from './AdminInpPanel';

function AdminPanel() {
  const navigate = useNavigate(); // Get the navigate function
const btnLogout = ()=>{
  navigate('/login')
}
  const listItem = [
    {
      text: "HTML",
      icon: <Button></Button>,
      route: "/quizscreen", // Specify the route to navigate to
    },
    {
      text: "CSS",
      icon: <Button></Button>,
      route: "/quizscreen", // Specify the route to navigate to
    },
    {
      text: "JS Quiz 1",
      icon: <Button></Button>,
      route: "/quizscreen", // Specify the route to navigate to
    },
    {
      text: "JS Quiz 2",
      icon: <Button></Button>,
      route: "/quizscreen", // Specify the route to navigate to
    },
  ];

  const handleRouter = (route) => {
    navigate(route); // Use navigate to change the route
  };

  const [openDrawer, setOpenDrawer] = useState(false); // State to track whether the drawer is open or closed

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer); // Toggle the state to open/close the drawer
  };

  return (
    <>
    {/* App Bar Left-Side */}
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer} // Open/close the drawer when the menu button is clicked
            >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MuiDrawer
        anchor="left"
        open={openDrawer} 
        onClose={toggleDrawer}
      >
        <List>
          {listItem.map((item, index) => {
            const { text, icon, route } = item;
            return (
              <ListItem key={text} onClick={() => handleRouter(route)}>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
          <Button className='mt-auto mb-4 mx-auto' variant='contained' color='error' onClick={btnLogout}>Logout</Button>
      </MuiDrawer>
     
    </div>
    {/* Admin Panel Right-Side */}
<AdminInpPanel/>
</>
  );
}

export default AdminPanel;
