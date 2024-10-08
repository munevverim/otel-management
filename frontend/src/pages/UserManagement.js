import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Select, MenuItem } from '@mui/material';
import './UserManagement.css'; // Stil dosyası

const UserManagement = () => {
  // Kullanıcıları statik olarak burada tutuyoruz
  const [users, setUsers] = useState([
    { id: 1, email: 'admin@example.com', role: 'admin' }, // Süper kullanıcı
  ]);

  const [newUser, setNewUser] = useState({ email: '', role: 'user' });
  const [error, setError] = useState('');

  // Kullanıcı ekleme fonksiyonu
  const handleCreateUser = () => {
    if (newUser.email) {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setNewUser({ email: '', role: 'user' });
      setError('');
    } else {
      setError('Lütfen bir e-posta girin');
    }
  };

  return (
    <div className="user-management-container">
      <Paper className="user-form" elevation={3}>
        <Typography variant="h4" gutterBottom>Kullanıcı Yönetimi</Typography>
        <TextField
          label="E-posta"
          type="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          fullWidth
          margin="normal"
          required
        />
        <Select
          label="Rol"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          fullWidth
          margin="normal"
        >
          <MenuItem value="user">Kullanıcı</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
        <Button variant="contained" color="primary" fullWidth onClick={handleCreateUser} style={{ marginTop: '20px' }}>
          Kullanıcı Oluştur
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </Paper>

      <Typography variant="h5" style={{ marginTop: '20px' }}>Kullanıcı Listesi</Typography>
      <Paper className="user-list" elevation={3}>
        {users.map((user) => (
          <Typography key={user.id}>
            {user.email} - Rol: {user.role}
          </Typography>
        ))}
      </Paper>
    </div>
  );
};

export default UserManagement;
