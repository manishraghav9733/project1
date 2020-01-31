import React, { useState, useEffect } from "react";
import { Input,Button } from "antd";


const EmpDetails = (props) => {
    return(
        <form 
        >
            <Input value={props.selectedData.id} />
            <br/><br/>
            <Input value={props.selectedData.employee_name} /><br/><br/>
            <Input value={props.selectedData.employee_salary}/><br/><br/> 
            <Input value={props.selectedData.employee_age}/><br/><br/> 
            <Button type="primary" style={{background:'green'}} onClick={()=>alert("edited")}>Edit User</Button>          
        </form>
    )
  };
  export default EmpDetails;