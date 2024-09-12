import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import memories from '../../images/memories.png';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import useStyles from './styles';

const Navbar = () => {
    const { appBar, heading, image, toolbar, brandContainer, profile, purple, userName, logout } = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logOut = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/auth');
        setUser(null);  // If somebody is logged out, then we setUser it to null
    };
    
    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = jwtDecode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    

    return (
        <AppBar className={appBar} position='static' color='inherit'>
            <div className={brandContainer}>
                <Typography component={Link} to="/" className={heading} variant='h2' align='center'>PostBurst</Typography>
                <img className={image} src={memories} alt="postBurstLogo" height="60" />
            </div>
            <Toolbar className={toolbar}>
                {user ? (
                    <div className={profile}>
                        <Avatar className={purple} alt={user?.result?.name} src={user?.result?.imageUrl}>
                            {user?.result?.name.charAt(0)}
                        </Avatar>
                        <Typography className={userName} variant='h6'>
                            {user?.result?.name}
                        </Typography>
                        <Button 
                            variant="contained" 
                            className={logout} color="secondary"
                            onClick={logOut}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
