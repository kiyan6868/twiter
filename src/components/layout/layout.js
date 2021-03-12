import useStyle from './styles'
import RightSidebar from '../RightSidebar'
import LeftSidebar from '../LeftSidebar'
import MainPart from '../MainPart'
import { Divider } from '@material-ui/core'

const Layout = ()=> {

    const classes = useStyle();

    return (
      <div className = {classes.root}>
        <RightSidebar/>
        <Divider orientation ={'vertical'} className = {classes.divider}/>
        <MainPart/>
        <LeftSidebar/>
      </div>
    );
  }
  
  export default Layout;
  