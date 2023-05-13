const baseUrl = 'http://localhost:3003';

export const getAllEmployees = async () => {
  const response = await fetch(`${baseUrl}/employee/list`);
  const data = await response.json();
  return data;
};

export const createEmployee = async (employee) => {
  const response = await fetch(`${baseUrl}/employee/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employee),
  });
  const data = await response.json();
  return data;
};

export const updateEmployee = async (id, employee) => {
  const response = await fetch(`${baseUrl}/employee/update/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employee),
  });
  const data = await response.json();
  return data;
};

export const deleteEmployee = async (id) => {
  const response = await fetch(`${baseUrl}/employee/delete/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};

export const getEmployeeById = async (id) => {
  const response = await fetch(`${baseUrl}/employee/${id}`);
  const data = await response.json();
  return data;
};

