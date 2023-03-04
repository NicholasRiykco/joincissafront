import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';



import {SideNav} from '../../components/sideNav/SideNav';
import Logo from '../../images/test.jpg';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        >
          <SideNav />
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Grid container spacing={2} direction="row" alignItems="center" >
          {['Optiver', 'IMC Trading', 'Atlassian', 'Citadel', 'REA Group', 'ANZ', 'CommBank', 'NAB', 'Google'].map((text, index) => (
            <Grid item xs={2}> 
               <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={Logo}
                  title="document"
                />
                <CardContent>
                  <Typography gutterBottom variant="h7" component="div">
                    {text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          </Grid>
        </Box> 
      </Box>
    </div>
  );
}
