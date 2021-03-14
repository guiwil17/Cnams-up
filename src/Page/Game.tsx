import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Button,Dialog,  DialogActions, useMediaQuery } from '@material-ui/core';
import Affichage from './Game/Affichage'
import Noeud from './../Classe/Noeud';
import File from './../Classe/File';
import Compteur from './Game/Compteur';
import Manche from './Game/Manche';
import ArbreBinaire from './../Classe/ArbreBinaire';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import mot from '../img/mot.png'
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  add: {
    backgroundColor: "#F8A055",
    textAlign: "center"
  },
  titre:{
    height: "50vh"
  },  
  affichage:{
    backgroundImage: `url(${mot})`,
    height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }, 
  affichage2:{
    backgroundImage: `url(${mot})`,
    //height: "50vh",
    backgroundSize: "340px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }, 
  bandeau:{
    height: "10vh",
    backgroundColor: "#df4937"
  },
  bouton:{
    height: "30vh"   
  },
  modal:{
    height: "70vh"   
  },
  start:{
    backgroundColor: "#4897D8",
  }
}));




var file = new File();
const Game = (props: any) => {
  const equipe = [0,1]  
  const theme = useTheme();
  const classes = useStyles();
  const [valeur, SetValeur] = React.useState(props.reset.premier.valeur)
  const [position, SetPosition] = React.useState(props.reset.premier)
  const [team, SetTeam] = React.useState(equipe[0])
  const [go, SetGo] = React.useState(true)
  const [open, setOpen] = React.useState(false);
  const [point_equipe1, setPoints1] = React.useState(0)
  const [point_equipe2, setPoints2] = React.useState(0)
  const [openManche, setOpenManche] = React.useState(false);
  const [manche, setManche] = React.useState(0);
  const [resultat, setResultat] = React.useState(new ArbreBinaire(-1, "début", 0));
  const [reset, setReset] = React.useState(false);
  const taille = useMediaQuery(theme.breakpoints.down('sm'));

  const change = () => {
    if(position.suivant === null && file.longueur !== 0){
      console.log("ici")
      SetValeur(file.defiler().valeur);
      if(team === 0){
        setPoints1(point_equipe1+1)
      }
      else{
        setPoints2(point_equipe2+1)
      }
    }
    else if (position.suivant === null && file.longueur === 0){
      console.log("Manche fini")
      if(team === 0){
        SetTeam(1)
       
      }
      else{
        SetTeam(0)       
      }
      resultat.ajouter(manche*10, "equipe 1", manche+1,point_equipe1);    
      resultat.ajouter(manche*10*3, "equipe 2", manche+1,point_equipe2);
      console.log(point_equipe1)
      console.log(point_equipe2)
      setResultat(resultat)           
      SetGo(false)
      setPoints1(0);
      setPoints2(0);
      setReset(true)
      handleOpenManche()
    }
    else{
      SetPosition(position.suivant);
      SetValeur(position.valeur);
      if(team === 0){
        setPoints1(point_equipe1+1)
      }
      else{
        setPoints2(point_equipe2+1)
      }    
    }
    
  }
  const timeOut = () => {
    console.log("remise à 0")    
    SetGo(false)
    if(team === 0){
      SetTeam(1)
      handleOpen()
    }
    else{
      SetTeam(0)
      handleOpen()
    }
        
  }

  const EndGame = () => {
    props.end()
  }

  const AddManche = () =>{
    setManche(manche+1)
    console.log(manche)
    if(manche < 2){
      SetValeur(props.reset.premier.valeur)
      SetPosition(props.reset.premier)
      SetGo(true)      
    }    
    else{
      SetGo(false)
    }

  }
  const handleOpenManche = () => {    
    setOpenManche(true)
  }

  const handleCloseManche = () => {
    setOpenManche(false)    
  }
  

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {    
      SetGo(true)
      setOpen(false)   
  }
  const modal =
    <Dialog
      open={open}
      aria-labelledby="draggable-dialog-title"
      fullWidth={true}  
      fullScreen={true}   
    >
      <Grid container className={classes.bandeau}></Grid>
      
      <Grid container justify="center" alignItems="center" >
        <GroupIcon style={{ fontSize: 80 }}/>
        
        </Grid>

     
       
        <Grid container justify="center" alignItems="center" className={classes.modal}>
          <Grid item > <h1>  L'équipe {team+1} doit jouer</h1></Grid>
       
        </Grid>        
    
      <DialogActions>
        <Grid container justify="center" alignItems="center">
         
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClose}
              style={{fontSize: 40 }}
            >
              C'est parti
          </Button>
          </Grid>
                    
      </DialogActions>
    </Dialog>

  const Passer = () => { 
    var noeud = new Noeud(valeur)      
    file.enfiler(noeud);
    console.log(file.longueur)
    if(position.suivant !== null){
      SetPosition(position.suivant);
      SetValeur(position.valeur);
    }    
    else{
      console.log("ici")
      SetValeur(file.defiler().valeur);
    }
    }

    const handleChangeReset = () =>{
      setReset(false)
    }
  
  return (
    <>
    <Grid container className={classes.bandeau}></Grid>
      <Grid container justify="center" alignItems="center">
      <Compteur timeout={timeOut} go={go} reset={reset} changeReset={handleChangeReset}></Compteur>
      </Grid>
     
    <Grid container className={classes.titre}>
      {taille === false &&
       <Grid container justify="center" alignItems="center" className={classes.affichage}>
       <Affichage value={valeur}/>
       </Grid>
      }

{taille === true &&
       <Grid container justify="center" alignItems="center" className={classes.affichage2}>
       <Affichage value={valeur}/>
       </Grid>
      }
   
      {manche <= 2 &&    
      <Manche open={openManche} manche={manche} nextManche={AddManche} score={resultat} handleChange={handleCloseManche} end={EndGame} team={team}></Manche>
      }
      {
        manche > 2 &&
        <h1>Fin du jeu !!!!</h1>
      }       
      {modal}
      </Grid>
      {taille === false &&
      <Grid container justify="center" alignItems="center" className={classes.bouton}>
         <Grid item md={4}><Button onClick={() => {change()}} size="large" ><CheckCircleRoundedIcon  style={{ fontSize: 170, color: 'green'}} /></Button></Grid>
         <Grid md={4} item><Button onClick={() => {Passer()}} size="large"><CancelRoundedIcon fontSize="large" style={{ fontSize: 170 , color: 'red'}}/></Button></Grid>      
      </Grid>
}
{taille &&
      <Grid container justify="center" alignItems="center" className={classes.bouton}>
      <Grid item xs={6}><Button onClick={() => {change()}} size="large" ><CheckCircleRoundedIcon  style={{ fontSize: 130, color: 'green'}} /></Button></Grid>
      <Grid xs={6} item><Button onClick={() => {Passer()}} size="large"><CancelRoundedIcon fontSize="large" style={{ fontSize: 130 , color: 'red'}}/></Button></Grid>      
   </Grid>
      }
    
    </>
  );
};

export default Game;
