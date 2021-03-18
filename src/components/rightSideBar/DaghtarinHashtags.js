import useStyle from '../layout/styles'
import {ButtonBase, Grid, Typography} from '@material-ui/core'

const hashtagsData = [
  'پرچم_دار_جدید', 'ما_آمده_ایم'
]

const DaghtarinHashtags = ()=>{

  const classes = useStyle() ;
  return (
      <Grid container direction={'column'}>
        {
          hashtagsData.map(item=>
            <ButtonBase className={classes.buttonBase}>
              <Grid container direction={'row'}>
                <Grid item>
                  <img className={classes.hashtagIcon} src={'images/hashtag-icon.jpg'}/>
                </Grid>
                <Grid item>
                  <Typography>{item}</Typography>
                </Grid>
              </Grid>
            </ButtonBase>
          )
        }
        
      </Grid>
  );
}

export default DaghtarinHashtags;
