import React from 'react';
import AOS from 'aos';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import 'aos/dist/aos.css';
import { Grid, Typography, Button } from '@material-ui/core';
import Game from './Game';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titre:{
    height: "50vh"
  },
  start:{
    backgroundColor: "#4897D8",
  }
}));
const Home: React.FC<{}> = () => {
  const classes = useStyles();
  const [play,setPlay] = React.useState(false);

  const Start = () =>{
    console.log("ici")
    setPlay(true);
  }
  return (
    <>
    {play===false &&
    <>
    <Grid container className={classes.titre}>
    <Grid item md={12}></Grid>
    <Grid item md={4}></Grid>
<Grid item xs={12} md={4}><Typography variant="h6">Time's go</Typography></Grid>
<Grid item xs={12} md={4}></Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}>  <Button className={classes.start} onClick={() => {Start()}}>Lancer une partie</Button>
      </Grid>
    
      </Grid>
      </>
      }
       {play===true &&
       <Game/>
       }
    </>
  );
};

export default Home;
