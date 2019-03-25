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

function CenteredGrid(props) {
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
          <img src={require('./media/hejt_plansze1_2.png')} alt="plansza1" width="690" height="460" />
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
          <BottomNavigationAction label="Left" icon={<ChevronLeftIcon style={{color:'teal'}} />} />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
          <BottomNavigationAction label="Right" icon={<ChevronRightIcon style={{color:'teal'}}/>} />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div></div>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);