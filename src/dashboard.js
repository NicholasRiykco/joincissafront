import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              Dashboard
            </Typography>
            <Typography component="p">
              Welcome to your dashboard. Here you can view and manage your data.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" component="h4">
              Chart 1
            </Typography>
            <Typography component="p">
              This is the first chart.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" component="h4">
              Chart 2
            </Typography>
            <Typography component="p">
              This is the second chart.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" component="h4">
              Table
            </Typography>
            <Typography component="p">
              This is the table of data.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
