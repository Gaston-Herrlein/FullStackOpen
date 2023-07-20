import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ViewPersons from "./Compopnents/ViewPerson";
import Header from "./Compopnents/Header";
import Form from "./Compopnents/Form";
import Search from "./Compopnents/Search";
import ViewPersonFound from "./Compopnents/ViewPersonFound";
import servicePerson from "./service/servicePerson";
import Notification from "./Compopnents/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchPerson, setSeachPerson] = useState("");
  const [personaEncontrada, setPersonaEncontrada] = useState({
    name: "",
    number: "",
  });
  const [errorMessage, setErrorMessage] = useState ();
  const [styleError, setStyleError] = useState ({
    display: "none",
    color: "red",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px"    
  })

  useEffect(() => {
    servicePerson.getAll().then((response) => {
      setPersons(response.data);
    })
    .catch((error) => {
      setErrorMessage ('Could not load contact list!')
    });
  }, []);

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchPerson = (event) => {
    setSeachPerson(event.target.value);
  };

//============================================================================================================================================
//ME QUEDE ACA TENGO QUE VOLVER A VER COMO CAMBIO LOS ESTILOS DE UN OBJETO SIN CAMBIAR EL RESTO Y SI QUE
//EXPLOTE LA APP
//============================================================================================================================================

  const createNewPerson = (event) => {
    event.preventDefault();
    if (persons.filter((person) => person.name === newName).length !== 0) {
      alert("The name already exists");
      setNewName("");
      setNewNumber("");
    } else {
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
        })
      );
      setNewName("");
      setNewNumber("");

      servicePerson.create({
          name: newName,
          number: newNumber,
          id: persons.length + 1,
        })
        .then((response) => {
          setStyleError(...styleError, {
            display: "block",
            color: "green",
            fontStyle: "italic",
            fontSize: 16
          });
          setErrorMessage("Se cargo correctamente el contacto");
        })
        .catch((error) => {
          console.error("error");
          setStyleError(...styleError, {
            display: "block"
          });
          setErrorMessage("Error al agregar un nuevo usuario");
        });
    }
  };

  const SearchPerson = (event) => {
    event.preventDefault();
    const personFound = persons.filter(
      (person) => person.name === searchPerson
    );
    if (personFound.length !== 0) {
      setPersonaEncontrada({
        ...personaEncontrada,
        name: personFound[0].name,
        number: personFound[0].number,
      });
      setSeachPerson("");
    } else {
      setPersonaEncontrada({ ...personaEncontrada, name: "", number: "" });
      setSeachPerson("");
      alert("The name is not found in the database");
    }
  };

  return (
    <div>
      <Header />
      <Notification 
        message={errorMessage}
        styleError={styleError}  
      />
      <Form
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
        createNewPerson={createNewPerson}
      />
      <ViewPersons 
      persons={persons} 
      refresh={()=> servicePerson.getAll().then((response) => {setPersons(response.data)})}
      />
      <Search
        searchPerson={searchPerson}
        handleSearchPerson={handleSearchPerson}
        SearchPerson={SearchPerson}
      />
      <ViewPersonFound personaEncontrada={personaEncontrada} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));