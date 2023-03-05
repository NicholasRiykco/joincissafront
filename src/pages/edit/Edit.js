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
import { useLocation } from "react-router-dom";
import TextEditor from "../../components/textEditorComponents/components/QuillTextEditor";
// import { postReview } from '../../utils/api';

const URL = "http://localhost:3050";

// export async function postReview(params) {
//   const endpoint = URL + "/api/review";
//   console.log(params);
//   const dataFetched = await axios({
//     url: endpoint,
//     method: "POST",
//     data: params,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   console.log(dataFetched.data);
//   return dataFetched.data;
// }

const drawerWidth = 240;

export const Edit = (props) => {
  let query = "";
  const [reviewQuery, setReviewQuery] = useState("");
  const [reviewResults, setReviewResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleInput = (e) => {
    console.log(e.target.value);
    setReviewQuery(e.target.value);
  };

  // const handleReview = async (e) => {
  //   query = reviewQuery;
  //   postReview(query).then((r) => {
  //     setReviewResults(r.data);
  //     console.log("Review Results: ", reviewResults);
  //   });
  // };
  const { state } = useLocation();
  // const title = props?.state?.title;
  console.log(state?.title);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
          style={{ background: "white" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ color: "#000000" }}
            >
              {state?.title}
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
          <TextEditor></TextEditor>
        </Box>
      </Box>
    </div>
  );
};
