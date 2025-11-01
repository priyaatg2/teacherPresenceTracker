import { useState } from 'react';
import TeacherStatusForm from './TeacherStatusForm';
import StudentDashboard from './StudentDashboard';
import LoginForm from './LoginForm';
import { teachers } from './teachers';
import './App.css';

function App() {
  const [role, setRole] = useState(null);
  const [loggedInTeacher, setLoggedInTeacher] = useState(null);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (username, pin) => {
    const match = Object.entries(teachers).find(
      ([id, creds]) => creds.username === username && creds.pin === pin
    );
    if (match) {
      setLoggedInTeacher(match[0]); // teacherId
      setRole('teacher');
      setLoginError('');
    } else {
      setLoginError('Invalid username or PIN');
    }
  };

  const handleLogout = () => {
    setLoggedInTeacher(null);
    setRole(null);
  };

  return (
    <div className="app-wrapper">
      <h1 className="page-title">Teacher Presence Tracker</h1>

      <div className="container">
        {!role && (
          <>
            <p className="role-label">You are a:</p>
            <button onClick={() => setRole('login')}>Teacher</button>
            <button onClick={() => setRole('student')}>Student</button>
          </>
        )}

        {role === 'login' && (
          <LoginForm onLogin={handleLogin} error={loginError} />
        )}

        {role === 'teacher' && loggedInTeacher && (
          <>
            <p className="logged-in-label">
              <strong>WELCOME </strong> {teachers[loggedInTeacher].username}
            </p>
            <TeacherStatusForm teacherId={loggedInTeacher} />
            <StudentDashboard />
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}

        {role === 'student' && (
          <>
            <StudentDashboard />
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
