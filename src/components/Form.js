import React ,{useState} from 'react'
import Question from './Question'

export default function Form() {

    const [Homoglobien, setHomoglobien] = useState(false)
    const [group, setGroup] = useState("What is your HB level");
    const [classes, setClasses] = useState("bg order-1 order-md-2");
    const setBlood = (blood) => {
      setHomoglobien(true);
      setGroup(`What is your HB level for ${blood}`);
      setClasses("bg order-1 order-md-2 homo")
    }


    const setHB = (value) => {
      if(value === "<10")
      setClasses("bg order-1 order-md-2 first")
      if(value === "=10")
      setClasses("bg order-1 order-md-2 second")
      if(value === ">10")
      setClasses("bg order-1 order-md-2 third")
    }
   

    return (
        <div class="d-lg-flex half ">
    
        <div class={classes}></div>
        <div class="contents order-2 order-md-1">
    
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7">
                
                 <div>
                   <Question statement="What is your blood group?" q1="A+" q2="B+" q3="B-" id1="A+" id2="B+" id3="B-" name="selector1" nextQuestion={() => {setHomoglobien(true)}} setBlood={setBlood} />
                   {Homoglobien ? <Question statement={group}  q1="<10" q2=">10" q3="=10" id1="<10" id2=">10" id3="=10" name="selector2"  setBlood={setHB}/> : null} 
                 </div>
              </div>
            </div>
          </div>
        </div>
    
        
      </div>
    )
}
