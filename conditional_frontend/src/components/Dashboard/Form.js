import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import Fields from './Fields';
import axios from 'axios'




const useStyles = makeStyles((theme) => ({
  form: {
    display : 'flex',
    flexDirection : 'column',  
    margin: theme.spacing(1),
    width: '100ch',
  },
  button: {
    margin: theme.spacing(3),
    width: '12ch',
  },

}));


export default function Form() {
  const classes = useStyles();
  const [inputFields, setinputFields] = useState([
    
  ])

  const onHandleChnage = (index, event) => {
    const values = [...inputFields]
    values[index][event.target.name] = event.target.value
    setinputFields(values)

  }

  
  const onFileChnage = (index, event , url) => {
    const values = [...inputFields]
    values[index][event.target.name] = url
    setinputFields(values)
    console.log(inputFields)
  }

  const Increment = () => {  
    
     setinputFields([...inputFields, {statement: "" , opt1: "", opt2: "", opt3: "" , file1: "", file2: "", file3: "" , inc1: "" , inc2: "" , inc3: ""}])
     
  }

  const handleSubmit = async () => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json',   
    
        }
      }

    
      
      const body = JSON.stringify(inputFields);
      const res = await axios.post('http://localhost:5000/api/question/', body , config);
      alert(res);
    } catch (err) {
      alert(err)
      
    }
  
  }

  
 

  return (
    <form onSubmit={handleSubmit} method="POST" className={classes.form}  autoComplete="off" >
      {inputFields.map((inputField , index) => <Fields key={index} statement={inputField.statement} opt1={inputField.opt1} opt2={inputField.opt2} opt3={inputField.opt3} inc1={inputField.inc1} inc2={inputField.inc2} inc3={inputField.inc3} index={index} handleChange={onHandleChnage} fileChange={onFileChnage} length={inputFields.length}/> )}
     

     <div className="d-flex">
     <Button
        variant="contained"      
        style={{background: "#006AEE" , color : "#fff"}}
        size="large"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={Increment}
      >
        ADD
      </Button>

      <Button
        variant="contained"
        
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        type="submit"
        style={{marginLeft : -5 , background: "#006AEE" , color : "#fff"}}
      >
        Save
      </Button>
      </div>
    </form>
  );
}