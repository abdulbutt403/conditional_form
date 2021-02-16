import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  
  },
}));

export default function Orders(props) {
  const classes = useStyles();
  const [Array, setArray] = useState([{

  }])


  useEffect(()=>{
    
    axios
      .get('http://localhost:5000/api/question/')
      .then(response => {
        setArray(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
       
  
    
    
    
  }, [])
  
  
  return (
    <React.Fragment>
       <Typography component="p" className="emp-tag" variant="p">
             ALL QUESTIONS
       </Typography>
       <br/>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            
            <TableCell>OPTION 1</TableCell>
  
            <TableCell>OPTION 2</TableCell>
            
            <TableCell>OPTION 3</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {Array.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.statement}</TableCell>
              <TableCell>{row.opt1}</TableCell>
              <TableCell>{row.opt2}</TableCell>
              <TableCell>{row.opt3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          CREATE NEW TEST
        </Link>
      </div>
      
    </React.Fragment>
  );
}