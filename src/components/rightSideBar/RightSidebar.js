import useStyle from '../layout/styles'
import LogoBox from './logoBox'
import DaghTarinHashtagLogoBox from './DaghtarinHashtagLogoBox';
import DaghtarinHashtags from './DaghtarinHashtags';

const RightSidebar = ()=>{

  const classes = useStyle() ;
  return (
    <div className={classes.RightSidebar}>
      <LogoBox/>
      <DaghTarinHashtagLogoBox/>
      <DaghtarinHashtags/>
    </div>
  );
}

export default RightSidebar;
