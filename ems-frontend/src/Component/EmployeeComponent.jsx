import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../Services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  useEffect(
    () => {
      if (id) {
        getEmployee(id)
          .then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    { id },
  );

  function saveEmp(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      //update
      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            navigator("/emp");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigator("/emp");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }

    function validateForm() {
      let valid = true;
      const errorCopy = { ...error };
      if (firstName.trim()) {
        errorCopy.firstName = "";
      } else {
        errorCopy.firstName = "firstname";
        valid = false;
      }

      if (lastName.trim()) {
        errorCopy.lastName = "";
      } else {
        errorCopy.lastName = "lastname";
        valid = false;
      }

      if (email.trim()) {
        errorCopy.email = "";
      } else {
        errorCopy.email = "email";
        valid = false;
      }
      setError(errorCopy);
      return valid;
    }
  }
  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }
  return (
    <div>
      <div className="container">
        <br />
        <div className="row">
          <div className="card col-md-6 offset-md-3 offser-md-3">
            {pageTitle()}
            <div className="card-body">
              <form action="">
                <div className="form-group mb-2">
                  <label className="form-labal">First Name:</label>
                  <input
                    type="text"
                    placeholder="Fname"
                    value={firstName}
                    className={`form-control ${error.firstName ? "is-invalid" : ""}`}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  {error.firstName && (
                    <div className="invalid-feedback">{error.firstName}</div>
                  )}
                </div>

                <div className="form-group mb-2">
                  <label className="form-labal">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Lname"
                    value={lastName}
                    className={`form-control ${error.lastName ? "is-invalid" : ""}`}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  {error.lastName && (
                    <div className="invalid-feedback">{error.lastName}</div>
                  )}
                </div>

                <div className="form-group mb-2">
                  <label className="form-labal">Email:</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    className={`form-control ${error.email ? "is-invalid" : ""}`}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {error.email && (
                    <div className="invalid-feedback">{error.email}</div>
                  )}
                </div>
                <button className="btn btn-success" onClick={saveEmp}>
                  Save Employee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
