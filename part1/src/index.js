import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {return (
  <div>
    <p> The {props.part1} have {props.exercises1} exercises</p>
    <p> The {props.part2} have {props.exercises2} exercises</p>
    <p> The {props.part3} have {props.exercises3} exercises</p>
  </div>
  )}

const Total = (props) => <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
