import { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';

const AddEditEmployeeModal = ({ isOpen, onRequestClose, onSave, isEditModal, editEmployee,onSubmit }) => {
  const [firstName, setFirstName] = useState(editEmployee ? editEmployee.firstName : '');
  const [lastName, setLastName] = useState(editEmployee ? editEmployee.lastName : '');
  const [age, setAge] = useState(editEmployee ? editEmployee.age : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      age: parseInt(age),
    };
    if (isEditModal) {
      onSave({ ...newEmployee, id: editEmployee._id });
    } else {
      onSave(newEmployee);
    }
    setFirstName('');
    setLastName('');
    setAge('');
  };

  return (
    <Modal open={isOpen} onClose={onRequestClose}>
      <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px' }}>
        <h2>{isEditModal ? 'Edit Employee' : 'Add Employee'}</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            margin="dense"
            fullWidth
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            margin="dense"
            fullWidth
          />
          <TextField
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            margin="dense"
            fullWidth
          />
          <Button type="submit" variant="contained" sx={{ mr: 2 }}>
            {isEditModal ? 'Save Changes' : 'Add Employee'}
          </Button>
          <Button variant="contained" onClick={onRequestClose}>
            Cancel
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default AddEditEmployeeModal;
