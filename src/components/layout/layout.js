import useStyle from './styles'
import RightSidebar from '../rightSideBar/RightSidebar'
import LeftSidebar from '../leftSideBar/LeftSidebar'
import { Divider } from '@material-ui/core'
import Home from '../../pages/home/Home'
import {BrowserRouter,Route} from 'react-router-dom'
import TweetByHashtag from '../../pages/TweetsByHashtaghs/tweetByHashtag'
import TweetByUser from '../../pages/TweetsByuser/tweetByUser'


const Layout = ()=> {

    const classes = useStyle();

    return (
      <div className = {classes.root}>
        <RightSidebar/>
        <Divider orientation ={'vertical'} className = {classes.divider}/>
        <BrowserRouter>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/home'} component={Home}/>
          <Route path={'/tweet-by-hsshtgs'} component={TweetByHashtag}/>
          <Route path={'/tweet-by-user'} component={TweetByUser}/>
        </BrowserRouter>
        <Divider orientation ={'vertical'} className = {classes.divider}/>
        <LeftSidebar/>
      </div>
    );
  }
  
  export default Layout;
  