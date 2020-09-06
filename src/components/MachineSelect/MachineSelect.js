import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import Machines from './Machines.js'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import 'typeface-roboto';
import MachineSelectIcon from './MachineSelectIcon.js'

import './../../App.css';
import { Typography, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    text: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const MachineSelect = ({onSpmChange, onSpsChange}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Typography className={classes.text}>
                            assembling machine
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Machines />
                    </Grid>
                </Grid>
        </div>
    );
}

export default MachineSelect;