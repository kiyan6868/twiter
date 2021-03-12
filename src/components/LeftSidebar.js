import useStyle from './layout/styles'


const LeftSidebar = ()=>{

   const classes = useStyle() ;
  return (
    <div className={classes.LeftSidebar}>
        left side bar
    </div>
  );
}

export default LeftSidebar;
