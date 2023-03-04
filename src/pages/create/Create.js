import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import {SideNav} from '../../components/sideNav/SideNav';
import { postReview } from '../../utils/api';

const drawerWidth = 240;



export const Create = (props) => {
  let query = '';
  const [reviewQuery, setReviewQuery] = useState('');
  const [reviewResults, setReviewResults] = useState(null);
  
  const handleReview = (e) => {
    e.preventDefault();
    console.log(e);
    query = reviewQuery;
    postReview(query).then((r) => {
      setReviewResults(r.data);
      console.log('Search Results: ', reviewResults);
    });
  };
  

    return (
        <div>
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
                Create
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
            <TextField
              placeholder="Please enter your job listing here..."
              multiline
              rows={20}
              maxRows={Infinity}
              fullWidth
            />
            <Box textAlign='center' padding="30px" position="relative">
              <Button
                disabled={false}
                size="large"
                variant="contained"
                onClick={() => {
                  handleReview();
                }}
              >
                Review
              </Button>
                <Typography gutterBottom variant="body2" component="div">
                  {reviewResults}
                </Typography>
            </Box>
            
          </Box> 
        </Box>
      </div>
    );


}