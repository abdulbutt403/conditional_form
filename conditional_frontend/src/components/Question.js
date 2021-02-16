import React , {useState} from 'react'
import Button from '@material-ui/core/Button';

export default function Question(props) {

    const [selected, setSelected] = useState("")

    const handleClick = (y) => {
       props.nextQuestion(y)
    }

    const handleRadioClick = (x) => {
        setSelected(x);
        props.setBackground(x);
    }
    return (
     <div className="container">
         <h1>{props.index+1}</h1>
         
      <div >
                  <h4 className="mb-3 fade-in">{props.statement}</h4>
      </div>
      <ul>
        <li>
            <input type="radio" id="q1"   name={props.name} onClick={() => handleRadioClick(1)}/>
            <label className="fade-in" for="q1">{props.q1}</label>
            
            <div class="check"></div>
        </li>
        
        <li>
            <input type="radio" id="q2" name={props.name} onClick={() => handleRadioClick(2)}/>
            <label className="fade-in" for="q2">{props.q2}</label>
            
            <div class="check"><div class="inside"></div></div>
        </li>
        
        <li>
            <input type="radio" id="q3" name={props.name} onClick={() => handleRadioClick(3)}/>
            <label className="fade-in" for="q3">{props.q3}</label>
            
            <div class="check"><div class="inside"></div></div>
        </li>
      </ul>
      <div className="d-flex mt-5 flex-end">
        <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => {handleClick(selected)}}
        >
            Next
        </Button>
      </div>
    </div>
    )
}
