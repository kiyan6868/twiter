import {makeStyles} from "@material-ui/styles"
import RightSidebar from "../RightSidebar";
import Theme from "../Theme";

const useStyle = makeStyles(Theme=>({
    root : {
        display : 'flex',
        height : '100vh',
        width : '100%',
        margin : 0,
        backgroundColor : 'white'
    },
    RightSidebar : {
        width : '18%'
    },
    LeftSidebar : {
        width : '25%'
    },
    MainPart : {
        flex : 1
    },
    divider : {
        backgroundColor : Theme.palette.primary.main,
        width : 1,
        height : '100%',
        filter : 'opacity(0.5)'
    },
    logo : {
       width : '60px',
       height : '70px',
       padding : '22px 17px'
    },
    logoText : {
        fontSize : '21px',
        fontWeight: 600,
        color:Theme.palette.primary.main
    },
    daghTarinHashtagText : {
        margin : '0 32px 24px 0',
        fontWeight:600,
        fontSize : '1.25rem',
    },
    hashtagIcon : {
        width : '25px',
        height : '25px',
        margin : '0 17px 17px 17px'
    }
}))

export default useStyle;