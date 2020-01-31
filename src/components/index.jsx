import React, { useState, useEffect } from "react";
import { Table, Button, Divider, Popconfirm, Modal,} from "antd";
import { employeeList } from "../actions";
import { deleteEmployeeList } from "../actions";
import "antd/dist/antd.css";
import EmpDetails from './EmpDetails'

const EmployeeIndex = () => {
  //
  const [resource, setResource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [showModal,setShowModal] = useState(false);

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

 const openModal = (data) => {
  setSelectedData(data);
  setShowModal(true);
  console.log(data);
};
const closeModal = () =>{
  setShowModal(false);
};
  const deleteData = async data => {
    try {
      await deleteEmployeeList(data.id);
      alert(`data deleted `);
    } catch (error) {
      console.log(data.id)
    }
};

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
      title: "Age",
      dataIndex: "employee_age",
      key: "employee_age"
    },
    {
      title: "Actions",
      key: "actions",
     
      render: (text, record, index) => (
        <span>
          <Button
            type="primary"
            onClick={() => openModal(record)}
            //style={{ padding: 0, marginRight: "10px" }}
          >
            Update
          </Button>
          <Divider type="vertical" />
          <Popconfirm
            title="Are you sure you want to delete ?"
            okText="Yes"
            cancelText="No"
            onConfirm={deleteData}
          >
            <Button
              type="danger"
              //onClick={deleteData}
             // style={{ color: "white", padding: '10px', marginRight: "10px" }}
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
     
      <Modal
      title="Employee Details"
      visible={showModal}
      onCancel={closeModal}
      onOk={closeModal}
      > 
      <EmpDetails  selectedData={selectedData}/>
  </Modal></div>   
  );
};
export default EmployeeIndex;
