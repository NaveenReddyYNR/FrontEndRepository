import React, { useState } from "react";

export function CtmAddField(props) {
  const [inputFields, setInputFields] = useState([
    { title: "", subTitles: [""] },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeTitle = (index, e) => {
    const values = [...inputFields];
    values[index].title = e.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    let FormFields = {
      title: "",
      subTitles: [""],
    };
    setInputFields([...inputFields, FormFields]);
  };

  const handleAddSubFeild = (index) => {
    let data = JSON.parse(JSON.stringify(inputFields));
    let fData = data[index];
    let subTitles = fData.subTitles;
    subTitles.push("");
    setInputFields(data);
    console.log(inputFields);
  };

  const handleRemoveFields = (index) => {
    const data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const handleOnChangeSubTitle = (e, index, sIndex) => {
    let data = JSON.parse(JSON.stringify(inputFields));
    let fData = data[index];
    let subTitles = fData.subTitles;
    subTitles[sIndex] = e.target.value;
    setInputFields(data);
  };

    console.log(inputFields);
  return (
    <div>
      <span className="InputSubtitle">{props.AddFieldSubtitl} </span>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => {
          return (
            <label className="CtmAddFieldPlsholder" key={index}>
              <input
                placeholder={props.Inputplaceholder}
                onChange={(e) => handleChangeTitle(index, e)}
                value={inputField.title}
              />
              <span className="AddFieldOuter">
                <i className="AddField" onClick={handleAddFields}>
                  +
                </i>
              </span>
              {inputFields.length > 1 ? (
                <span className="AddFieldOuter">
                  <i
                    className="AddField"
                    onClick={() => handleRemoveFields(index)}
                    style={{ marginLeft: 20 }}
                  >
                    -
                  </i>
                </span>
              ) : (
                ""
              )}
              {inputField.subTitles.map((subTitle, sIndex) => {
                return (
                  <label className="CtmAddFieldSubPlsholder" key={sIndex}>
                    <input
                      placeholder={props.SubInputplaceholder}
                      onChange={(e) => {
                        handleOnChangeSubTitle(e, index, sIndex);
                      }}
                      value={subTitle}
                    />
                    <span className="AddFieldOuter">
                      <i
                        className="AddField"
                        onClick={() => handleAddSubFeild(index)}
                      >
                        +
                      </i>
                    </span>
                  </label>
                );
              })}
            </label>
          );
        })}
      </form>
    </div>
  );
}
