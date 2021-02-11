import React from 'react'
import Button from '@material-ui/core/Button';

export default function Question(props) {

    const handleClick = () => {
       props.nextQuestion()
    }
    return (
     <div className="container">
      <div >
                  <h4 className="mb-3 fade-in">{props.statement}</h4>
      </div>
      <ul>
        <li>
            <input type="radio" id="q1"   name={props.name}/>
            <label className="fade-in" for="q1">{props.q1}</label>
            
            <div class="check"></div>
        </li>
        
        <li>
            <input type="radio" id="q2" name={props.name}/>
            <label className="fade-in" for="q2">{props.q2}</label>
            
            <div class="check"><div class="inside"></div></div>
        </li>
        
        <li>
            <input type="radio" id="q3" name={props.name}/>
            <label className="fade-in" for="q3">{props.q3}</label>
            
            <div class="check"><div class="inside"></div></div>
        </li>
      </ul>
      <div className="d-flex mt-5 flex-end">
        <Button
            variant="contained"
            color="default"
            size="large"
            onClick={handleClick}
        >
            Next
        </Button>
      </div>
    </div>
    )
}
