import React from 'react';
import { Typography, Grid, Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import './Dashboard.css';

const Dashboard = () => {
  const hotelList = [
    { id: 1, name: 'Otel 1', location: 'İstanbul', supplier: 'Acenta 1' },
    { id: 2, name: 'Otel 2', location: 'Ankara', supplier: 'Acenta 2' },
    { id: 3, name: 'Otel 3', location: 'Antalya', supplier: 'Acenta 3' },
  ];

  return (
    <div className="container">
      {/* Üstteki filtreleme alanları */}
      <Typography variant="h4" gutterBottom>Otel Yönetim Paneli</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <TextField label="Otel Adı" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField label="Konum" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField label="Acenta Adı" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="contained" color="primary" fullWidth>Ara</Button>
        </Grid>
      </Grid>

      {/* Otel listesi */}
      <List>
        {hotelList.map((hotel) => (
          <ListItem key={hotel.id} className="hotel-list-item">
            <ListItemText
              primary={hotel.name}
              secondary={`Konum: ${hotel.location}`}
            />
            <ListItemText
              primary={`Supplier: ${hotel.supplier}`}  // Sublayer kısmını Supplier olarak değiştirdim
            />
            <Button variant="contained" color="primary">Otele Git</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Dashboard;
