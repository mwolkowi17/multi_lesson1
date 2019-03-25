import React, { Component } from 'react';


import './App.css';

import MenuAppBar from './AppBar';
import CenteredGrid from'./Grid';
import SimpleBottomNavigation from './Bottom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import teal from '@material-ui/core/colors/teal'

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});


class App extends Component {
  render() {
    return (
      <div className="App">
       <MuiThemeProvider theme={theme}>
     
    
        <MenuAppBar />
        
        <CenteredGrid />
        
       
       
     
        
        
        <SimpleBottomNavigation />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
