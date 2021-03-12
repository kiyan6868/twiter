import { Grid } from '@material-ui/core';
import useStyle from '../layout/styles'


const UserImage = ()=>{

   const classes = useStyle() ;
  return (
    <Grid container>
        <Grid item>
          <div className={classes.profileImageBox}>
             <img src={''}/>
          </div>
        </Grid>
    </Grid>
  );
  
}

export default UserImage;
