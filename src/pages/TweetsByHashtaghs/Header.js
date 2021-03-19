import { Grid, Typography } from '@material-ui/core';
import useStyle from '../../components/layout/styles'


const Header= ()=>{

   const classes = useStyle() ;
  return (
    <div className={classes.MainPart}>
        <Grid container direction={'row'} alignItems={'center'}>
            <img className={classes.homeIcon} src={'images/hashtag-icon.jpg'}/>
            <Typography className={classes.headerTitle}>گرونا_ویروس</Typography>
        </Grid>
    </div>
  );
}

export default Header;
