import * as React from 'react';


const Compteur = (props: any) => {
  const [compte, SetCompte] = React.useState(30);

  React.useEffect(()=>{
    
    const s = setInterval(() => {    
      if(props.reset === true){        
        SetCompte(30)
        props.changeReset()
      }
      if(props.go === true)  {
      if(compte > 0){
        SetCompte(c => c - 1);
    }
    else{
      props.timeout()
      SetCompte(30)
      
    }
  }
      }, 1000);
  
      return () => clearInterval(s);
  }, [compte, props.go,  props.reset])

  

 
  return (
    <>
        <h1>{compte}</h1>
    </>
  );
};

export default Compteur;
