import React ,{useState,useEffect} from 'react';
import Question from './Question';
import axios from 'axios';

export default function Form() {

    const [count, setCount] = useState(0)
    
    const [classes, setClasses] = useState("bg order-1 order-md-2");
    const [styles, setstyles] = useState({backgroundImage: `url("https://content.presspage.com/uploads/2110/1920_gettyimages-476872643-239440.jpg?10000")`})
    const [Array, setArray] = useState([{

    }])

    const Increment = () => {
       if(count<Array.length-1)
        setCount(count+1)
    }

    
  useEffect(()=>{
    
    axios
      .get('http://localhost:5000/api/question/')
      .then(response => {
        setArray(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
       

    
    
    
  }, [])


    return (
     <div class="d-lg-flex half ">  
    
        <div  style={styles} className={classes}></div>
        <div class="contents order-2 order-md-1">
    
          <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-7">
                 <div>
                   <Question statement={Array[count].statement} q1={Array[count].opt1} q2={Array[count].opt2} q3={Array[count].opt3}  name="selector1" nextQuestion={Increment} />
                 </div>
                </div>
            </div>
          </div>
        </div>
    
        
      </div>
    )
}
