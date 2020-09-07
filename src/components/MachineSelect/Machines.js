import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AssemblingMachineOne from '../../images/assembling-machine-1.png';
// import AssemblingMachineTwo from '../../images/assembling-machine-2.png';
// import AssemblingMachineThree from '../../images/assembling-machine-3.png';
import AssemblingMachineFour from '../../images/assembling-machine-4.png';
import AssemblingMachineFive from '../../images/assembling-machine-5.png';
// import AssemblingMachineSix from '../../images/assembling-machine-6.png';
import SelectedAssemblingMachineOne from '../../images/assembling-machine-1.png';
// import AssemblingMachineTwo from '../../images/assembling-machine-2.png';
// import AssemblingMachineThree from '../../images/assembling-machine-3.png';
import SelectedAssemblingMachineFour from '../../images/assembling-machine-4.png';
import SelectedAssemblingMachineFive from '../../images/assembling-machine-5.png';
// import AssemblingMachineSix from '../../images/assembling-machine-6.png';

const useStyles = makeStyles((theme) => ({
    logo: {
        maxWidth: 50,
        justifyContent: 'center',
        paddingRight: '20px'

    },
    title: {
        maxWidth: 50,
    }
}))

const Machines = ({ assemblingMachine }) => {
    const classes = useStyles();
    if (assemblingMachine === "one") {
        return (
            <div>
                <div>
                    <img src={SelectedAssemblingMachineOne} alt="logo" className={classes.title} />
                </div>
                <div>
                    <img src={SelectedAssemblingMachineOne} alt="logo" className={classes.title} />
                </div>
                <div>
                    <img src={SelectedAssemblingMachineOne} alt="logo" className={classes.title} />
                </div>
                <div>
                    <img src={AssemblingMachineFour} alt="logo" className={classes.title} />
                </div>
                <div>
                    <img src={AssemblingMachineFive} alt="logo" className={classes.title} />
                </div>
                <div>
                    <img src={SelectedAssemblingMachineOne} alt="logo" className={classes.title} />
                </div>
            </div>
        );
    }
    else if (assemblingMachine === "four") {
        return (
            <div>
                <img src={AssemblingMachineFour} alt="logo" className={classes.title} />
            </div>
        );
    }
    else {
        return (
            <div>
                <img src={AssemblingMachineFive} alt="logo" className={classes.title} />
            </div>
        );
    }
}

export default Machines;