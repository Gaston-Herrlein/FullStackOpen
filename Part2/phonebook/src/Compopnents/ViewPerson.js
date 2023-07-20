import DeleteButton from "./DeleteButton";

const ViewPersons = (props) => {
  return (
    <div>
      <h2> Numbers </h2>
      <ul>
        {props.persons.map((value, index) => {
          return (
            <div key={index}>
              <li>
                {value.name}: {value.number}
              </li>
              <DeleteButton deleteID={value.id}/>
            </div>
          );
        })}
      </ul>
      <button onClick={props.refresh}>Update</button>
    </div>
  );
};

export default ViewPersons;
