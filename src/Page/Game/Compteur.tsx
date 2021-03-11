import * as React from 'react';
import AOS from 'aos';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import 'aos/dist/aos.css';





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




const Compteur = (props: any) => {
  const classes = useStyles();
  const [compte, SetCompte] = React.useState(10);
  const [fini, setFini] = React.useState(false);
 
  console.log(props.go)
  React.useEffect(()=>{
    
    const s = setInterval(() => {
      console.log(props.go)     
      if(props.go === true)  {
      if(compte > 0){
        SetCompte(c => c - 1);
    }
    else{
      setFini(true)
      props.timeout()
      SetCompte(10)
    }
  }
      }, 1000);
  
      return () => clearInterval(s);
  }, [compte, props.go])

  

 
  return (
    <>
        <h1>{compte}</h1>
    </>
  );
};

export default Compteur;
