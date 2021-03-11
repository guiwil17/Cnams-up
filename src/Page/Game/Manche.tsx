import * as React from 'react';
import AOS from 'aos';
import { makeStyles, Theme, useTheme, withStyles } from '@material-ui/core/styles';
import 'aos/dist/aos.css';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';



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
  titre:{
    height: "50vh"
  }, 
  alignement:{
    textAlign: "center",
  },
  start:{
    backgroundColor: "#4897D8",
  }
}));




const Manche = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(props.open);
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const taille = useMediaQuery(theme.breakpoints.down('sm'));
  const [team1, setTeam1] = React.useState([0,0,0]);
  const [team2, setTeam2] = React.useState([0,0,0]);
  var score = props.score;

  var equipe1:any = [0,0,0];
  var equipe2:any = [0,0,0];
  
 
  
  const Team1 = (racine: any) => {
    if(racine.valeur === null ){
       
      //return null if the root node given is empty
      console.log("la")
      return null;
      }
      else{    
   
        if(racine.equipe === "equipe 1"){

         equipe1[racine.manche-1] = racine.valeur        
        }
        else{
          equipe2[racine.manche-1] = racine.valeur        
        }        

          if(racine.filsGauche !== null ){
              console.log("gauche" + racine.valeur)
              Team1(racine.filsGauche);
          }
          if(racine.filsDroit !== null){
              console.log("droit")
              Team1(racine.filsDroit);
          }
         
      }
  }
  
  
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {  
    setOpen(false)  
    props.handleChange()
    props.nextManche()
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
    fullScreen={fullScreen}
    fullWidth={true}
        maxWidth= "lg"      
  >
    <DialogTitle style={{ cursor: 'move' }} >
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={2}>
        <h2 className={classes.alignement}>Manche {props.manche + 1}</h2>
        <h5 className={classes.alignement}>Fin de manche</h5>
        </Grid>
      </Grid>

       
        

    </DialogTitle>
    <DialogContent>
    
    {taille &&
    <Grid container justify="center" alignItems="center">
    <Grid item xs ={4} >
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" >
        <TableHead>
          <TableRow>
          <TableCell>M</TableCell>   
            <TableCell>S</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
        {
         equipe1.map((score:any , index:  number)  => (       
            <TableRow key={index}>
              <TableCell component="th" scope="row" >
                {index+1}
              </TableCell>   
              <TableCell component="th" scope="row">
                {score}
              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item xs={1} ></Grid>
    <Grid item xs ={4} >
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" >
        <TableHead>
          <TableRow>
          <TableCell>M</TableCell>   
            <TableCell>S</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
        {
         equipe2.map((score:any , index:  number)  => (       
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>   
              <TableCell component="th" scope="row">
                {score}
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
    <Grid item sm ={4} md ={4}>
    <TableContainer component={Paper}>
      <Table className={classes.table2} size="medium" >
        <TableHead>
          <TableRow>
          <TableCell className={classes.alignement}>Manche</TableCell>   
            <TableCell className={classes.alignement}>Score</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
        {
         equipe1.map((score:any , index:  number)  => (       
            <TableRow key={index}>
              <TableCell component="th" scope="row" className={classes.alignement}>
                {index+1}
              </TableCell>   
              <TableCell component="th" scope="row" className={classes.alignement}>
                {score}
              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item xs={1} ></Grid>
    <Grid item sm ={4} md ={4}>
    <TableContainer component={Paper}>
      <Table className={classes.table2} size="medium" >
        <TableHead>
          <TableRow>
          <TableCell className={classes.alignement}>Manche</TableCell>   
            <TableCell className={classes.alignement}>Score</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
        {
         equipe2.map((score:any , index:  number)  => (       
            <TableRow key={index}>
              <TableCell component="th" scope="row" className={classes.alignement}>
                {index+1}
              </TableCell>   
              <TableCell component="th" scope="row" className={classes.alignement}>
                {score}
              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Grid>
  

    </Grid>
  }
      
       
    </DialogContent>
    <DialogActions>
      <Grid container justify="center" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClose}
          >
            Prochaine manche
        </Button>
       
      </Grid>
    </DialogActions>
  </Dialog>
  

 
  return (
    <>
        {modal}
    </>
  );
};

export default Manche;
