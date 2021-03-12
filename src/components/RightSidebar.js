import useStyle from './layout/styles'


const RightSidebar = ()=>{

   const classes = useStyle() ;
  return (
    <div className={classes.RightSidebar}>
        right side bar
    </div>
  );
}

export default RightSidebar;
