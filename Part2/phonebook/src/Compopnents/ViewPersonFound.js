import React from "react";

const ViewPersonFound = (props) =>{
    return (
        <ul>
          <li>
            {props.personaEncontrada.name} {props.personaEncontrada.number}
          </li>
        </ul>
      )    
  }

export default ViewPersonFound;