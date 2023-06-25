import React from "react"
import {useState, useEffect} from 'react'


const ViewCountries = (props) => {
    const [date, setDate] = useState('')
    const [url, setUrl] = useState('')
    
    const FilterDataCountrie = () => {
        return props.allCountires.map(countire => countire.name.common).indexOf(props.viewCountries[0])
    }
    
    const LanguajeView = () => {
        return Object.values(props.allCountires[FilterDataCountrie()].languages).map((lang, i) => {return <li key={i}>{lang}</li>})
    } 

    if (props.viewCountries.length > 10) {
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if(props.viewCountries.length > 1){
        return (
            <ul>
            {props.viewCountries.map((value,index) => {
                return (
                    <li key={index}>
                      {value}
                    </li>
                )
            })}
          </ul>
        )  
    }
    else if (props.viewCountries.length === 1){
        return(
            <div>
                <h2>{props.allCountires[FilterDataCountrie()].name.common}</h2>
                <p>Capital: {props.allCountires[FilterDataCountrie()].capital[0]}</p>
                <p>Population: {props.allCountires[FilterDataCountrie()].population}</p>
                <h3>Languaje</h3>
                <ul>
                    {LanguajeView()}
                </ul>
            </div>
        )
    }
    else{
        return( <div></div> )
    }
    
  }

export default ViewCountries