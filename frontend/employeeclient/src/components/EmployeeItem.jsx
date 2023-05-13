import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContext } from './EmployeeContext';

function EmployeeItem({ employee }) {
  const { deleteEmployee, setEditEmployee } = useContext(EmployeeContext);

  const handleDelete = () => {
  deleteEmployee(employee.id);
  };
  
  const handleEdit = () => {
  setEditEmployee(employee);
  };
  
  return (
    <>
  <tr>
  <td>{employee.firstName}</td>
  <td>{employee.lastName}</td>
  <td>{employee.age}</td>
  <td>
  <button onClick={handleEdit}>Edit</button>
  <button onClick={handleDelete}>Delete</button>
    </td>
  </tr>
  </>
  );
  }
  
  export default EmployeeItem;