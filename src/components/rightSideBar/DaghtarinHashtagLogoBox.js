import useStyle from '../layout/styles'
import {Grid, Typography} from '@material-ui/core'

const DaghTarinHashtagLogoBox = ()=>{

  const classes = useStyle() ;
  return (
      <Typography className={classes.daghTarinHashtagText}>داغ ترین هشتک ها</Typography>
  );
}

export default DaghTarinHashtagLogoBox;
