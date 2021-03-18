import {ButtonBase, Grid, Typography} from '@material-ui/core'
import React from 'react';
import useStyle from '../layout/styles'


const BehtarinKhabarnegaranList = ({userName,userId})=>{

   const classes = useStyle() ;
  return (
            <React.Fragment>
                <ButtonBase className={classes.buttonBase}>
                    <Grid container direction={'row'} alignItems={'center'}>
                        <Grid item>
                            <div className={classes.khabrnegaranImage}></div>
                        </Grid>
                        <Grid item>
                            <Typography>{userName}</Typography>
                            <Typography className={classes.userIdText}>{userId}</Typography>
                        </Grid>
                    </Grid>
                </ButtonBase>
                
            </React.Fragment>
  );
}

export default BehtarinKhabarnegaranList;
