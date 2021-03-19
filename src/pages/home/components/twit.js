import { Button, colors, Divider, Grid, Typography } from '@material-ui/core';
import useStyle from '../../../components/layout/styles'

const renderTweetText = (text)=>{
  return {'__html' : text.replace(/#\S+/g,'<a href="/tweet-by-hsshtgs/$&" style="color:blue">$&</a>')}
}


const Twit= ({data})=>{

   const classes = useStyle() ;
  return (
    <div>
        <Grid container direction={'row'} alignItems={'center'}>
            <img className={classes.profileImageBox}/>
            <Typography>{data.sender.name}</Typography>
            <Typography className={classes.userIdInHarTwit}>{data.sender.id}</Typography>
        </Grid>
        <Typography dangerouslySetInnerHTML={renderTweetText(data.text)} className={classes.YekTwit}></Typography>
        <Grid container direction={'row-reverse'} alignItems={'center'}>
            <img src={'images/retweet-svgrepo-com.svg'} className={classes.pictureIcon}></img>
            <img src={'images/Like Icon SVG.svg'} className={classes.pictureIcon}></img>
            <Typography className={classes.LikeNumber}>{data.likesCount}</Typography>
        </Grid>
    </div>
  );
}

export default Twit;
