import React, {useState, useEffect} from 'react'
import { Table } from "antd"
import axios from 'axios';


 const App=() =>{
  const [resource, setData]=useState([]);
   const fetchData = async () => {
    const response= await axios.get(
      "http://dummy.restapiexample.com/api/v1/employees");
        setData(JSON.parse(response.data['id', 'employee_name', 'employee_salary','Title']));
      console.log(JSON.parse(response.data));
    };
  useEffect(() => {
     fetchData();
  },[]);

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'employee_name',
    dataIndex: 'employee_name',
    key: 'employee_name',
  },
  {
    title: 'employee_salary',
    dataIndex: 'employee_salary',
    key: 'employee_salary',
  },
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
  },
];
//manish
  return(
    <Table 
    dataSource={resource} 
    columns={columns} 
    />
    );    
}


export default App;
