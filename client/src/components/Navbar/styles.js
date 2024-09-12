import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#f3fcfee3',
        borderRadius: 15,
        margin: '15px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    heading: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontSize: '2em',
        fontWeight: 300,
        fontFamily: 'math'
    },
    image: {
        marginLeft: '10px',
        marginTop: '5px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',
        gap: '5px',
        [theme.breakpoints.down('sm')]: {
            width: '450px',
            marginTop: 20,
            justifyContent: 'center',
        },
    },
    logout: {
        marginLeft: '20px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '5px',
            marginRight: '5px',
            fontSize: '10px'
        }
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        }
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));