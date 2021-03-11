import * as React from 'react';
import AOS from 'aos';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import 'aos/dist/aos.css';
import { Grid, Typography, Button } from '@material-ui/core';



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


const Affichage = (props: any) => {
  const classes = useStyles();
  console.log(props.value)
  const affiche = () => {
    
  }
  return (
    <>
        <h1>{props.value}</h1>
    </>
  );
};

export default Affichage;
