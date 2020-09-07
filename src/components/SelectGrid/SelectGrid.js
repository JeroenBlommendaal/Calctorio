import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import 'typeface-roboto';
import MachineSelect from '../../components/MachineSelect/MachineSelect.js'
import './../../App.css';

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

const SelectGrid = ({onSpmChange, onSpsChange, assemblyMachine}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <TextField
                        id="spsValue"
                        defaultValue="0"
                        helperText="Science per second"
                        variant="outlined"
                        onChange={onSpsChange}
                    />
                </Grid>
                <Grid item xs={8}>
                    <MachineSelect assemblyMachine={assemblyMachine} />
                </Grid>
                <Grid item xs={4}>
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