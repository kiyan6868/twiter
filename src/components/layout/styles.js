import {makeStyles} from "@material-ui/styles"
import RightSidebar from "../RightSidebar";

const useStyle = makeStyles({
    root : {
        display : 'flex',
        height : '100vh',
        width : '100%',
        margin : 0
    },
    RightSidebar : {
        backgroundColor : 'green',
        width : '18%'
    },
    LeftSidebar : {
        backgroundColor : 'blue',
        width : '25%'
    },
    MainPart : {
        backgroundColor : 'yellow',
        flex : 1
    }
})

export default useStyle;