import React, { useId } from "react";
import { useRef } from "react";

function InputForm(props) {
  const id = useId();
  const inputRef = useRef();
  return (
    <React.Fragment>
      <div className="inputForm">
        <label htmlFor={id} onClick={() => inputRef.current.focus()}>
          {props.label}
        </label>
        <input ref={inputRef} id={id} type={props.type} />
      </div>
    </React.Fragment>
  );
}

export default InputForm;
