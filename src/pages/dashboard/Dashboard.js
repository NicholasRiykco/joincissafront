import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SideNav } from "../../components/sideNav/SideNav";
import Logo from "../../images/test.jpg";
import { useNavigate } from "react-router-dom";
import DocImage from "../../images/Group 10.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
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
              style={{ color: "#000000" }}
            >
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
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          <Grid container spacing={4} direction="row" alignItems="center">
            {[
              "Solutions Architect (Consulting)",
              "CISSA Graduate Program 2024",
              "Technology Sales Specialist",
              "Customer Success Manager",
              "Project Manager (Melbourne)",
              "Data Analyst (Brisbane)",
              "Data Strategy Manager",
              "Enterprise Security Architect",
            ].map((text, index) => (
              <Grid item xs={3}>
                <Card
                  sx={{ maxWidth: 345 }}
                  onClick={() => {
                    navigate("/edit", { state: { title: text } });
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={DocImage}
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
