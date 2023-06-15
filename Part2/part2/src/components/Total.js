import React from "react"

const Total = (props) => <p>Number of exercises {
    props.parts.map(index => index.exercises).reduce( (a,b) => a+b, 0 )
    }
    </p>

export default Total