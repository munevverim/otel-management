import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Hotel, Event, Payment, Mail, SupervisorAccount } from '@mui/icons-material'; // SupervisorAccount ikonu eklendi
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div style={{ width: '240px', backgroundColor: '#f5f5f5', height: '100vh' }}>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Otel Listesi" />
        </ListItem>
        <ListItem button component={Link} to="/hotels">
          <ListItemIcon><Hotel /></ListItemIcon>
          <ListItemText primary="Yeni Otel" />
        </ListItem>
        <ListItem button component={Link} to="/reservations">
          <ListItemIcon><Event /></ListItemIcon>
          <ListItemText primary="Rezervasyonlar" />
        </ListItem>
        {/* Payment History kısmı */}
        <ListItem button component={Link} to="/payment-history">
          <ListItemIcon><Payment /></ListItemIcon>
          <ListItemText primary="Ödeme Geçmişi" />
        </ListItem>
        {/* MailSender kısmı */}
        <ListItem button component={Link} to="/send-mail">
          <ListItemIcon><Mail /></ListItemIcon>
          <ListItemText primary="Mail Gönder" />
        </ListItem>
        {/* User Management kısmı eklendi */}
        <ListItem button component={Link} to="/user-management">
          <ListItemIcon><SupervisorAccount /></ListItemIcon>
          <ListItemText primary="Kullanıcı Yönetimi" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;

