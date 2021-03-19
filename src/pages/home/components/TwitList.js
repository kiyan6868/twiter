import { Button, colors, Divider, Grid, Typography } from '@material-ui/core';
import useStyle from '../../../components/layout/styles'
import Twit from './twit';


const TwitList= ({data})=>{

   const classes = useStyle() ;
  return (
    <div>
      {data.map((item,index)=>
        <>
          <Twit data={item}/>
          {index!==data.length-1 && <Divider className={classes.DividereBeyneTwitHa}/>}
          
        </>
      )}
        
    </div>
  );
}

export default TwitList;
