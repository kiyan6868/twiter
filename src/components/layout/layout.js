import useStyle from './styles'
import RightSidebar from '../rightSideBar/RightSidebar'
import LeftSidebar from '../leftSideBar/LeftSidebar'
import MainPart from '../MainPart'
import { Divider } from '@material-ui/core'

const Layout = ()=> {

    const classes = useStyle();

    return (
      <div className = {classes.root}>
        <RightSidebar/>
        <Divider orientation ={'vertical'} className = {classes.divider}/>
        <MainPart/>
        <Divider orientation ={'vertical'} className = {classes.divider}/>
        <LeftSidebar/>
      </div>
    );
  }
  
  export default Layout;
  