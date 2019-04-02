import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 1000,
    margin: '10px',
   
  },
  media: {
    height: 140,
    
  },

  actionArea: {
    alignContent: 'space-between',
  }
};

const actionStyles = {
  display: 'flex',
  alignContent: 'space-between',

}

const pStyles = {
  
}

const ToDoCard = (props) => {
  const { classes } = props;

  
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography align="left" variant="h5">
          <p style={{'text-decoration': props.todo.isCompleted ? 'line-through' : 'none'}}>{props.todo.text}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="actionArea">
        <Button variant="contained" size="small" color="primary" onClick={()=>{props.complete(props.todo.id)}}>
          Completed
        </Button>
        <Button variant="contained" size="small" color="secondary" onClick={()=>{props.remove(props.todo.id)}}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

ToDoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToDoCard);