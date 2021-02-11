import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
      
      margin: theme.spacing(1),
      width: '50ch',
  },
  mcq: {
    
    margin: theme.spacing(3),
    width: '25ch',
  },
  form: {
    display : 'flex',
    flexDirection : 'column',  
    margin: theme.spacing(1),
    width: '100ch',
  },

  button: {
    margin: theme.spacing(3),
    width: '15ch',
  },


  
}));

export default function Form() {
  const classes = useStyles();

  return (
    <form className={classes.form}  noValidate autoComplete="off">

      <div className="d-flex align-items-center">
      <TextField label="Main Question"  className={classes.root} variant="outlined" multiline />
      <input  type="file" className="upload-box" ></input>
      </div>
      <TextField id="standard-basic" label="OPTION 1" className={classes.mcq}/>
      <TextField id="standard-basic" label="OPTION 2" className={classes.mcq}/>
      <TextField id="standard-basic" label="OPTION 3" className={classes.mcq}/>


      <TextField label="Conditional Question"  className={classes.root} variant="outlined" multiline />
      <div className="d-flex align-items-center">
      <TextField id="standard-basic" label="OPTION 1" className={classes.mcq}/>
       <input  type="file" className="upload-box mt-4"/>
      </div>
      <div className="d-flex align-items-center">
      <TextField id="standard-basic" label="OPTION 1" className={classes.mcq}/>
       <input  type="file" className="upload-box mt-4"/>
      </div>
      
      <div className="d-flex align-items-center">
      <TextField id="standard-basic" label="OPTION 1" className={classes.mcq}/>
       <input  type="file" className="upload-box mt-4"/>
      </div>


      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Submit
      </Button>
    </form>
  );
}