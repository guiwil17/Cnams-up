const Affichage = (props: any) => {
  const passer = () => {    
    props.timeout()
    }
  return (
    <>
    {
      props.value === props.first && 
      passer()
    }
    {
      props.value !== props.first &&
      <h1 >{props.value}</h1>
         }
        
    </>
  );
};

export default Affichage;
