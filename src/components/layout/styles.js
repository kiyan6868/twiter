import {makeStyles} from "@material-ui/styles"
import RightSidebar from "../rightSideBar/RightSidebar";
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
        width : '25%',
        padding : '0 20px 0 20px'
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
    },
    profileImageBox : {
        width : '50px',
        height:'50px',
        borderRadius:'50%',
        backgroundColor:'yellow',
        margin : '24px'

    },
    userNameAndId:{
        margin:'26px 0px',
        padding : '0px 90px 0px 0px',
        direction : 'ltr'    
    },
    userNameText : {
        fontWeight : 500
    },
    userIdText : {
        color : Theme.palette.text.hint,
        fontSize : '0.78rem'
    },
    khabrnegaranImage : {
        width : '50px',
        height:'50px',
        borderRadius:'50%',
        backgroundColor:'yellow',
        margin : '10px 15px'
    },
    khabarnegaranText:{
        padding : '10px 15px',
        fontSize : '1.5rem',
        fontWeight : 600
    },
    behtarinKhabarnegaranBox : {
        backgroundColor : '#f5f8fa',
        borderRadius : '2.5rem',
        marginTop : '15px'
    },
    khabrnegarItem : {
        borderBottom : '1px solid gray'
    }
}))

export default useStyle;