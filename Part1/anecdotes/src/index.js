import React, { useState } from 'react'
import ReactDOM, { render } from 'react-dom'

const Header = () => <h1> Anécdotes </h1>

const Btn = (props) => <button onClick={props.click} style={{margin: '0 5px', padding: '5px'}}> {props.change} </button>

const Label = (props) => {return(
  <div>
    <p>{props.anecdotes[props.selected]}</p>
  </div>
)}

const MoreVotes = (props) => {
  if(Math.max(...props.votes)===0){
    return null
  }

  const i = props.votes.indexOf(Math.max(...props.votes))
  
  return(
  <div>
    <h4>Anécdote with more votes ({props.votes[i]}) is:</h4>
    <p>{props.anecdotes[i]}</p>
  </div>
)
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [flag, setFlag] = useState (false)
  
  const RandomChange = () => setSelected(Math.floor(Math.random()*6))
  const NextChange = () => {
    if(selected<5)
      setSelected(selected + 1)
    else
      setSelected(0)
  }
  const Reset = () => setSelected(0)

  const ChangeVotes = () => {votes[selected]+=1}

  return (
    <div>
      <Header />
      <Label anecdotes={props.anecdotes} selected={selected}/>
      <Btn click={NextChange} change={"Next"} />
      <Btn click={RandomChange} change={"Random"} />
      <Btn click={Reset} change={"Reset"} />
      <br/>
      <br/>
      <br/>
      <MoreVotes votes={votes} anecdotes={props.anecdotes}/>     
      <Btn click={ChangeVotes} change={"Vote!"} />
      <Btn click={()=>setFlag(!flag)} change={"See anecdote with more votes"} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

var votes = [0, 0, 0, 0, 0, 0]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
