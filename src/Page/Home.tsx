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


var test = new ListeChaine();
// Permet de mélanger la liste
const randomize = (tab:[])=>{
  var i, j, tmp;
  for (i = tab.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = tab[i];
      tab[i] = tab[j];
      tab[j] = tmp;
  }
  return tab;
}

//Création d'une liste chainée et remplissage


const Liste = () =>{
  var tab:any = [];
  for(var i=0; i < data.item.length; i++){
    var nbr = [4,16,2];
    var trouve: number[] = [] 
    for(var j=0;j < nbr[i]; j++){
      let indice = Math.floor(Math.random()*data.item[i].length)
      if(trouve.indexOf(indice) === -1){
        tab.push(data.item[i][indice]);      
        trouve.push(indice)
      }
      else{
        j--;
      }
    }
  }
  tab = randomize(tab);
  for(var v=0;v < tab.length; v++){
    let m = new Maillon(tab[v]);
    test.Ajouter(m)
  }
  
}
Liste()


const Home: React.FC<{}> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [play,setPlay] = React.useState(false);
  const [reset, setReset] = React.useState(test);
  const [team, setTeam] = React.useState(false);
  const [manche, setManche] = React.useState(false);
  const taille = useMediaQuery(theme.breakpoints.down('sm')); 
  const [joue, setJoue] = React.useState(false);

 
  const Start = () =>{
    setJoue(false)
    setTeam(true)
  }

  const End = () => {
    setPlay(false);
    setReset(Liste());
  }


  const CloseTeam = () =>{
    setTeam(false)
    setManche(true)
  }

  const CloseManche = () => {
    setManche(false)
    setPlay(true)
  }

  const changeIconeJoue = () => {
    if(joue){
      setJoue(false)
    }
    else{
      setJoue(true)
    }
  }

  const Liste = () =>{
    var tab:any = [];
    for(var i=0; i < data.item.length; i++){
      var nbr = [4,16,2];
      var trouve: number[] = [] 
      for(var j=0;j < nbr[i]; j++){
        let indice = Math.floor(Math.random()*data.item[i].length)
        if(trouve.indexOf(indice) === -1){
          tab.push(data.item[i][indice]);      
          trouve.push(indice)
        }
        else{
          j--;
        }
      }
    }
    tab = randomize(tab);
    for(var v=0;v < tab.length; v++){
      let m = new Maillon(tab[v]);
      test.Ajouter(m)
    }
    return test
  }


  const equipe =
 
  
  <Dialog
    open={team}
    fullScreen={true}
    fullWidth={true}
        maxWidth= "lg"      
  >
    <Grid container className={classes.bandeau}></Grid>    
      <Grid container justify="center" alignItems="center" className={classes.fond2}>
        <Grid item xs={12} md={12}>
          
            
            {taille === false &&
            <div>
            <Typography variant="h1" component="h3" gutterBottom className={classes.alignement}> Manche 1</Typography>
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
   
    <Typography variant="h5" component="h3" gutterBottom className={classes.alignement}> Constitué vos équipes </Typography>
    <img src={teamimg}  height="150" alt='Logo équipe'></img>
           
    </Grid>
       
  
      <Grid container justify="center" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={CloseTeam}
            style={{fontSize: 20 }}
          >
          Go
        </Button>
      
      </Grid>
     </>
      }    
       {taille === false &&
    <>  
    <Grid container justify="center" alignItems="center" className={classes.titre2}>
   
    <Typography variant="h4" component="h3" gutterBottom className={classes.alignement}> Constitué vos équipes <br></br>
    
    <img src={teamimg}  height="250" alt='Logo équipe'></img>
    </Typography>
   
           
           
    </Grid>
       
  
      <Grid container justify="center" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={CloseTeam}
            style={{fontSize: 30 }}
          >
          Go
        </Button>
      
      </Grid>
     </>
      }    
  </Dialog>

const manche1 =
 
  
<Dialog
  open={manche}
  fullScreen={true}
  fullWidth={true}
      maxWidth= "lg"      
