import React, { Component } from 'react';


import './App.css';

import MenuAppBar from './AppBar';

import SimpleBottomNavigation from './Bottom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import teal from '@material-ui/core/colors/teal';
import {Ramka} from './Ramka'

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
  
    constructor(){
      super();
      this.state = {
        imgSource:'plansze1_2',
        VideoSource:'kom1',
        VideoStatus:'none',
        ImgStatus:'initial'
        
      }
    }

    changeImage=(number)=>{
      if(number==='3'){
        this.setState({
          imgSource:'plansze1_3',
          VideoStatus:'none',
          ImgStatus:'initial'
        })
      }
      if(number==='2'){
        this.setState({
          imgSource:'plansze1_2',
          VideoStatus:'none',
          ImgStatus:'initial'
        })
      }
      if(number==='4'){
        this.setState({
          VideoSource:'kom1',
          VideoStatus:'initial',
          ImgStatus:'none'
        })
      }
    }

    changeNext=()=>{
      if(this.state.imgSource==='plansze1_2' && this.state.ImgStatus==='initial'){
        this.setState({
          imgSource:'plansze1_3'
        })
      }
      if(this.state.imgSource==='plansze1_3' && this.state.ImgStatus==='initial'){
        this.setState({
          imgSource:'plansze1_3',
          VideoSource:'kom1',
          VideoStatus:'initial',
          ImgStatus:'none'
        })
      }
    }

    changePrevious=()=>{
      if(this.state.imgSource==='plansze1_3' && this.state.ImgStatus==='initial'){
        this.setState({
          imgSource:'plansze1_2',
          VideoSource:'kom1',
          VideoStatus:'none',
          ImgStatus:'initial'
        })
      }
      if(this.state.VideoSource==='kom1' && this.state.VideoStatus==='initial'){
        this.setState({
          imgSource:'plansze1_3',
          VideoSource:'kom1',
          VideoStatus:'none',
          ImgStatus:'initial'
        })
      }
    }
    
    render() {
    return (
      <div className="App">
       <MuiThemeProvider theme={theme}>
     
    
        <MenuAppBar change={this.changeImage} />
        
        <Ramka ImgStatus={this.state.ImgStatus} 
               VideoStatus={this.state.VideoStatus} 
               mediaType={this.state.mediaType} 
               changePrevious = {this.changePrevious} 
               changeNext = {this.changeNext} 
               VideoSource = {this.state.VideoSource}
               source={this.state.imgSource}/>
        
       
       
     
        
        
        <SimpleBottomNavigation />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
