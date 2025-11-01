// src/components/TeacherStatusForm.jsx
import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from './firebase';

function TeacherStatusForm({ teacherId }) {
  const [status, setStatus] = useState('Not Present');

  const handleChange = (e) => {
  const newStatus = e.target.value;
  setStatus(newStatus);

  set(ref(db, 'teachers/' + teacherId), {
    status: newStatus,
    updatedAt: new Date().toISOString()
  });

  console.log(`Updated ${teacherId} to ${newStatus}`);
};

  return (
    <div className="status-form">
      <h3>Update Your Status</h3>
      <label>
        <input type="radio" value="Present" checked={status === 'Present'} onChange={handleChange} />
        Present
      </label>
      <label>
        <input type="radio" value="Not Present" checked={status === 'Not Present'} onChange={handleChange} />
        Not Present
      </label>
    </div>
  );
}

export default TeacherStatusForm;