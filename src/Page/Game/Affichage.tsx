const Affichage = (props: any) => {
  console.log(props.value) 
  return (
    <>
        <h1 >{props.value}</h1>
    </>
  );
};

export default Affichage;
