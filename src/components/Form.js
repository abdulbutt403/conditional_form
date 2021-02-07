import React ,{useState} from 'react'
import Question from './Question'

export default function Form() {

    const [Homoglobien, setHomoglobien] = useState(false)
    const [group, setGroup] = useState("What is your HB level");

    const setBlood = (blood) => {
      setHomoglobien(true);
      setGroup(`What is your HB level for ${blood}`);
    }

    return (
        <div class="d-lg-flex half ">
    
        <div class={Homoglobien ? "bg order-1 order-md-2 add" : "bg order-1 order-md-2" }></div>
        <div class="contents order-2 order-md-1">
    
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7">
                
                 <div>
                   <Question statement="What is your blood group?" q1="A+" q2="B+" q3="B-" id1="A+" id2="B+" id3="B-" name="selector1" nextQuestion={() => {setHomoglobien(true)}} setBlood={setBlood} />
                   {Homoglobien ? <Question statement={group}  q1="<10" q2=">10" q3="=10" id1="<10" id2=">10" id3="=10" name="selector2"/> : null} 
                 </div>
              </div>
            </div>
          </div>
        </div>
    
        
      </div>
    )
}
