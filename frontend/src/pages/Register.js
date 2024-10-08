import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Stil dosyası

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Kayıt başarılıysa giriş sayfasına yönlendirin
        navigate('/login');
      } else {
        setError(data.message || 'Kayıt başarısız oldu!');
      }
    } catch (err) {
      setError('Sunucu hatası. Lütfen daha sonra tekrar deneyin.');
    }
  };

  return (
    <div className="register-container">
      <Paper className="register-form" elevation={3}>
        <Typography variant="h4" gutterBottom>Kayıt Ol</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleRegister}>
          <TextField
            label="Adınız"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
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
            Kayıt Ol
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Register;
