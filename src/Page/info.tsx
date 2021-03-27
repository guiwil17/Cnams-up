import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button, useMediaQuery, Dialog } from '@material-ui/core';
import Game from './Game';
import ListeChaine from '../Classe/ListeChaine';
import Maillon from '../Classe/Maillon';
import * as data from './Game/data.json';
import carte from '../img/carte.png'
import logo from '../img/logo.png'
import teamimg from '../img/team.png'
import boing from './boing.mp3'
import accueil from './accueil.mp3'
import Audio from "./Game/Audio"
import {Howl, Howler} from 'howler';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    titre:{
      height: "70vh"    
    },
    fond:{
      backgroundColor: "#ffd3b8"
    },
    fond2:{
      height: "20vh",
    },
    start:{  
    },
    titre2:{
      height: "50vh"
    }, 
    bandeau:{
      height: "10vh",
      backgroundColor: "#df4937"
    },     
    alignement:{
      textAlign: "center",
    },  
    bouton:{
      height: "20vh",
    }
  }));

const Info = (props: any) => {
    

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(props.open);
    const taille = useMediaQuery(theme.breakpoints.down('sm')); 
    const [joue, setJoue] = React.useState(false);
    
    const HandleCloseOPen = () => {
        setOpen(false)
        props.close()
    }
    const modal = 
<Dialog
  open={props.open}
  fullScreen={true}
  fullWidth={true}
      maxWidth= "lg"      
>
  <Grid container className={classes.bandeau}></Grid>    
    <Grid container justify="center" alignItems="center" className={classes.fond2}>
      <Grid item xs={12} md={12}>
        
          
          {taille === false &&
          <div>
          <Typography variant="h1" component="h3" gutterBottom className={classes.alignement}></Typography>
          <Typography variant="h3" component="h2" gutterBottom className={classes.alignement}>Règle</Typography>  
          </div>
          }
          {taille &&
          <div>
          <Typography variant="h2" component="h3" gutterBottom className={classes.alignement}> Manche 1</Typography>
          <Typography variant="h4" component="h4" gutterBottom className={classes.alignement}> Règle</Typography>  
          </div>
          }
         
      </Grid>
    </Grid>

  {taille &&
  <>  
  <Grid container justify="center" alignItems="center" className={classes.titre2}>
 
  <Typography variant="h5" component="h4" gutterBottom className={classes.alignement}> 
 
 Cette application est libre d'accès, elle ne nécessite aucun paiement. Il sera bientôt proposé aux utilisateurs de créer leur propre mot.
 Ce jeu a été créé par Monsieur Guillaume SOL dans le cadre de ses études au CNAM, il est inspiré du célèbre jeu "Time's up". 
 Faites vous plaisir à jouer !!!
        </Typography>
  </Grid>
     

    <Grid container justify="center" alignItems="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={HandleCloseOPen}
          style={{fontSize: 20 }}
        >
           L'équipe 1 commence
      </Button>
    
    </Grid>
   </>
    }    
     {taille === false &&
  <>  
  <Grid container justify="center" alignItems="center" className={classes.titre2}>
 
  <Typography variant="h4" component="h6" gutterBottom className={classes.alignement}> 
  Cette application est libre d'accès, elle ne nécessite aucun paiement. Il sera bientôt proposé aux utilisateurs de créer leur propre mot.
 Ce jeu a été créé par Monsieur Guillaume SOL dans le cadre de ses études au CNAM, il est inspiré du célèbre jeu "Time's up". 
 Faites vous plaisir à jouer !!!
         </Typography>
         
  </Grid>
     

    <Grid container justify="center" alignItems="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={HandleCloseOPen}
          style={{fontSize: 30 }}
        >
         Lire les régles
      </Button>
      <Button
          variant="contained"
          color="secondary"
          onClick={HandleCloseOPen}
          style={{fontSize: 30 }}
        >
        Commencer à jouer
      </Button>
    
    </Grid>
   </>
    }    
</Dialog>
        
    return (
      <>
     {modal}
      </>
    );
  };
  
  export default Info;
  