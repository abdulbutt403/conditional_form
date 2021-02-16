import React ,{useState,useEffect} from 'react';
import Question from './Question';
import axios from 'axios';

export default function Form() {

    const [count, setCount] = useState(0)
    const [inc, setInc] = useState(1)
    
    const [classes, setClasses] = useState("bg order-1 order-md-2");
    const [styles, setstyles] = useState({backgroundImage: `url("https://content.presspage.com/uploads/2110/1920_gettyimages-476872643-239440.jpg?10000")`})
    const [Array, setArray] = useState([{
         
    }])

    const Increment = (x) => {


      console.log(Array[count].inc1)
      
       console.log(x==1)

      if(x==1){
         setInc(Array[count].inc1)
      }
      else if(x==2){
         setInc(Array[count].inc2)
      }
      else if(x==3){
        setInc(Array[count].inc3)
      }

       if(count<Array.length-1)
        setCount(count+1)


    }


    const setBackgoundImage = (x) => {
      if(x==1){

        setstyles({backgroundImage: `url("${Array[count].file1}"`})
      }
      else if(x==2){

        setstyles({backgroundImage: `url("${Array[count].file2}"`})
      }
      else if(x==3){

        setstyles({backgroundImage: `url("${Array[count].file3}"`})
      }
    }
    
    
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
     <div class="d-lg-flex half ">  
    
        <div  style={styles} className={classes}></div>
        <div class="contents order-2 order-md-1">
    
          <div class="container ">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-7 bg-pink faded">
                 <div>
                   <Question statement={Array[count].statement} q1={Array[count].opt1} q2={Array[count].opt2} q3={Array[count].opt3}  name="selector1" nextQuestion={Increment} setBackground={setBackgoundImage}/>
                 </div>
                </div>
            </div>
          </div>
        </div>
    
        
      </div>
    )
}
