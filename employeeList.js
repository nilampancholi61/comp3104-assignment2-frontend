import React from 'react';

const EmployeeList = () => {
  const employees = [
    { id: 1, name: 'John Doe', department: 'HR', position: 'Manager' },
    { id: 2, name: 'Jane Smith', department: 'IT', position: 'Developer' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.position}</td>
            <td>
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
