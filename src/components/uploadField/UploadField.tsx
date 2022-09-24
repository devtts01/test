import React, { useState } from "react";
import "./UploadField.scss";
import Upload from "../../assets/icon/Light.svg";
import TimesCircle from "../../assets/icon/times-circle.svg";
import { toast } from "react-toastify";
interface fileArray {
  fileData?: any;
  editData?: any[];
  allowedArray?:string[];
}
function UploadFiled(props: fileArray) {
  const [dragActive, setDragActive] = React.useState(false);
  // const [dataIntial, setDataintial] = useState(props.editData);
  const [dataIntial, setDataintial] = useState([] as any[]);
  // ref
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const handleDelete = (data: any) => {
    let dataTemp = dataIntial?.filter((value:any) => value.name !== data);
    setDataintial(dataTemp);
  };
  // handle drag events
  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      if (e.dataTransfer.files[0].type==='image/png'||e.dataTransfer.files[0].type==='image/jpeg'){
        dataIntial?.push(e.dataTransfer.files[0]);
        setDataintial(dataIntial);
        props.fileData(dataIntial);
      } else {
        toast("Allow JPEG or PNG only", { type: "error" });
      }  
    }
  };
  const changeDataFunction = (item:any) =>{
    let tempData=dataIntial;
    tempData?.push(item);
    setDataintial(tempData)
  }
  // triggers when file is selected with click
  const handleChange = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      if (e.target.files[0].type==='image/png'||e.target.files[0].type==='image/jpeg'){
        let tempData= '' as any
        setDataintial(
          tempData= [...dataIntial,e.target.files[0]]
        )
        props.fileData(dataIntial);
      } else {
        toast("Allow JPEG or PNG only", { type: "error" });
      }
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="file-upload-field-form">
      <form
        id="form-file-upload"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={dragActive ? "drag-active" : ""}
        >
          <div className="upload-UI">
            <img alt="" src={Upload}></img>
            <div className="drag-sentence">
              <p className="drag-title">Drag and drop your file here or</p>
              <p className="yellow-browse">browse</p>
            </div>
            <button className="upload-button" onClick={onButtonClick}>
              Upload a file
            </button>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
      <div className="chip-files">
        {dataIntial?.map((data: any) => (
          <div className="file-content" >
            <div className="file-info">
              <div className="file-name"> {data.name} </div>
              <div className="file-size"> {data.size} </div>
            </div>
            <img
              alt=""
              src={TimesCircle}
              onClick={() => handleDelete(data.name)}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UploadFiled;
