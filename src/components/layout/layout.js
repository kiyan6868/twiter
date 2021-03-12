import useStyle from './styles'
import RightSidebar from '../RightSidebar'
import LeftSidebar from '../LeftSidebar'
import MainPart from '../MainPart'

const Layout = ()=> {

    const classes = useStyle();

    return (
      <div className = {classes.root}>
        <RightSidebar/>
        <MainPart/>
        <LeftSidebar/>
      </div>
    );
  }
  
  export default Layout;
  