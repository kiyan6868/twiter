import { Button, colors, Divider, Grid, Typography } from '@material-ui/core';
import useStyle from '../../../src/components/layout/styles'
import TwitList from '../home/components/TwitList';
import Header from './Header';

const tweets = [
    {
      'sender' : {
        'name' : 'علی توکلی',
        'id' : '@ali.tavakoli',
        'image' : '',
      },
      'text' : 'اومدم در خونتون دم خونتون سر کوچتون حوته نبودی. بگو بکو بکو کجا رقته بودی؟',
      "likesCount" : 200
    },
    {
      'sender' : {
        'name' : 'علی گیوه ای',
        'id' : '@ali.dhahaji',
        'image' : '',
      },
      'text' : 'اومدم در خونتون دم خونتون سر کوچتون حوته نبودی. بگو بکو بکو کجا رقته بودی؟',
      "likesCount" : 100
  
    }
  ]
  


const TweetByHashtag= ()=>{

    const classes = useStyle() ;
    return (
      <div className={classes.MainPart}>
          <Header/>
          <Divider/>
          <Divider className={classes.DividereBeyneTwitHa}/>
          <TwitList data={tweets}/>
      </div>
    );
}

export default TweetByHashtag;
