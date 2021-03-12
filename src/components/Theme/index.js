import {createMuiTheme} from '@material-ui/core'

const colorPrimary = '#5ea9dd'

const Theme = createMuiTheme({
    palette : {
        primary : {
            main : colorPrimary,
        }
    },
    overrides : {
        MuiTypography :{
            
            body1 : {
                fontFamily : 'shabnam'
            }
        }
    }
    
})

export default Theme;