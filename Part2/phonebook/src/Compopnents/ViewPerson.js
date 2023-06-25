import React from "react";

const ViewPersons = (props) =>{
    return (
      <div>
        <h2> Numbers </h2>
        <ul>
          {props.persons.map((value,index) => {
            return (
              <li key={index}>
                {value.name}: {value.number}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

export default ViewPersons;