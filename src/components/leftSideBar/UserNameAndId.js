import { Grid, Typography } from '@material-ui/core';
import useStyle from '../layout/styles'


const UserNameAndId = ()=>{

   const classes = useStyle() ;
  return (
    <Grid container direction={'column'} className={classes.userNameAndId}>
        <Grid item>
          <Typography className={classes.userNameText}>سعید محمدی</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.userIdText}>said.p</Typography>
        </Grid>
    </Grid>
  );
}

export default UserNameAndId;
