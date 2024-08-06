import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const FormShow = ({ form }) => {
  const updateStatus = (status) => {
    Inertia.post(route('admin.forms.update-status', form.id), { status });
  };

  const deleteForm = () => {
    Inertia.post(route('admin.forms.delete', form.id));
  };

  return (
    <div>
      <h1>Form Details</h1>
      <p>ID: {form.id}</p>
      <p>Status: {form.status}</p>
      {/* Add more form details as needed */}
      <button onClick={() => updateStatus('open')}>Mark as Open</button>
      <button onClick={() => updateStatus('closed')}>Mark as Closed</button>
      <button onClick={deleteForm}>Delete Form</button>
    </div>
  );
};

export default FormShow;
