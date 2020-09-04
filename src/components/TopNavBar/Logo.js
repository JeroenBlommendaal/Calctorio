import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CalctorioLogo from '../../images/CalctorioLogo.png';

const useStyles = makeStyles((theme) => ({
    logo: {
        maxWidth: 150,
        justifyContent: 'center',
        paddingRight: '20px'

    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        maxWidth: 150,
    }
}))

const Logo = () => {
    const classes = useStyles();
    return (
        <div>
            <img src={CalctorioLogo} alt="logo" className={classes.title} />
        </div>
    );
}

export default Logo;