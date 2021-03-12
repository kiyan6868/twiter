import useStyle from '../layout/styles'
import {Grid, Typography} from '@material-ui/core'


const DaghtarinHashtags = ()=>{

  const classes = useStyle() ;
  return (
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
  );
}

export default DaghtarinHashtags;
