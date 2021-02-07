import React from 'react'

export default function Question(props) {
    return (
     <div className="container">
      <div >
                  <h3>{props.statement}</h3>
      </div>
      <ul>
        <li>
            <input type="radio" id={props.id1}  onClick={() => {props.setBlood(props.id1)}} name={props.name}/>
            <label for={props.id1}>{props.q1}</label>
            
            <div class="check"></div>
        </li>
        
        <li>
            <input type="radio" id={props.id2} onClick={() => {props.setBlood(props.id2)}} name={props.name}/>
            <label for={props.id2}>{props.q2}</label>
            
            <div class="check"><div class="inside"></div></div>
        </li>
        
        <li>
            <input type="radio" id={props.id3} onClick={() => {props.setBlood(props.id3)}} name={props.name}/>
            <label for={props.id3}>{props.q3}</label>
            
            <div class="check"><div class="inside"></div></div>
        </li>
      </ul>
    </div>
    )
}
