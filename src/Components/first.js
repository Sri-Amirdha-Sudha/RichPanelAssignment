import React from 'react';
import Facebook from './facebook';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import img from './Richpanel.png'

  
  const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 200,
    },
  });
  
  export default function MediaCard() {
    const classes = useStyles();
  
    return (
    <center>
    <br />
    <br />
    <br />
    <br />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="Rich Panel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              HelpDesk
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <Facebook />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </center>
    );
  }