import React, { useState } from "react";


function App() {
  const [persons, setPersons] = useState([
    { name: "", age: "", phoneNumbers: [""] },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...persons];
    data[index][event.target.name] = event.target.value;
    setPersons(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(persons);
  };

  const addPersonFields = () => {
    let person = {
      name: "",
      age: "",
      phoneNumbers: [""],
    };
    setPersons([...persons, person]);
  };

  const addPhoneNumberField = (personIndex) => {
    let data = JSON.parse(JSON.stringify(persons));
    let person = data[personIndex];
    let phoneNumbers = person.phoneNumbers;
    phoneNumbers.push("");
    setPersons(data);
    // console.log(persons);
  };

  const updatePhoneNumber = (e, personIndex, phoneNumberIndex) => {
    let data = JSON.parse(JSON.stringify(persons));
    let person = data[personIndex];
    let phoneNumbers = person.phoneNumbers;
    console.log(
      "phoneNumber changed. target=",
      e.target.value,
      "current",
      phoneNumbers[phoneNumberIndex]
    );
    phoneNumbers[phoneNumberIndex] = e.target.value;
    setPersons(data);
  };

  const removeFields = (index) => {
    let data = [...persons];
    data.splice(index, 1);
    setPersons(data);
  };
  
  const personsLength = persons.length;
  return (
    <div className="App">
      <form onSubmit={submit}>
        {persons.map((person, personIndex) => {
          return (
            <center>
              <div
                key={personIndex}
                style={{
                  width: "200px",
                  display: "block",
                  border: "2px solid red",
                }}
              >
                <input
                  style={{ border: "none", height: "50%", width: "80%" }}
                  name="name"
                  placeholder="Name"
                  onChange={(event) => handleFormChange(event, personIndex)}
                  value={person.name}
                />
                <span>
                  <i className="AddField" onClick={addPersonFields}>
                    +
                  </i>
                  <RemoveButton
                    arrLength={personsLength}
                    removeFields={() => removeFields(personIndex)}
                  />
                </span>
                <input
                  style={{ border: "none" }}
                  name="age"
                  placeholder="Age"
                  onChange={(event) => handleFormChange(event, personIndex)}
                  value={person.age}
                />
                <PhoneNumbers
                  phoneNumbers={person.phoneNumbers}
                  personIndex={personIndex}
                  addPhoneNumberField={addPhoneNumberField}
                  updatePhoneNumber={updatePhoneNumber}
                />
              </div>
              <button>
                <i
                  className="AddField"
                  onClick={() => removeFields(personIndex)}
                >
                  Remove
                </i>
              </button>
            </center>
          );
        })}
      </form>
      <center>
        {/* <button onClick={addFields}>Add More..</button> */}
        <br />
        <button onClick={submit}>Submit</button>
      </center>
    </div>
  );
}

function RemoveButton(props) {
  if (props.arrLength === 1) {
    return <></>;
  } else {
    return (
      <span style={{margin:"5px"}}>
        <i className="AddField" onClick={props.removeFields}>
          -
        </i>
      </span>
    );
  }
}

function PhoneNumbers(props) {
  const phoneNumbers = props.phoneNumbers;
  const personIndex = props.personIndex;

  console.log("PhoneNumbers - phoneNumbers", phoneNumbers);
  return (
    <div>
      {phoneNumbers.map((phoneNumber, phoneNumberIndex) => {
        return (
          <div>
            <input
              style={{ border: "none" }}
              name="phoneNumbers"
              placeholder="Phone Number"
              type={Number}
              onChange={(event) =>
                props.updatePhoneNumber(event, personIndex, phoneNumberIndex)
              }
              value={phoneNumber}
            />
            <span>
              <i
                className="AddField"
                onClick={() => props.addPhoneNumberField(props.personIndex)}
              >
                +
              </i>
            </span>
          </div>
        );
      })}
    </div>
  );
}
export default App;
