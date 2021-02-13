import React from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';


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
  
  
  
    
  }));
  
  
export default function Fields(props) {
    const classes = useStyles();
    const {index, handleChange , fileChange} = props;


    const uploadImage = async (event) => {

      let SelectedImage = event.target.files[0];
      const formData = new FormData();
      formData.append("file", SelectedImage);
      formData.append("upload_preset" , "fvofnssw");

     const res = await axios.post("https://api.cloudinary.com/v1_1/dmsus6w9v/image/upload" , formData)
     fileChange(index, event , res.data.url)
    }

    return (
      <div className="mt-5">
      <TextField 
      label="Question Statement" 
      value={props.statement} 
      name="statement"
      className={classes.root}
      variant="outlined"
      multiline
      onChange = {event => handleChange(index,event)} />




      <div className="d-flex align-items-center">
      <TextField 
      id="standard-basic" 
      value={props.opt1} 
      label="OPTION 1" 
      name="opt1" 
      className={classes.mcq}
      onChange = {event => handleChange(index,event)} />
       <input  type="file" className="upload-box mt-4" name="file1" onChange={event => uploadImage(event)}/>
      </div>



      <div className="d-flex align-items-center">
      <TextField
       id="standard-basic"
       value={props.opt2} 
       label="OPTION 1" 
       name="opt2" 
       className={classes.mcq}
       onChange = {event => handleChange(index,event)}  />
       <input  type="file" className="upload-box mt-4" name="file2" onChange={event => uploadImage(event)}/>
      </div>
      
      <div className="d-flex align-items-center">
      <TextField
        id="standard-basic" 
        value={props.opt3} 
        label="OPTION 1" 
        name="opt3" 
        className={classes.mcq}
        onChange = {event => handleChange(index,event)}
      />
       <input  type="file" className="upload-box mt-4" name="file3" onChange={event => uploadImage(event)}/>
      </div>

    </div>
    )
}
