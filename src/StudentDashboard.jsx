import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from './firebase';

function StudentDashboard() {
  const [teachers, setTeachers] = useState({});

  useEffect(() => {
    const teachersRef = ref(db, 'teachers');
    const unsubscribe = onValue(teachersRef, (snapshot) => {
      const data = snapshot.val();
      setTeachers(data || {});
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="dashboard">
      <h2>Teacher Status</h2>
      {Object.entries(teachers).map(([id, info]) => (
        <p key={id}>
          <strong>{id}</strong> :{' '}
          <span className={info.status === 'Present' ? 'status-present' : 'status-absent'}>
            {info.status}
          </span>{' '}
          <em>(Last updated: {new Date(info.updatedAt).toLocaleTimeString()})</em>
        </p>
      ))}
    </div>
  );
}

export default StudentDashboard;
