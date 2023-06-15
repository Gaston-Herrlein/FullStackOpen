import React from 'react'

import Header from './Header'
import Content from './Content'
import Total from './Total'


const Course = (props) => {
    return (
        <div>
            {
                props.course.map( value => {
                    return (
                        <div>
                            <Header course={value.name} />
                            <Content parts={value.parts} />
                            <Total parts={value.parts} />              
                        </div>

                    )
                })
            }
        </div>
      )
}

export default Course;