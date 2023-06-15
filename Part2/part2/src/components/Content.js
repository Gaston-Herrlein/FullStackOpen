import React from "react";

import Part from './Part'

const Content = (props) => {

    return (
    <div>
      <ul>
        {props.parts.map ( value => <Part part={value.name} exercises={value.exercises}/> )}
      </ul>
    </div>
    )
}

export default Content;