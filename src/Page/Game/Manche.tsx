import * as React from 'react';
import { makeStyles,  useTheme } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  table: {
    minHeight: 100
  },
  table2: {
    minHeight: 100,   
  },
  icon:{  
    height: "500px"
  },
  titre:{
    height: "50vh"
  }, 
  alignement:{
    textAlign: "center",
  },
  fond:{
    height: "20vh",
  },
  score:{
    height: "50vh",
  },
  bandeau:{
    height: "10vh",
    backgroundColor: "#df4937"
  },
  end:{
    height: "50vh",    
  },
  start:{
    backgroundColor: "#4897D8",
  }
}));




const Manche = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open2, setOpen2] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const taille = useMediaQuery(theme.breakpoints.down('sm'));
  const [team1, setTeam1] = React.useState(0);
  const [team2, setTeam2] = React.useState(0);
  var score = props.score;

  var equipe1:any = [0,0,0];
  var equipe2:any = [0,0,0];
 
  
  const Team1 = (racine: any) => {

    if(racine.valeur === null ){            
      console.log("erreur")
      return null;
      }
      else{    
        console.log(racine.equipe)
        if(racine.equipe === "equipe 1"){

         equipe1[racine.manche-1] = racine.point          
        }
        else if (racine.equipe === "equipe 2"){
          equipe2[racine.manche-1] = racine.point                  
        }        

          if(racine.filsGauche !== null ){
              Team1(racine.filsGauche);
          }
          if(racine.filsDroit !== null){
              Team1(racine.filsDroit);
          }
         
      }
  }
  
  

  const handleCloseOpen = () =>{
    setOpen2(false)  
    props.handleChange()
    props.nextManche()
  }

  const EndGame = () =>{
   props.end()
  }

  const handleClose = () => {
    setTeam2(equipe2[0] + equipe2[1] + equipe2[2])
    setTeam1(equipe1[0] + equipe1[1] + equipe1[2]) 
    setOpen2(true)       
    
  }

  if(props.open === true){
    console.log(fullScreen)    
    Team1(score.racine);
    //setTeam1(equipe1)
    //setTeam1(equipe2)
    console.log(equipe1)
    console.log(equipe2)

  }

  const modal =
  <Dialog
    open={props.open}
    fullScreen={true}
    fullWidth={true}
        maxWidth= "lg"      
  >
    <Grid container className={classes.bandeau}></Grid>    
      <Grid container justify="center" alignItems="center" className={classes.fond}>
        <Grid item xs={12} md={12}>
          
            
            {taille === false &&
            <div>
            <Typography variant="h1" component="h3" gutterBottom className={classes.alignement}> Manche {props.manche + 1}</Typography>
            <Typography variant="h3" component="h2" gutterBottom className={classes.alignement}> Fin de manche</Typography>  
            </div>
            }
            {taille &&
            <div>
            <Typography variant="h2" component="h3" gutterBottom className={classes.alignement}> Manche {props.manche + 1}</Typography>
            <Typography variant="h4" component="h4" gutterBottom className={classes.alignement}> Fin de manche</Typography>  
            </div>
            }
           
        </Grid>
      </Grid>

    <div className={classes.score}>
    {taille &&
    <Grid container justify="center" alignItems="center">
    <Grid item xs ={5}  component={Paper}>
    <Grid container justify="center" alignItems="center" >
        <GroupIcon style={{ fontSize: 80 }}/>
        
        </Grid>
        <Typography variant="h5" component="h2" gutterBottom className={classes.alignement}> Equipe 1</Typography>       
    <TableContainer>
      <Table className={classes.table} size="small" >
        <TableHead>
          <TableRow>
          <TableCell>
           
            <Typography variant="h6" component="h5" gutterBottom className={classes.alignement}>  M</Typography>
            </TableCell>   
            <TableCell>              
              <Typography variant="h6" component="h5" gutterBottom className={classes.alignement}>  S</Typography>
              </TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
        {
         equipe1.map((score:any , index:  number)  => (       
            <TableRow key={index}>
              <TableCell component="th" scope="row" >
               
                <Typography variant="h6" component="h5" gutterBottom className={classes.alignement}>  {index+1} </Typography>
              </TableCell>   
              <TableCell component="th" scope="row">
               
                <Typography variant="h6" component="h5" gutterBottom className={classes.alignement}> {score}</Typography>
              </TableCell>              
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item xs={1} ></Grid>
    <Grid item xs ={5} component={Paper}>
    <Grid container justify="center" alignItems="center" >
        <GroupIcon style={{ fontSize: 80 }}/>
        
        </Grid>      
        <Typography variant="h5" component="h2" gutterBottom className={classes.alignement}> Equipe 2</Typography> 
    <TableContainer >
      <Table className={classes.table} size="small" >
        <TableHead>
          <TableRow>
          <TableCell>
          <Typography variant="h6" component="h5" gutterBottom className={classes.alignement}>  M</Typography>
            </TableCell>   
            <TableCell>
            <Typography variant="h6" component="h5" gutterBottom className={classes.alignement}>  S</Typography>
              </TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
        {
         equipe2.map((score:any , index:  number)  => (       
            <TableRow key={index}>
              <TableCell component="th" scope="row">
              <Typography variant="h6" component="h5" gutterBottom className={classes.alignement}>  {index+1} </Typography>
              </TableCell>   
              <TableCell component="th" scope="row">
              <Typography variant="h6" component="h5" gutterBottom className={classes.alignement}> {score}</Typography>
              </TableCell>              
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
    

    </Grid>
    
  

    </Grid>
   
  }

{taille === false &&
    <Grid container justify="center" alignItems="center">
    <Grid item sm ={4} md ={4} component={Paper}>
      <Grid container justify="center" alignItems="center" >
        <GroupIcon style={{ fontSize: 80 }}/>
        </Grid>
        <Typography variant="h4" component="h2" gutterBottom className={classes.alignement}> Equipe 1</Typography>           
    <TableContainer >
      <Table className={classes.table2} size="medium" >
        <TableHead>
          <TableRow>
          <TableCell className={classes.alignement}>
            <Typography variant="h4" component="h2" gutterBottom className={classes.alignement}> Manche</Typography>
            </TableCell>   
            <TableCell className={classes.alignement}>
              
              <Typography variant="h4" component="h2" gutterBottom className={classes.alignement}> Score</Typography>
              </TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
        {
         equipe1.map((score:any , index:  number)  => (       
            <TableRow key={index}>
              <TableCell component="th" scope="row" className={classes.alignement}>
                <Typography variant="h4" component="h2" gutterBottom className={classes.alignement}> {index+1}</Typography>
              </TableCell>   
              <TableCell component="th" scope="row" className={classes.alignement}>
              <Typography variant="h4" component="h2" gutterBottom className={classes.alignement}>  {score}</Typography>
               
              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item xs={1} ></Grid>
    <Grid item sm ={4} md ={4} component={Paper}>
    <Grid container justify="center" alignItems="center" >
        <GroupIcon style={{ fontSize: 80 }}/>
        
        </Grid>
        <Typography variant="h4" component="h2" gutterBottom className={classes.alignement}> Equipe 2</Typography>        
    <TableContainer >
      <Table className={classes.table2} size="medium" >
        <TableHead>
          <TableRow>
          <TableCell className={classes.alignement}>            
            <Typography variant="h4" component="h2" gutterBottom className={classes.alignement}> Manche</Typography>
            </TableCell>   
            <TableCell className={classes.alignement}>              
              <Typography variant="h4" component="h2" gutterBottom className={classes.alignement}>Score</Typography>
              </TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
        {
         equipe2.map((score:any , index:  number)  => (       
            <TableRow key={index}>
              <TableCell component="th" scope="row" className={classes.alignement}>
              <Typography variant="h4" component="h2" gutterBottom className={classes.alignement}> {index+1}</Typography>
              </TableCell>   
              <TableCell component="th" scope="row" className={classes.alignement}>
              <Typography variant="h4" component="h2" gutterBottom className={classes.alignement}> {score}</Typography>
              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Grid>
  

    </Grid>
  }
   </div>
      
       
    <DialogActions>
      <Grid container justify="center" alignItems="center">       
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClose}
            style={{fontSize: 30 }}
          >
            Prochaine manche
        </Button>
       
      </Grid>
    </DialogActions>
  </Dialog>
  const modal2 =
 
  
  <Dialog
    open={open2}
    fullScreen={true}
    fullWidth={true}
        maxWidth= "lg"      
  >
    <Grid container className={classes.bandeau}></Grid>    
      <Grid container justify="center" alignItems="center" className={classes.fond}>
        <Grid item xs={12} md={12}>
          
            
            {taille === false &&
            <div>
            <Typography variant="h1" component="h3" gutterBottom className={classes.alignement}> Manche {props.manche + 2}</Typography>
            <Typography variant="h3" component="h2" gutterBottom className={classes.alignement}>Règle</Typography>  
            </div>
            }
            {taille &&
            <div>
            <Typography variant="h2" component="h3" gutterBottom className={classes.alignement}> Manche {props.manche + 2}</Typography>
            <Typography variant="h4" component="h4" gutterBottom className={classes.alignement}> Règle</Typography>  
            </div>
            }
           
        </Grid>
      </Grid>
  
    {taille &&
    <>  
    <Grid container justify="center" alignItems="center" className={classes.titre}>
   
      {props.manche+2 === 2 &&
       <Typography variant="h5" component="h4" gutterBottom className={classes.alignement}> 
            Vous ne pouvez prononcer <b>qu'un seul mot.</b><br></br>
            Vous ne pouvez prononcer <b>qu'une seule proposition par carte</b>.<br></br>
             Vous pouvez <b>passer les cartes</b> qui ne vous conviennent pas.
            </Typography>  
      }
       {props.manche+2 === 3 &&
       <Typography variant="h5" component="h4" gutterBottom className={classes.alignement}> 
         Vous devez <b>mimer</b> le mot. <br></br>
         Vous pouvez<b> fredonner</b> ou <b>faire des bruitages</b>. <br></br>
         Vous <b>ne pouvez pas parler</b>.
            </Typography>  
      }
           
    </Grid>
       
  
      <Grid container justify="center" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCloseOpen}
            style={{fontSize: 20 }}
          >
           C'est au tour de l'équipe {props.team+1}
        </Button>
      
      </Grid>
     </>
      }    
       {taille === false &&
    <>  
    <Grid container justify="center" alignItems="center" className={classes.titre}>
   
      {props.manche+2 === 2 &&
       <Typography variant="h4" component="h6" gutterBottom className={classes.alignement}> 
            Vous ne pouvez prononcer <b>qu'un seul mot.</b><br></br>
            Vous ne pouvez prononcer <b>qu'une seule proposition par carte</b>.<br></br>
             Vous pouvez <b>passer les cartes</b> qui ne vous conviennent pas.
            </Typography>  
      }
       {props.manche+2 === 3 &&
       <Typography variant="h4" component="h6" gutterBottom className={classes.alignement}> 
         Vous devez <b>mimer</b> le mot. <br></br>
         Vous pouvez<b> fredonner</b> ou <b>faire des bruitages</b>. <br></br>
         Vous <b>ne pouvez pas parler</b>.
            </Typography>  
      }
           
    </Grid>
       
  
      <Grid container justify="center" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCloseOpen}
            style={{fontSize: 30 }}
          >
           C'est au tour de l'équipe {props.team+1}
        </Button>
      
      </Grid>
     </>
      }    
  </Dialog>
 
   
   const fin =
   <Dialog
     open={open2}
     fullScreen={true}
     fullWidth={true}
         maxWidth= "lg"      
   >
     <Grid container className={classes.bandeau}></Grid>    
      <Grid container justify="center" alignItems="center" className={classes.end}>
        <Grid item xs={12} md={12} >
          
            
            {taille === false &&
            <div>
            <Typography variant="h1" component="h3" gutterBottom className={classes.alignement}> Fin de la partie</Typography>
          
            {team1 > team2 &&

<Typography variant="h3" component="h2" gutterBottom className={classes.alignement}>Félicitation à l'équipe 1 </Typography> 
            
            }
              {team1 < team2 &&

<Typography variant="h3" component="h2" gutterBottom className={classes.alignement}>Félicitation à l'équipe 2 </Typography> 
            
            }

{team1 === team2 &&

<Typography variant="h3" component="h2" gutterBottom className={classes.alignement}>Félicitation aux 2 équipes c'est une égalité </Typography> 
            
            }
             
            </div>
            }
            {taille &&
            <div>
            <Typography variant="h2" component="h3" gutterBottom className={classes.alignement}> Manche {props.manche + 1}</Typography>
            <Typography variant="h4" component="h4" gutterBottom className={classes.alignement}> Fin de manche</Typography>  
            </div>
            }
           
        </Grid>
      </Grid>     
       <Grid container justify="center" alignItems="center">
           <Button
             variant="contained"
             color="secondary"
             onClick={EndGame}           
           >
            < HomeRoundedIcon style={{fontSize: 80 }}/>
         </Button>
        
       </Grid>
   </Dialog>
  
 
  return (
    <>
        {modal}
        {
         props.manche + 1 <= 2 &&
         modal2
        }
        {
           props.manche + 1 === 3 &&
           fin
        }
        
    </>
  );
};

export default Manche;
