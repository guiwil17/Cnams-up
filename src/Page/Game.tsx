import React from 'react';
import AOS from 'aos';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import 'aos/dist/aos.css';
import * as data from './Game/data.json';
import { Grid, Typography, Button,Dialog, DialogTitle, Avatar, DialogContent, DialogContentText, DialogActions, PaperProps, Paper } from '@material-ui/core';
import Draggable from 'react-draggable';
import ListeChaine from '../Classe/ListeChaine';
import Maillon from '../Classe/Maillon';
import Affichage from './Game/Affichage'
import Noeud from './../Classe/Noeud';
import File from './../Classe/File';
import Compteur from './Game/Compteur';
import Manche from './Game/Manche';
import ArbreBinaire from './../Classe/ArbreBinaire';


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
  start:{
    backgroundColor: "#4897D8",
  }
}));



var liste: string[] = [];
var test = new ListeChaine();


//Création d'une liste chainée ici

const Liste = () =>{
  //console.log(data.celebrite[1]);
  for(var i=0; i < data.item.length; i++){
    var nbr = [3,15,2];
    var trouve: number[] = [] 
    for(var j=0;j < nbr[i]; j++){
      let indice = Math.floor(Math.random()*data.item[i].length)
      if(trouve.indexOf(indice) === -1){
        let m = new Maillon(data.item[i][indice])
        test.Ajouter(m)
        trouve.push(indice)
      }
      else{
        j--;
      }
    }
  }
  test.Afficher()
}
Liste()
var file = new File();
const Game: React.FC<{}> = () => {
  const equipe = [0,1]  
  const classes = useStyles();
  const [valeur, SetValeur] = React.useState(test.premier.valeur)
  const [position, SetPosition] = React.useState(test.premier)
  const [team, SetTeam] = React.useState(equipe[0])
  const [go, SetGo] = React.useState(true)
  const [open, setOpen] = React.useState(false);
  const [point_equipe1, setPoints1] = React.useState(0)
  const [point_equipe2, setPoints2] = React.useState(0)
  const [openManche, setOpenManche] = React.useState(false);
  const [manche, setManche] = React.useState(0);
  const [resultat, setResultat] = React.useState(new ArbreBinaire(-1, "début", 0));

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
    else if (position.suivant == null && file.longueur == 0){
      console.log("Manche fini")
      resultat.ajouter(point_equipe1, "equipe 1", manche+1);    

      resultat.ajouter(point_equipe2, "equipe 2", manche+1);
      setResultat(resultat)           
      SetGo(false)
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
    console.log(point_equipe1)
    console.log(point_equipe2)
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

  const AddManche = () =>{
    setManche(manche+1)
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
    >
      <DialogTitle style={{ cursor: 'move' }} >
        <Grid container justify="center" alignItems="center">
          <Grid item xs={5}></Grid>
          <Grid item>
            <Avatar className={classes.add}>
            </Avatar>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>

      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          L'équipe [...] doit jouer
    </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Grid container >
          <Grid item xs={3}></Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClose}
            >
              C'est parti
          </Button>
          </Grid>
          <Grid item xs={2}></Grid>         
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
  
  return (
    <>
    <Grid container className={classes.titre}>
      <Compteur timeout={timeOut} go={go}></Compteur>
      <Affichage value={valeur}/>
      {manche <= 2 &&
      <Manche open={openManche} manche={manche} nextManche={AddManche} score={resultat} handleChange={handleCloseManche}></Manche>
      }
      {
        manche > 2 &&
        <h1>Fin du jeu !!!!</h1>
      }
      <Button onClick={() => {change()}}>Valider</Button>
      <Button onClick={() => {Passer()}}>Passer</Button>
      {modal}
      </Grid>
    </>
  );
};

export default Game;
