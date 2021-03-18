import {Divider, Grid, Typography} from '@material-ui/core'
import useStyle from '../layout/styles'
import BehtarinKhabarnegaranList from './BehtarinKhabarnegaranList';

const BartarinKhabarnegaranListData = [
    {
        id : 1,
        'image' : '',
        'userName' : 'علی عسگری',
        'userId' : '@ali.asgari'
    },
    {
        id : 2,
        'image' : '',
        'userName' : 'شعید احمدی',
        'userId' : '@said.ahmadi'
    }
]


const BehtarinKhabarnegaranBox = ()=>{

   const classes = useStyle() ;
  return (
    <Grid container direction={'column'} className={classes.behtarinKhabarnegaranBox}>
        <Grid item>
            <Typography  className={classes.khabarnegaranText}>بهترین خبرنگاران</Typography>
        </Grid>
        <Divider/>
        <Grid item>
            {
                BartarinKhabarnegaranListData.map((item,index)=>
                    <>
                        <BehtarinKhabarnegaranList userName={item.userName} userId={item.userId}/>
                        {index!==BartarinKhabarnegaranListData.length-1 && 
                        <Divider/>
                        }
                    </>
                )
            }
            
        </Grid>
    </Grid>

  );
}

export default BehtarinKhabarnegaranBox;
