import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    googleContainer: {
        width: '100%', // Ensures the container takes full width
        display: 'flex', // Flexbox layout
        justifyContent: 'center', // Centers the content
        alignItems: 'center'
    },
    [theme.breakpoints.down('xs')]: {
        googleContainer: {
            padding: '0 1%',
            boxSizing: 'border-box',
        },
    },
    googleButton: {
        width: '100%',
        margin: theme.spacing(3, 0, 2),
    },
}));