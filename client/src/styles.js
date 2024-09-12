import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        backgroundColor: '#ddc5f5',
        borderRadius: 15,
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
    },
    image: {
        marginLeft: '10px',
    },
    heading: {
        color: 'rgb(60 69 240 / 83%)',
        fontSize: '40px',
        fontFamily: 'math'
    },
    container: {
        height: '50%', // Ensures the container takes full viewport height
        overflow: "hidden",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    gridContainer: {
        flexGrow: 1, // Make the grid container expand to fill available space
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
}));