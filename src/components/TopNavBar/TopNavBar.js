import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createMuiTheme } from '@material-ui/core/styles';
import Logo from './Logo';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#434343',
      contrastText: '#f57c00',
    },
    secondary: {
      main: '#f57c00',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  labelStyle: {
    color: '#f57c00',
  },
}));

export default function TopNavBar() {
  const classes = useStyles();
  const [expensive, setExpensive] = React.useState(false);
  const [bobmod, setMobmod] = React.useState(false);
  const [angelsmod, setAngelsmod] = React.useState(false);

  const handleExpensiveChange = (event) => {
    setExpensive(event.target.checked);
  };

  const handleBobmodChange = (event) => {
    setMobmod(event.target.checked);
  };

  const handleAngelsmodChange = (event) => {
    setAngelsmod(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Logo />
          <Toolbar />
          <FormControlLabel
            control={<Switch checked={expensive} onChange={handleExpensiveChange} aria-label="expensive switch" />}
            label={'expensive'}
          />
          <FormControlLabel
            control={<Switch checked={bobmod} onChange={handleBobmodChange} aria-label="bobmod switch" />}
            label={'bob mod'}
          />
          <FormControlLabel
            control={<Switch checked={angelsmod} onChange={handleAngelsmodChange} aria-label="angelsmod switch" />}
            label={'angels mod'}
          />
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
  );
}