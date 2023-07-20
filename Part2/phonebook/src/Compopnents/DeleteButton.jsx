import servicePerson from "../service/servicePerson";

const deletePerson = (deleteID) => {
    if(window.confirm("¿Desea eliminar el contacto?")){
        servicePerson
            .delet((parseInt(deleteID)))
            .then((Response) => {
                console.log("delete succefule");
            })
            .catch((error) => {
                console.error("error");
            });
    }
};


const DeleteButton = ({ deleteID, refresh}) => {
  return <button onClick={() => deletePerson (deleteID)}>delete</button>;
};

export default DeleteButton;
