import useStyle from './layout/styles'


const MainPart = ()=>{

   const classes = useStyle() ;
  return (
    <div className={classes.MainPart}>
        main part
    </div>
  );
}

export default MainPart;
