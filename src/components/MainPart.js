import { Typography } from '@material-ui/core';
import useStyle from './layout/styles'


const MainPart = ()=>{

   const classes = useStyle() ;
  return (
    <div className={classes.MainPart}>
      <Typography>
        منوی اصلی
      </Typography>
    </div>
  );
}

export default MainPart;
