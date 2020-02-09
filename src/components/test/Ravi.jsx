import React, { useState } from "react";
import Manish from "./Manish";
import { Input } from "antd";

const Ravi = () => {
  //const sername = " Raghav";
  /* 
  const dateOfBirth = "01.07.1196";
  const address = "gurgaon";
  */

  const [sername, setSername] = useState("ravi");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [name, setName] = useState("");

  const onChangeName = () => {
    if (sername === "ravi") {
      setSername("raghav");
    } else {
      setSername("ravi");
    }
  };

  const myNumber = () => {
    setPhoneNumber(9811346435);
  };

  return (
    <div>
      <h1>ravi</h1>

      <h2>{name}</h2>

      <Manish sername={sername} setName={setName} />
      <span>{phoneNumber}</span>
      <span onClick={onChangeName}>Change Sername</span>
      <div onClick={myNumber}>Cjaankbkj</div>
    </div>
  );
};

export default Ravi;
