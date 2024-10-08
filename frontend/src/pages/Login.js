import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Stil dosyası

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Süper kullanıcı e-posta ve şifre kontrolü
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'password123') {
      navigate('/user-management'); // Giriş başarılıysa yönetim paneline yönlendir
    } else {
      setError('Geçersiz kullanıcı adı veya şifre!');
    }
  };

  return (
    <div className="login-container">
      <Paper className="login-form" elevation={3}>
        <Typography variant="h4" gutterBottom>Giriş Yap</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleLogin}>
          <TextField
            label="E-posta"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Şifre"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Giriş Yap
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;

