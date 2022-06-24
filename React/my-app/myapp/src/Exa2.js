export function CtmAddTitleField(props) {
    const templateMarkerValues = props.curation.templateMarkerValues;
    
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    const updateTemplateMarkerTitle = (titleIndex, event) => {
      const values = [...templateMarkerValues];
      values[titleIndex]["title"] = event.target.value;
      props.updateCuration({...props.curation, templateMarkerValues:values});
    };
    const updateTemplateMarkerSubtitle = (titleIndex, subtitleIndex, event) => {
      const values = [...templateMarkerValues];
      values[titleIndex]["title"] = event.target.value;
      values[titleIndex].subtitles[subtitleIndex] = event.target.value;
      props.updateCuration({...props.curation, templateMarkerValues:values});
    };
    const addTemplateMarkerTitleFields =() => {
      let markerTitleObject = {
        title: "",
        subtitles: [""],
      };
      let curationLocal = JSON.parse(JSON.stringify(props.curation));
      curationLocal.templateMarkerValues.push(markerTitleObject);
      props.updateCuration(curationLocal);
    };
    const removeTemplateMarkerTitleFields =(titleIndex) => {
      let curationLocal = JSON.parse(JSON.stringify(props.curation));
      curationLocal.templateMarkerValues.splice(titleIndex, 1);
      props.updateCuration(curationLocal);
    };
    const addTemplateMarkerSubtitleFields =(titleIndex) => {
      let curationLocal = JSON.parse(JSON.stringify(props.curation));
      curationLocal.templateMarkerValues[titleIndex].subtitles.push("");
      props.updateCuration(curationLocal);
    };
    const removeTemplateMarkerSubtitleFields =(titleIndex, subtitleIndex) => {
      let curationLocal = JSON.parse(JSON.stringify(props.curation));
      curationLocal.templateMarkerValues[titleIndex].subtitles.splice(subtitleIndex); 
      props.updateCuration(curationLocal);
    };
    return (
      <div>
        <span className="InputSubtitle">{props.AddFieldSubtitl} </span>
        <form onSubmit={handleSubmit}>
          {templateMarkerValues.map((templateMarkerTitle, titleIndex) => (
            <div>
            <label className="CtmAddFieldPlsholder">
              <input
                placeholder={props.Inputplaceholder}
                onChange={(event) => updateTemplateMarkerTitle(titleIndex, event)}
                value={templateMarkerTitle.name}
              />
              <span className="AddFieldOuter">
                {templateMarkerValues.length > 1 ? (
           
                    <i id={"remove-"+titleIndex}
                      className="AddField"
                      onClick={() => removeTemplateMarkerTitleFields(titleIndex)}
                      style={{ marginLeft: 20 }}
                    >-</i>
                 
                ) : (
                  ""
                )}
                <i id={"add-"+titleIndex} className="AddField" onClick={() => addTemplateMarkerTitleFields()}>+</i>
              </span>
            </label>
            {templateMarkerValues[titleIndex].subtitles.map((subtitle, subtitleIndex) => (
              <label className="CtmAddFieldSubPlsholder">
              <input
                placeholder={props.SubInputplaceholder}
                onChange={(event) => updateTemplateMarkerSubtitle(titleIndex, subtitleIndex, event)}
              />
              <span className="AddFieldOuter">
                {templateMarkerValues[titleIndex].subtitles.length > 1 ? (
                  <i id={"removeSubTitle-" + titleIndex + subtitleIndex}
                    className="AddField"
                    onClick={() => removeTemplateMarkerSubtitleFields(titleIndex, subtitleIndex)}
                    style={{ marginLeft: 20 }}
                  >-</i>
                ) : (
                  ""
                )}
                <i id={"addSubTitle-" + titleIndex + subtitleIndex} className="AddField" onClick={() => addTemplateMarkerSubtitleFields(titleIndex)}>
                  +
                </i>
              </span>
              </label>
            ))}
            </div>
          ))}
        </form>
      </div>
    );
  }
  
//   export function CtmAddFieldEdit(props) {
//     return (
//       <div>
//         <label className="CtmAddFieldEdit">
        
//           <input
//             placeholder={props.EditInputplaceholder}
//             onChange={props.onChange}
//           />
//           <span className="AddFieldOuter">
            
//             <i className="AddField">+</i> <i className="RemovewField">-</i>
//           </span>
//         </label>
//       </div>
//     );
//   }
  
//   export function CtmAddFieldEditSubtitle(props) {
//     return (
//       <div>
//         <label className="CtmAddFieldSubEdit">
//           <input
//             placeholder={props.EditSubInputplaceholder}
//             className={props.className}
//             onChange={props.onChange}
//           />
//           <span className="AddFieldOuter">
           
//             <i className="AddField">+</i> <i className="RemovewField">-</i>
//           </span>
//         </label>
//       </div>
//     );
//   }
  
//   export function EnterWalleteAddfld(props) {
//     return (
//       <div>
//         <label className="CtmEnterWalleteAddfld">
//           <input
//             placeholder={props.EnterWalleteplaceholder}
//             className={props.className}
//             onChange={props.onChange}
//           />
//           <span className="AddFieldOuter">
          
//             <i className="AddField">+</i>
//           </span>
//         </label>
//       </div>
//     );
//   }
  
//   export function EnterWalleteCopy(props) {
//     return (
//       <div>
//         <label className="CtmEnterWalleteCopy">
//           <lable className={props.className}>
//             <span class="HiddeenId">
//               <i>{props.CopyEnterWalletaddOne}</i>
//               {props.CopyEnterWalletaddTwo}
//             </span>
//             <span className="AddFieldOuter">
//               <i className="AddField">+</i>
//             </span>
//           </lable>
//         </label>
//       </div>
//     );
//   }
  
//   export function DiscreteSliderLabel() {
//     const [value, setValue] = React.useState([20, 75]);
  
//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
//     function valuetext(value) {
//       return `${value}`;
//     }
//     const marks = [
//       {
//         value: 0,
//         label: "$01",
//       },
//       {
//         value: 20,
//         label: "$1K",
//       },
//       {
//         value: 50,
//         label: "$10K",
//       },
//       {
//         value: 75,
//         label: "$50K",
//       },
//       {
//         value: 100,
//         label: "Max",
//       },
//     ];
  
//     return (
//       <Slider
//         getAriaLabel={() => "Price range"}
//         value={value}
//         step={25}
//         onChange={handleChange}
//         getAriaValueText={valuetext}
//         marks={marks}
//       />
//     );
//   }
  
//   export function PaginationBlock(props) {
//     return (
//       <div className="PaginationBlock">
//         <Stack spacing={10}>
//           <Pagination
//             count={99}
//             defaultPage={8}
//             siblingCount={2}
//             shape="rounded"
//           />
//         </Stack>
//       </div>
//     );
//   }