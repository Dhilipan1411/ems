import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployee } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employee, setEmployee] = useState([]);
  const navigator = useNavigate();

  function getAllEmp() {
    listEmployee()
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getAllEmp();
  }, []);

  function addnewEmp() {
    navigator("/add-employee");
  }

  function updateEmp(id) {
    navigator(`/update-employee/${id}`);
  }

  function deleteEmp(id) {
    alert("confirm delete");
    console.log(id);
    deleteEmployee(id)
      .then((response) => {
        getAllEmp();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h1>List Of Employee</h1>
      <button className="btn btn-primary mb-2" onClick={addnewEmp}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Emp FName</th>
            <th>Emp LName</th>
            <th>Emp Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmp(employee.id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmp(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
