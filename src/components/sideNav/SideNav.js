import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Logo from '../../images/Logo.png';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const drawerWidth = 240;

export const SideNav = (props) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          PaperProps={{
            sx: {
              backgroundColor: "#103C85",
            }
          }}
          open
        >
          <div>
            <Toolbar>
                <img src={Logo} alt="logo" width="140"/>  
            </Toolbar>  
            <Divider />   
            <List>
                {['Dashboard', 'Trash'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton button component={Link} to={"../"+text.toLowerCase()}>
                    <ListItemIcon>
                        {index % 2 === 0 ? <HomeOutlinedIcon style={{ color: 'white' }} /> : 
                        <DeleteOutlineOutlinedIcon style={{ color: 'white' }} />}
                    </ListItemIcon>
                    <ListItemText primary={text} style={{ color: 'white' }}/>
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Analytics', 'Schedules', 'Style Guides', 'Premium'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton disabled = {true} button component={Link} to={"../"+text.toLowerCase()}> 
                    <ListItemIcon style={{ color: 'white' }}>
                        {index === 0 ? <ShowChartOutlinedIcon /> : 
                        index === 1 ? <CalendarMonthOutlinedIcon /> :
                        index === 2 ? <StyleOutlinedIcon />: 
                        <WorkspacePremiumOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} style={{ color: 'white' }} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider />
            <List style={{ position: "absolute", bottom: 0}}>
                {['Help', 'Settings', 'Logout'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton disabled = {index === 2? false:true} button component={Link} to={"../"+text.toLowerCase()}> 
                    <ListItemIcon style={{ color: 'white' }}>
                        {index === 0 ? <HelpOutlineOutlinedIcon /> : 
                        index === 1 ? <SettingsOutlinedIcon /> :
                        <LogoutOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} style={{ color: 'white' }} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
          </div>
        </Drawer>
      </Box>
    </Box>
  );
};

