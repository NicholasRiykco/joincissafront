import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

import { SideNav } from "../../components/sideNav/SideNav";
// import { postReview } from '../../utils/api';
import { baseDevelopmentURL } from "../../utils/constants/index";

const URL = baseDevelopmentURL;

export async function postReview(params) {
  // const endpoint = URL + "/api/review";
  console.log(params);
  // const dataFetched = await axios({
  //   url: endpoint,
  //   method: "POST",
  //   data: params,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  axios.defaults.withCredentials = true;
  const dataFetched = await axios.post(`${baseDevelopmentURL}/review`, {
    data: {
      params,
    },
  });

  console.log(dataFetched.data);
  return dataFetched.data;
}

const drawerWidth = 240;

export const Create = (props) => {
  let query = "";
  const [reviewQuery, setReviewQuery] = useState("");
  const [reviewResults, setReviewResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleInput = (e) => {
    console.log(e.target.value);
    setReviewQuery(e.target.value);
  };

  const handleReview = async (e) => {
    query = reviewQuery;
    postReview(query).then((r) => {
      setReviewResults(r.data);
      console.log("Review Results: ", reviewResults);
    });
  };
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            borderBottom: 1,
            borderColor: "#E5E7EB",
          }}
          style={{ background: "white" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ color: "#636161" }}
            >
              Untitled Document
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
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <TextField
            placeholder="Please enter your job listing here..."
            multiline
            rows={20}
            maxRows={Infinity}
            fullWidth
            onSelect={handleInput}
          />
          <Box textAlign="center" padding="30px" position="relative">
            <Button
              disabled={false}
              size="large"
              variant="contained"
              onClick={() => {
                handleReview();
                setShowResults(true);
              }}
            >
              Review
            </Button>
            {showResults ? (
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                padding="30px"
              >
                {reviewResults}
              </Typography>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};
