import React from 'react'
import ReactDOM from 'react-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

import InputTabla from './components/InputTabla'
import ViewCountries from './components/ViewCountries'

const App = () => {
  const [inputCountrie, setCountries] = useState ('')
  const [allCountries, setAllCountries] = useState ([])
  const [viewCountries, setViewCountries] = useState([])

  useEffect (() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setAllCountries(response.data)
      },)
  }, [])

  return (
    <div>
      <InputTabla allCountries={allCountries.map(countries => countries.name.common)} inputCountrie={inputCountrie} setViewCountries={setViewCountries} setCountries={setCountries}/>
      <ViewCountries viewCountries={viewCountries} allCountires={allCountries}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
