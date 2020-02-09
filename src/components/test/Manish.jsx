import React from "react";
import { Input } from "antd";

const Manish = props => {
  const inputChange = e => {
    console.log(e.target.value);
    // setName(e.target.value);
    props.setName(e.target.value);
  };

  return (
    <div>
      <h1>Manish {props.sername} </h1>
      <Input onChange={inputChange} />

      <span></span>
    </div>
  );
};

export default Manish;
