import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Box,Typography,Avatar} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(12),
    },
  },
  small: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));
const fn = () => {
    alert('user Selected')
  };
export default function SimplePaper() {
  const classes = useStyles();

  return (
      <>
      
      <div className={classes.root}>
      <Paper elevation={3} onClick={fn}>
      <Box p={1}>
          <Typography variant="p"><Avatar size={classes.small}>P</Avatar>customer</Typography>
        </Box>
        </Paper>
      
    </div>
    <div className={classes.root}>
      <Paper elevation={3} onClick={fn}>
      <Box p={1}>
          <Typography variant="p"><Avatar size={classes.small}>L</Avatar>customer</Typography>
        </Box>
        </Paper>
    </div>
    <div className={classes.root} >
      <Paper elevation={3} onClick={fn}>
      <Box p={1}>
          <Typography variant="p"><Avatar size={classes.small}>I</Avatar>customer</Typography>
        </Box>
        </Paper>
   
    </div>
    <p style={{'color' : 'GrayText', 'fontSize':'small'}}>----------------Expired chats------------------</p>
    <div className={classes.root}>
      <Paper elevation={3} onClick={fn}>
      <Box p={1}>
          <Typography variant="p"><Avatar size={classes.small}>U</Avatar></Typography>customer
        </Box>
        </Paper>
      
    </div>
    <div className={classes.root}>
      <Paper elevation={3} onClick={fn}>
      <Box p={1}>
          <Typography variant="p"><Avatar size={classes.small}>T</Avatar>customer</Typography>
        </Box>
        </Paper>
    </div>
      </>
    
  );
}