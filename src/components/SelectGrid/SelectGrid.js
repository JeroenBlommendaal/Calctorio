import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import 'typeface-roboto';

import './../../App.css';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const SelectGrid = ({onSpmChange, onSpsChange}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        id="spsValue"
                        defaultValue="0"
                        helperText="Science per second"
                        variant="outlined"
                        onChange={onSpsChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={1}>
                        <Typography>
                            assembling machine
                        </Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="spmValue"
                        defaultValue="0"
                        helperText="Science per minute"
                        variant="outlined"
                        onChange={onSpmChange}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default SelectGrid;