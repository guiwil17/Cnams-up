import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button, useMediaQuery, Dialog } from '@material-ui/core';


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
      height: "60vh"
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
    },
    btn1:{
      marginBottom: theme.spacing(5),
    }
  }));

const Info = (props: any) => {
    

    const classes = useStyles();
    const theme = useTheme();
    const [open2, setOpen2] = React.useState(props.open);
    const [number, setNumber] = React.useState(1);

    const taille = useMediaQuery(theme.breakpoints.down('sm')); 
    
    const HandleCloseOPen = () => {
        setNumber(1)
        setOpen2(true)
    }



    const HandleCloseOPen2 = () => {
      if(number === 3){
        setOpen2(false)
        props.close()
      }
      else{
        setNumber(number+1)
      }
  }

  const Moins = () => {
    setNumber(number-1)    
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
          <Typography variant="h3" component="h2" gutterBottom className={classes.alignement}>Informations</Typography>  
          </div>
          }
          {taille &&
          <div>
          <Typography variant="h4" component="h4" gutterBottom className={classes.alignement}> Informations</Typography>  
          </div>
          }
         
      </Grid>
    </Grid>

  {taille &&
  <>  
  <Grid container justify="center" alignItems="center" className={classes.titre2}>
 
  <Typography variant="h5" component="h4" gutterBottom className={classes.alignement}> 
 
 Cette application est libre d'accès, elle ne nécessite aucun paiement.<br></br>
 Ce jeu a été créé par Monsieur Guillaume SOL dans le cadre de ses études au CNAM, il est inspiré du célèbre jeu "Time's up".<br/>
 Il sera bientôt proposé aux utilisateurs de créer leur propre mot.
  
 Le plus important pour moi est que chacun prenne plaisir à jouer !!!
        </Typography>
  </Grid>
     

  <Grid container justify="center" alignItems="center">
      
      <Button
        variant="contained"
        color="secondary"
        onClick={HandleCloseOPen}
        style={{fontSize: 15 }}
      >
       Lire les régles
    </Button>
    <Grid item  xs={1}>
      </Grid>
    <Button
        variant="contained"
        color="secondary"
        onClick={props.start}
        style={{fontSize: 15 }}
      >
      Jouer
    </Button>
  </Grid>
   </>
    }    
     {taille === false &&
  <>  
  <Grid container justify="center" alignItems="center" className={classes.titre2}>
 
  <Typography variant="h4" component="h6" gutterBottom className={classes.alignement}> 
  Cette application est libre d'accès, elle a été créé afin de pouvoir accèder de partout et n'importe quand au jeu du CNAM's up.<br></br>
 Ce jeu a été créé par Monsieur Guillaume SOL dans le cadre de ses études au CNAM, il est inspiré du célèbre jeu "Time's up".<br/>
 Il sera bientôt proposé aux utilisateurs de nouvelle fonctionalitée dont la création de leur propre mot.<br/>
  
 Le plus important pour moi est que chacun prenne plaisir à jouer ! Alors bon jeu et n'hésitez pas à me faire des retours si vous le souhaitez !! 

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
      <Grid item  xs={1}>
        </Grid>
      <Button
          variant="contained"
          color="secondary"
          onClick={props.start}
          style={{fontSize: 30 }}
        >
        Commencer à jouer
      </Button>
    </Grid>
   </>
    }    
</Dialog>


const modal2 =
 
  
<Dialog
  open={open2}
  fullScreen={true}
  fullWidth={true}
      maxWidth= "lg"      
>
  <Grid container className={classes.bandeau}></Grid>    
    <Grid container justify="center" alignItems="center" >
      <Grid item xs={12} md={12}>
        
          
          {taille === false &&
          <div>
          <Typography variant="h1" component="h3" gutterBottom className={classes.alignement}> Manche {number}</Typography>
          <Typography variant="h3" component="h2" gutterBottom className={classes.alignement}>Règle</Typography>  
          </div>
          }
          {taille &&
          <div>
          <Typography variant="h2" component="h3" gutterBottom className={classes.alignement}> Manche {number}</Typography>
          <Typography variant="h4" component="h4" gutterBottom className={classes.alignement}> Règle</Typography>  
          </div>
          }
         
      </Grid>
    </Grid>

  {taille &&
  <>  
  <Grid container justify="center" alignItems="center" className={classes.titre}>
 

{number === 1 &&
 <Typography variant="h5" component="h4" gutterBottom className={classes.alignement}> 
 Vous devez décrire <b>les mots</b>. <br></br>
 Vous ne pouvez pas <b>prononcer des mots de la même famille</b> ou qui <b>'sonnent pareil'</b>.<br></br>
  Vous ne pouvez pas traduire les mots ou épeler le mot. <br></br>
  Vous pouvez passer les mots en <b>touchant la croix</b> ou <b>les valider avec le bouton vert</b>.         </Typography>
}

    {number === 2 &&
     <Typography variant="h5" component="h4" gutterBottom className={classes.alignement}> 
          Vous ne pouvez prononcer <b>qu'un seul mot.</b><br></br>
          Vous ne pouvez prononcer <b>qu'une seule proposition par carte</b>.<br></br>
           Vous pouvez <b>passer les cartes</b> qui ne vous conviennent pas.
          </Typography>  
    }
     {number === 3 &&
     <Typography variant="h5" component="h4" gutterBottom className={classes.alignement}> 
       Vous devez <b>mimer</b> le mot. <br></br>
       Vous pouvez<b> fredonner</b> ou <b>faire des bruitages</b>. <br></br>
       Vous <b>ne pouvez pas parler</b>.
          </Typography>  
    }
         
  </Grid>
     
  { number === 1 &&
<>
 <Grid container justify="center" alignItems="center" className={classes.btn1}>
 <Button
          variant="contained"
          color="secondary"
          onClick={HandleCloseOPen2}
          style={{fontSize: 20 }}
        >
         Manche {number+1}
      </Button>
   </Grid>
   </>
}

{ number === 2 &&
<>
<Grid container justify="center" alignItems="center" className={classes.btn1}>
        <Button
          variant="contained"
          color="secondary"
          onClick={Moins}
          style={{fontSize: 20 }}
        >
         Manche {number-1}
      </Button>
      <Grid xs={1}></Grid>
      <Button
          variant="contained"
          color="secondary"
          onClick={HandleCloseOPen2}
          style={{fontSize: 20 }}
        >
         Manche {number+1}
      </Button>
    </Grid>
   </>
}

  { number === 3 &&
<>
<Grid container justify="center" alignItems="center" className={classes.btn1}>        
<Button
          variant="contained"
          color="secondary"
          onClick={Moins}
          style={{fontSize: 20 }}
        >
         Manche {number-1}
      </Button>
      <Grid xs={1}></Grid>
      <Button
          variant="contained"
          color="secondary"
          onClick={HandleCloseOPen2}
          style={{fontSize: 20 }}
        >
        Retour au menu
      </Button>
    </Grid>
   </>
}
   </>
    }    
     {taille === false &&
  <>  
  <Grid container justify="center" alignItems="center" className={classes.titre}>
 
 {number === 1 &&
 
  <Typography variant="h4" component="h6" gutterBottom className={classes.alignement}> 
  Vous devez décrire <b>les mots</b>. <br></br>
  Vous ne pouvez pas <b>prononcer des mots de la même famille</b> ou qui <b>'sonnent pareil'</b>.<br></br>
   Vous ne pouvez pas traduire les mots ou épeler le mot. <br></br>
   Vous pouvez passer les mots en <b>touchant la croix</b> ou <b>les valider avec le bouton vert</b>.
         </Typography>
         

 }
    {number === 2 &&
     <Typography variant="h4" component="h6" gutterBottom className={classes.alignement}> 
          Vous ne pouvez prononcer <b>qu'un seul mot.</b><br></br>
          Vous ne pouvez prononcer <b>qu'une seule proposition par carte</b>.<br></br>
           Vous pouvez <b>passer les cartes</b> qui ne vous conviennent pas.
          </Typography>  
    }
     {number === 3 &&
     <Typography variant="h4" component="h6" gutterBottom className={classes.alignement}> 
       Vous devez <b>mimer</b> le mot. <br></br>
       Vous pouvez<b> fredonner</b> ou <b>faire des bruitages</b>. <br></br>
       Vous <b>ne pouvez pas parler</b>.
          </Typography>  
    }
         
  </Grid>
     
{ number === 1 &&
<>
 <Grid container justify="center" alignItems="center" className={classes.btn1}>
 <Button
          variant="contained"
          color="secondary"
          onClick={HandleCloseOPen2}
          style={{fontSize: 30 }}
        >
         Manche {number+1}
      </Button>
   </Grid>
   </>
}

{ number === 2 &&
<>
<Grid container justify="center" alignItems="center" className={classes.btn1}>
        <Button
          variant="contained"
          color="secondary"
          onClick={HandleCloseOPen2}
          style={{fontSize: 30 }}
        >
         Manche {number-1}
      </Button>
      <Grid xs={1}></Grid>
      <Button
          variant="contained"
          color="secondary"
          onClick={HandleCloseOPen2}
          style={{fontSize: 30 }}
        >
         Manche {number+1}
      </Button>
    </Grid>
   </>
}

{ number === 3 &&
<>
<Grid container justify="center" alignItems="center" className={classes.btn1}>        
<Button
          variant="contained"
          color="secondary"
          onClick={HandleCloseOPen2}
          style={{fontSize: 30 }}
        >
         Manche {number-1}
      </Button>
      <Grid xs={1}></Grid>
      <Button
          variant="contained"
          color="secondary"
          onClick={HandleCloseOPen2}
          style={{fontSize: 30 }}
        >
        Retour au menu
      </Button>
    </Grid>
   </>
}
    
   </>
    }    
</Dialog>

        
    return (
      <>
     {modal}
     {modal2}
      </>
    );
  };
  
  export default Info;
  