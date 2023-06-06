import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => <h1>Give Feedback</h1>

const Btn = (props) => <button onClick={props.click} style={{margin: '10' + 'px', padding: '4' + 'px'}}> {props.btn} </button>

const Tabla = (props) => {return(
  <table>
    <tr>
      <td>good</td>
      <td>{props.good}</td>
    </tr>
    <tr>
      <td>neutral</td>
      <td>{props.neutral}</td>
    </tr>
    <tr>
      <td>bad</td>
      <td>{props.bad}</td>
    </tr>
    <tr>
      <td>all</td>
      <td>{(props.good + props.neutral + props.bad)}</td>
    </tr>
    <tr>
      <td>average</td>
      <td>{(props.good-props.bad)/(props.good + props.neutral + props.bad)}</td>
    </tr>
    <tr>
      <td>positive</td>
      <td>{props.good*100/(props.good + props.neutral + props.bad)} %</td>
    </tr>
  </table>
)}

const Statics = (props) => {
  if(props.good===0 && props.neutral===0 && props.bad===0){
    return <h2>No feedback given</h2>  
  }
  else{
    return (
      <div>
        <h3>Statics</h3>
        <Tabla good={props.good} neutral={props.neutral} bad={props.bad}/>
      </div>
    )
  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const btn = ["Good", "Neutral", "Bad"]

  return (
    <div>
      <Header/>
      <Btn click={() => setGood (good+1)} btn={btn[0]}/>
      <Btn click={() => setNeutral (neutral+1)} btn={btn[1]}/>
      <Btn click={() => setBad (bad+1)} btn={btn[2]}/>
      <Statics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
