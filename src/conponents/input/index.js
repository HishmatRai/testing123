import React from "react";
const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};
export default Input;
