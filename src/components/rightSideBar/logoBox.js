import useStyle from '../layout/styles'
import {Grid, Typography} from '@material-ui/core'

const LogoBox = ()=>{

    const classes = useStyle() ;

   return (
       <Grid container direction = {'row'} alignItems = {'center'}>
         <Grid item>
           <img className={classes.logo} src = {"images/twitter-logo.png"}/>
         </Grid>
         <Grid item>
           <Typography className={classes.logoText}>توییتر فارسی</Typography>
         </Grid>
       </Grid>
   );
 }
 
 export default LogoBox;