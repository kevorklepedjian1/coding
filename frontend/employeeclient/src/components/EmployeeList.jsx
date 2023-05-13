import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddEditEmployeeModal from './AddEditEmployeeModal';
import Swal from 'sweetalert2';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [editEmployee, setEditEmployee] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('asc');

  useEffect(() => {
    axios.get('http://localhost:3003/employee/list')
      .then(res => {
        setEmployees(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure you want to delete this employee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3003/employee/delete/${id}`)
          .then(res => {
            setEmployees(employees.filter(employee => employee._id !== id));
            Swal.fire({
              icon: 'success',
              title: 'Employee deleted successfully',
            });
          })
          .catch(err => console.log(err));
      }
    });
  };
  

  const handleAddEmployee = () => {
    setIsAddEditModalOpen(true);
    setIsEditModal(false);
    setEditEmployee(null);
  };

  const handleEditEmployee = (employee) => {
    setIsAddEditModalOpen(true);
    setIsEditModal(true);
    setEditEmployee(employee);
  };

  const handleCloseModal = () => {
    setIsAddEditModalOpen(false);
    setIsEditModal(false);
    setEditEmployee(null);
  };

  const handleEmployeeSubmit = (employee) => {
    handleCloseModal();
    if (employee.id) {
      axios.put(`http://localhost:3003/employee/update/${employee.id}`, employee)
      .then(res => {
        setEmployees(employees.map(emp => emp._id === employee.id ? employee : emp));
        Swal.fire({
          icon: 'success',
          title: 'Employee updated successfully',
        });
      })
        
        .catch(err => console.log(err));
    } else {
      axios.post('http://localhost:3003/employee/create', employee)
        .then(res => {
          setEmployees([...employees, employee]);
          Swal.fire({
            icon: 'success',
            title: 'Employee added successfully',
          });
        })
        .catch(err => console.log(err));
    }
  };

  const handleSave = (employee) => {
    handleEmployeeSubmit(employee);
  };

 


 

  return (
    <div >
      <h1 className='sa'>Employees</h1>
      <button onClick={handleAddEmployee}>Add Employee</button>
      <div className='k'>
      <table class="content-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
           
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>{employee.firstName}</td>
              <td class="active-row"> {employee.lastName}</td>
              <td>{employee.age}</td>

              
              
                <td>
                <button  onClick={() => handleEditEmployee(employee, employee._id)}>Edit</button>
                </td>
                <td>
                <button  onClick={() => handleDelete(employee._id)}>X</button></td>
              
             
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      {isAddEditModalOpen && (
        <AddEditEmployeeModal
        
          isOpen={isAddEditModalOpen}
          isEditModal={isEditModal}
          editEmployee={editEmployee}
          onClose={handleCloseModal}
          onSubmit={handleEmployeeSubmit}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default EmployeeList;
