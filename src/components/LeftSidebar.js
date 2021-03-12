import useStyle from './layout/styles'


const LeftSidebar = ()=>{

   const classes = useStyle() ;
  return (
    <div className={classes.LeftSidebar}>
        منوی سمت چپ
    </div>
  );
}

export default LeftSidebar;
