import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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

function SideNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Dashboard', 'Trash'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeOutlinedIcon style={{ color: 'white' }} /> : <DeleteOutlineOutlinedIcon style={{ color: 'white' }} />}
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
            <ListItemButton disabled = {true}> 
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
      <List style={{ position: "absolute", bottom: 0}}>
        {['Help', 'Settings', 'Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton disabled = {index === 2? false:true}> 
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
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ background: 'white' }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" style={{ color: '#000000' }}>
            Insert Searchbar here
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          Insert Riykco's textbox
        </Typography>
      </Box>
    </Box>
  );
}

SideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideNav;