import React from 'react';
import useStyles from '../../src/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Hacker News
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
