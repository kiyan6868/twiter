import useStyle from './layout/styles'
import {Grid, Typography} from '@material-ui/core'

const RightSidebar = ()=>{

   const classes = useStyle() ;
  return (
    <div className={classes.RightSidebar}>
      <Grid container direction = {'row'} alignItems = {'center'}>
        <Grid item>
          <img className={classes.logo} src = {"images/twitter-logo.png"}/>
        </Grid>
        <Grid item>
          <Typography className={classes.logoText}>توییتر فارسی</Typography>
        </Grid>
      </Grid>
      <Typography className={classes.daghTarinHashtagText}>داغ ترین هشتک ها</Typography>
      <Grid container direction={'column'}>
        <Grid container direction={'row'}>
          <Grid item>
            <img className={classes.hashtagIcon} src={'images/hashtag-icon.jpg'}/>
          </Grid>
          <Grid item>
            <Typography>پرچم_دار_جدید</Typography>
          </Grid>
        </Grid>

        <Grid container direction={'row'}>
          <Grid item>
            <img className={classes.hashtagIcon} src={'images/hashtag-icon.jpg'}/>
          </Grid>
          <Grid item>
            <Typography>پرچم_دار_جدید</Typography>
          </Grid>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default RightSidebar;
