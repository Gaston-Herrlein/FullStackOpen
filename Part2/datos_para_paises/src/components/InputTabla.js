import React from "react";

const InputTabla = (props) => {

    const HadleNewCountries = (event) =>{
        props.setCountries(event.target.value)
        IsPresent()
      }
    
      const IsPresent = () => {
        props.setViewCountries (props.allCountries.filter (countrie => countrie.includes(props.inputCountrie)))
      }


    return(
      <div>
        <label>Find countries </label>
        <input onChange={HadleNewCountries}></input>
      </div>
    )
  }

export default InputTabla