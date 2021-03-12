import { Grid } from '@material-ui/core';
import useStyle from '../layout/styles'
import BehtarinKhabarnegaranBox from './BehtarinKhabarnegaranBox';
import UserImage from './userImage';
import UserNameAndId from './UserNameAndId';


const LeftSidebar = ()=>{

   const classes = useStyle() ;
  return (
    <div className={classes.LeftSidebar}>
      <Grid container direction={'row'}>
        <Grid item>
          <UserNameAndId/>
        </Grid>
        <Grid item>
          <UserImage/>
        </Grid>
      </Grid>
      <BehtarinKhabarnegaranBox/>
    </div>
  );
}

export default LeftSidebar;
