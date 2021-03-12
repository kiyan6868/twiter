import { Grid, Typography } from '@material-ui/core';
import useStyle from '../layout/styles'



const BehtarinKhabarnegaranBox = ()=>{

   const classes = useStyle() ;
  return (
    <Grid container direction={'column'} className={classes.behtarinKhabarnegaranBox}>
        <Grid item className={classes.khabrnegarItem}>
            <Typography  className={classes.khabarnegaranText}>بهترین خبرنگاران</Typography>
        </Grid>
        <Grid item>
            <Grid container direction={'row'} alignItems={'center'} className={classes.khabrnegarItem}>
                <Grid item>
                    <div className={classes.khabrnegaranImage}></div>
                </Grid>
                <Grid item>
                    <Typography>هادی غسگری</Typography>
                    <Typography className={classes.userIdText}>@hadi</Typography>
                </Grid>
            </Grid>
            <Grid container direction={'row'} alignItems={'center'}>
                <Grid item>
                    <div className={classes.khabrnegaranImage}></div>
                </Grid>
                <Grid item>
                    <Typography>غلی اصغزی</Typography>
                    <Typography className={classes.userIdText}>@ali</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>

  );
}

export default BehtarinKhabarnegaranBox;
