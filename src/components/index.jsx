import React, { useState, useEffect } from "react";
import { Table, Button, Divider, Popconfirm } from "antd";
import { employeeList } from "../actions";
import "antd/dist/antd.css";

const EmployeeIndex = () => {
  //
  const [resource, setResource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await employeeList();
        setResource(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
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
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record, index) => (
        <span>
          <Button
            type="link"
            // onClick={() => onEdit(record)}
            style={{ padding: 0, marginRight: "10px" }}
          >
            Update
          </Button>
          <Divider type="vertical" />
          <Popconfirm
            title="Are you sure you want to delete ?"
            okText="Yes"
            cancelText="No"
            //  onConfirm={() => onDelete(record)}
          >
            <Button
              type="link"
              style={{ color: "red", padding: 0, marginRight: "10px" }}
            >
              Delete
            </Button>
          </Popconfirm>
        </span>
      )
    }
  ];

  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={resource}
        rowKey={row => row.id}
      />
    </div>
  );
};
export default EmployeeIndex;
