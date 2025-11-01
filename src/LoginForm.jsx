// src/components/LoginForm.jsx
import { useState } from 'react';

function LoginForm({ onLogin, error }) {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, pin);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h3>Teacher Login</h3>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default LoginForm;