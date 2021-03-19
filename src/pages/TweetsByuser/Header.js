import { Grid, Typography } from '@material-ui/core';
import useStyle from '../../components/layout/styles'


const Header= ()=>{

   const classes = useStyle() ;
  return (
    <div className={classes.MainPart}>
        <Grid container direction={'row'} alignItems={'center'}>
            <img className={classes.homeIcon} src={'images/user.svg'}/>
            <Typography className={classes.headerTitle}>غلی احمدی</Typography>
        </Grid>
    </div>
  );
}

export default Header;
