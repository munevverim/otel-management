import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Otel Yönetim Paneli
        </Typography>
        <Button color="inherit" component={Link} to="/hotels">Oteller</Button>
        <Button color="inherit" component={Link} to="/reservations">Rezervasyonlar</Button>
        {/* Payment History düğmesi */}
        <Button color="inherit" component={Link} to="/payment-history">Ödeme Geçmişi</Button>
        {/* MailSender düğmesi */}
        <Button color="inherit" component={Link} to="/send-mail">Mail Gönder</Button>
        {/* User Management düğmesi eklendi */}
        <Button color="inherit" component={Link} to="/user-management">Kullanıcı Yönetimi</Button>
        <Button color="inherit" component={Link} to="/">Çıkış Yap</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