>
  <Grid container className={classes.bandeau}></Grid>    
    <Grid container justify="center" alignItems="center" className={classes.fond2}>
      <Grid item xs={12} md={12}>
        
          
          {taille === false &&
          <div>
          <Typography variant="h1" component="h3" gutterBottom className={classes.alignement}> Manche 1</Typography>
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
  Vous devez décrire <b>les mots</b>. <br></br>
  Vous ne pouvez pas <b>prononcer des mots de la même famille</b> ou qui <b>'sonnent pareil'</b>.<br></br>
   Vous ne pouvez pas traduire les mots ou épeler le mot. <br></br>
   Vous pouvez passser les mots en <b>touchant la croix</b> ou <b>les valider avec le boutton vert</b>.         </Typography>
  </Grid>
     

    <Grid container justify="center" alignItems="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={CloseManche}
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
  Vous devez décrire <b>les mots</b>. <br></br>
  Vous ne pouvez pas <b>prononcer des mots de la même famille</b> ou qui <b>'sonnent pareil'</b>.<br></br>
   Vous ne pouvez pas traduire les mots ou épeler le mot. <br></br>
   Vous pouvez passser les mots en <b>touchant la croix</b> ou <b>les valider avec le boutton vert</b>.
         </Typography>
         
  </Grid>
     

    <Grid container justify="center" alignItems="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={CloseManche}
          style={{fontSize: 30 }}
        >
         L'équipe 1 commence
      </Button>
    
    </Grid>
   </>
    }    
</Dialog>
 

  return (
    <>
   
    {play===false &&
    <>
    {taille === false && joue === false &&
    <Grid container className={classes.bandeau}>
      <Grid item md={4}><Button><LiveHelpIcon style={{ fontSize: 80 }}/></Button></Grid>
      <Grid item md={4}></Grid>
      <Grid item md={4}><Button onClick={()=>changeIconeJoue()}><VolumeOffIcon style={{ fontSize: 80 }}/></Button></Grid>
    </Grid>
}

{taille === false && joue &&
    <Grid container className={classes.bandeau}>
      <Grid item md={4}><Button><LiveHelpIcon style={{ fontSize: 80 }}/></Button></Grid>
      <Grid item md={4}></Grid>
      <Grid item md={4}><Button onClick={()=>changeIconeJoue()}><VolumeDownIcon style={{ fontSize: 80 }}/></Button></Grid>
    </Grid>
}

{taille && joue === false &&

 
    <Grid container className={classes.bandeau}>
      <Grid item xs={4}><Button><LiveHelpIcon style={{ fontSize: 60 }}/></Button></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}><Button onClick={()=>changeIconeJoue()}><VolumeOffIcon style={{ fontSize: 60 }}/></Button></Grid>
    </Grid>
  
}

{taille && joue &&

 
<Grid container className={classes.bandeau}>
  <Grid item xs={4}><Button><LiveHelpIcon style={{ fontSize: 60 }}/></Button></Grid>
  <Grid item xs={4}></Grid>
  <Grid item xs={4}><Button onClick={()=>changeIconeJoue()}><VolumeDownIcon style={{ fontSize: 60 }}/></Button></Grid>
</Grid>

}


    <div className={classes.fond}>
    {taille &&
    <Grid container className={classes.titre} justify="center" alignItems="center">   
  
<Grid item xs={12}  >
<img src={logo} alt='Logo'></img>
  </Grid>
      <img src={carte}  height="300" alt='Logo'></img>
    </Grid>
}
{taille === false &&
    <Grid container className={classes.titre} justify="center" alignItems="center">   
  
<Grid item xs={12}  >
<img src={logo} height="200" alt='Logo'></img>
  </Grid>
  <Grid item xs={12}  >
      <img src={carte}  height="400" alt='Logo'></img>
      </Grid>
    </Grid>
}
    <Grid container className={classes.bouton}  justify="center" alignItems="center">      
    <Grid item>  
    {taille === false &&
     
      <Button className={classes.start} onClick={() => {Start()}} style={{fontSize: 32 }}  variant="contained" color="secondary">Lancer une partie</Button>
      
    }
     {taille &&
     
     <Button className={classes.start} onClick={() => {Start()}} style={{fontSize: 25 }}   variant="contained" color="secondary">Lancer une partie</Button>
     
   }
     </Grid>
    
      </Grid>
      </div>
      </>
      }
       {play===true &&
       <Game end={End} reset={reset}/>
       }

       {manche1}
       {equipe}
      
         <Audio joue={joue}/>
       
       
    </>
  );
};

export default Home;
