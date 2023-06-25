import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import ViewPersons from './Compopnents/ViewPerson'
import Header from './Compopnents/Header'
import Form from './Compopnents/Form'
import Search from './Compopnents/Search'
import ViewPersonFound from './Compopnents/ViewPersonFound'


const App = () => {
  
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchPerson, setSeachPerson] = useState ('')
  const [ personaEncontrada, setPersonaEncontrada] = useState ({
    name: '',
    number: ''
  })
  
  useEffect (() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons (response.data)
      })
  }, [])

  const handleNewName = (event) => { setNewName(event.target.value) }

  const handleNewNumber = (event) => { setNewNumber(event.target.value) }

  const handleSearchPerson = (event) => { setSeachPerson(event.target.value) }

  const createNewPerson = (event) => {  
    event.preventDefault()
    if (persons.filter(person => person.name === newName).length !== 0){      
      alert("The name already exists");
      setNewName ('')
      setNewNumber ('')  
    }
    else{
      setPersons(persons.concat({
        name: newName,
        number: newNumber
      }));
      setNewName ('')
      setNewNumber ('')
    }
  }

  const SearchPerson = (event) => {
    event.preventDefault()
    const personFound = persons.filter(person => person.name === searchPerson)
    if (personFound.length!==0){
      setPersonaEncontrada ({... personaEncontrada,
        name: personFound[0].name,
        number: personFound[0].number
      })
      setSeachPerson ('')
    }
    else{
      setPersonaEncontrada ({... personaEncontrada,
        name: '',
        number: ''
      })
      setSeachPerson ('')
      alert ('The name is not found in the database')
    }
  }

  return (
    <div>
      <Header />
      <Form newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} createNewPerson={createNewPerson}/>
      <ViewPersons persons={persons}/>
      <Search searchPerson={searchPerson} handleSearchPerson={handleSearchPerson} SearchPerson={SearchPerson}/>
      <ViewPersonFound personaEncontrada={personaEncontrada} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))