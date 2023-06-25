import React from "react";

const Form = (props) => {
    return (
        <div>
            <h2> New Person</h2>
            <form>
                <div>
                    name: <input value={props.newName} onChange={props.handleNewName} />
                </div>
                <br/>
                <div>
                    number: <input value={props.newNumber} onChange={props.handleNewNumber} />
                </div>
                <div>
                    <button type="submit" onClick={props.createNewPerson}> Add </button>
                </div>
            </form>
        </div>
    )
}

export default Form;