import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { teal } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 3,
    '&:hover': {
      color: teal,
    },
  },
});




function CenteredGridA(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <div style={{height:'40px'}}></div>
        </Grid>
        <Grid item xs={3}>
          <div></div>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <img style={{display:props.ImgStatus}} src={require('./media/hejt_'+props.source+'.png')} alt="plansza1" width="690" height="460" />
          <video style={{display:props.VideoStatus}} autoplay="" loop="" data-reactid=".0.1.0.0" width="690" height="460" controls >
             <source type="video/mp4" data-reactid=".0.1.0.0.0" src={require('./media/fragm_'+props.VideoSource+'.mov')}  />
           </video>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <div></div>
        </Grid>
        <Grid item xs={3}>
          <div></div>
        </Grid>
        <Grid item xs={3}>
          <div>
          <BottomNavigationAction onClick={()=>props.changePrevious()} label="Left" icon={<ChevronLeftIcon style={{color:'teal'}} />} />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
          <BottomNavigationAction onClick={()=>props.changeNext()} label="Right" icon={<ChevronRightIcon style={{color:'teal'}}/>} />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div></div>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGridA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGridA);