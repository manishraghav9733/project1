import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";
import "antd/dist/antd.css";

const App = () => {
  const [resource, setResource] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    setResource(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    fetchData(resource);
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Name",
      dataIndex: "employee_name",
      key: "employee_name"
    },
    {
      title: "Salary",
      dataIndex: "employee_salary",
      key: "employee_salary"
    }
  ];

  return (
    <div>
      <Table columns={columns} dataSource={resource} rowKey={row => row.id} />
    </div>
  );
};
export default App;
