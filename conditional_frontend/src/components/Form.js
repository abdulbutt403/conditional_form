import React ,{useState} from 'react'
import Question from './Question'

export default function Form() {

    const [count, setCount] = useState(0)
    const [Array, setArray] = useState([
      {
         statement : "What is your blood group?",
         q1: "A+",
         q2: "B+",
         q3: "B-", 
      },
      {
        statement : "What is your homoglobien level?",
        q1: "=10",
        q2: ">10",
        q3: "<10", 
      }
    ])
    const [classes, setClasses] = useState("bg order-1 order-md-2");


    const Increment = () => {
       if(count<Array.length-1)
        setCount(count+1)
    }
   

    return (
        <div class="d-lg-flex half ">
    
        <div class={classes}></div>
        <div class="contents order-2 order-md-1">
    
          <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-7">
                 <div>
                   <Question statement={Array[count].statement} q1={Array[count].q1} q2={Array[count].q2} q3={Array[count].q3}  name="selector1" nextQuestion={Increment} />
                 </div>
                </div>
            </div>
          </div>
        </div>
    
        
      </div>
    )
}
