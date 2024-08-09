import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react'; // @inertiajs/react'ten Link'i içe aktarın
import axios from 'axios';

const FormsIndex = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/forms')
      .then(response => {
        setForms(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching forms:', error);
        setLoading(false);
      });
  }, []);

  const handleUpdateStatus = (id, status) => {
    axios.post(`/api/forms/${id}/update-status`, { status })
      .then(response => {
        setForms(forms.map(form => form.id === id ? { ...form, status } : form));
      })
      .catch(error => {
        console.error('Error updating form status:', error);
      });
  };

  return (
    <div>
      <h1>Forms</h1>
      <Link href="/admin/forms/create" className="btn btn-primary">Create New Form</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Insurance Type</th>
              <th>Insurance Policy Number</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {forms.map(form => (
              <tr key={form.id}>
                <td>{form.id}</td>
                <td>{form.firstName}</td>
                <td>{form.lastName}</td>
                <td>{form.email}</td>
                <td>{form.date}</td>
                <td>{form.time}</td>
                <td>{form.insuranceType}</td>
                <td>{form.insurancePolicyNumber}</td>
                <td>{form.status}</td>
                <td>
                  <button 
                    className="btn btn-success" 
                    onClick={() => handleUpdateStatus(form.id, 'closed')}
                  >
                    Close
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FormsIndex;
