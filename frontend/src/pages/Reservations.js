import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import './Reservations.css'; // Stil dosyasını ekleyin

const Reservations = () => {
  const [reservations, setReservations] = useState([
    { id: 1, guestName: 'Ali Veli', gender: 'Erkek', roomNumber: 101, startDate: '2024-09-01', endDate: '2024-09-05', price: 500, guests: 2, hasChildren: false, roomType: 'Deluxe', nights: 4 },
    { id: 2, guestName: 'Ayşe Yılmaz', gender: 'Kadın', roomNumber: 102, startDate: '2024-09-10', endDate: '2024-09-12', price: 300, guests: 1, hasChildren: false, roomType: 'Standart', nights: 2 },
    { id: 3, guestName: 'Mehmet Kaya', gender: 'Erkek', roomNumber: 103, startDate: '2024-09-15', endDate: '2024-09-20', price: 750, guests: 3, hasChildren: true, roomType: 'Suite', nights: 5 },
  ]);

  const [editReservation, setEditReservation] = useState(null); // Düzenlenecek rezervasyon
  const [newReservation, setNewReservation] = useState({ guestName: '', gender: '', roomNumber: '', startDate: '', endDate: '', price: '', guests: '', hasChildren: false, roomType: '', nights: '' });
  const [showAddForm, setShowAddForm] = useState(false); // Formun görünürlüğünü kontrol eden state

  const handleAddReservation = () => {
    const newId = reservations.length ? reservations[reservations.length - 1].id + 1 : 1;
    setReservations([...reservations, { ...newReservation, id: newId }]);
    setNewReservation({ guestName: '', gender: '', roomNumber: '', startDate: '', endDate: '', price: '', guests: '', hasChildren: false, roomType: '', nights: '' });
    setShowAddForm(false); // Formu gizleriz
  };

  const handleUpdateReservation = () => {
    setReservations(reservations.map(reservation => reservation.id === editReservation.id ? editReservation : reservation));
    setEditReservation(null);
  };

  const handleDeleteReservation = (id) => {
    setReservations(reservations.filter(reservation => reservation.id !== id));
  };

  return (
    <div className="reservations-container">
      <h2>Rezervasyon Listesi</h2>
      <Button variant="contained" color="primary" onClick={() => setShowAddForm(!showAddForm)} style={{ marginBottom: '20px' }}>
        {showAddForm ? 'İptal' : 'Yeni Rezervasyon Ekle'}
      </Button>

      {showAddForm && (
        <form className="reservation-form" onSubmit={(e) => { e.preventDefault(); handleAddReservation(); }}>
          <TextField label="Misafir Adı" value={newReservation.guestName} onChange={(e) => setNewReservation({ ...newReservation, guestName: e.target.value })} style={{ marginRight: '10px' }} />
          <FormControl style={{ marginRight: '10px' }}>
            <InputLabel>Cinsiyet</InputLabel>
            <Select value={newReservation.gender} onChange={(e) => setNewReservation({ ...newReservation, gender: e.target.value })}>
              <MenuItem value="Erkek">Erkek</MenuItem>
              <MenuItem value="Kadın">Kadın</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Oda Numarası" type="number" value={newReservation.roomNumber} onChange={(e) => setNewReservation({ ...newReservation, roomNumber: e.target.value })} style={{ marginRight: '10px' }} />
          <TextField label="Giriş Tarihi" type="date" value={newReservation.startDate} onChange={(e) => setNewReservation({ ...newReservation, startDate: e.target.value })} style={{ marginRight: '10px' }} InputLabelProps={{ shrink: true }} />
          <TextField label="Çıkış Tarihi" type="date" value={newReservation.endDate} onChange={(e) => setNewReservation({ ...newReservation, endDate: e.target.value })} style={{ marginRight: '10px' }} InputLabelProps={{ shrink: true }} />
          <TextField label="Fiyat" type="number" value={newReservation.price} onChange={(e) => setNewReservation({ ...newReservation, price: e.target.value })} style={{ marginRight: '10px' }} />
          <TextField label="Kaç Kişi" type="number" value={newReservation.guests} onChange={(e) => setNewReservation({ ...newReservation, guests: e.target.value })} style={{ marginRight: '10px' }} />
          <FormControl style={{ marginRight: '10px' }}>
            <InputLabel>Çocuk Var mı?</InputLabel>
            <Select value={newReservation.hasChildren} onChange={(e) => setNewReservation({ ...newReservation, hasChildren: e.target.value })}>
              <MenuItem value={false}>Hayır</MenuItem>
              <MenuItem value={true}>Evet</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Oda Türü" value={newReservation.roomType} onChange={(e) => setNewReservation({ ...newReservation, roomType: e.target.value })} style={{ marginRight: '10px' }} />
          <TextField label="Kaç Gece" type="number" value={newReservation.nights} onChange={(e) => setNewReservation({ ...newReservation, nights: e.target.value })} style={{ marginRight: '10px' }} />
          <Button variant="contained" color="primary" type="submit">
            Rezervasyon Ekle
          </Button>
        </form>
      )}

      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Oda Numarası</TableCell>
              <TableCell>Misafir Adı</TableCell>
              <TableCell>Cinsiyet</TableCell>
              <TableCell>Giriş Tarihi</TableCell>
              <TableCell>Çıkış Tarihi</TableCell>
              <TableCell>Fiyat</TableCell>
              <TableCell>İşlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map(reservation => (
              <TableRow key={reservation.id} className="table-row">
                <TableCell>{reservation.roomNumber}</TableCell>
                <TableCell>{reservation.guestName}</TableCell>
                <TableCell>{reservation.gender}</TableCell>
                <TableCell>{reservation.startDate}</TableCell>
                <TableCell>{reservation.endDate}</TableCell>
                <TableCell>{reservation.price} TL</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" style={{ marginRight: '10px' }} onClick={() => setEditReservation(reservation)}>
                    Düzenle
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteReservation(reservation.id)}>
                    Sil
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Rezervasyon düzenleme formu */}
      {editReservation && (
        <div className="edit-form">
          <h2>Rezervasyonu Düzenle</h2>
          <form className="reservation-form" onSubmit={(e) => { e.preventDefault(); handleUpdateReservation(); }}>
            <TextField label="Misafir Adı" value={editReservation.guestName} onChange={(e) => setEditReservation({ ...editReservation, guestName: e.target.value })} style={{ marginRight: '10px' }} />
            <FormControl style={{ marginRight: '10px' }}>
              <InputLabel>Cinsiyet</InputLabel>
              <Select value={editReservation.gender} onChange={(e) => setEditReservation({ ...editReservation, gender: e.target.value })}>
                <MenuItem value="Erkek">Erkek</MenuItem>
                <MenuItem value="Kadın">Kadın</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Oda Numarası" type="number" value={editReservation.roomNumber} onChange={(e) => setEditReservation({ ...editReservation, roomNumber: e.target.value })} style={{ marginRight: '10px' }} />
            <TextField label="Giriş Tarihi" type="date" value={editReservation.startDate} onChange={(e) => setEditReservation({ ...editReservation, startDate: e.target.value })} style={{ marginRight: '10px' }} InputLabelProps={{ shrink: true }} />
            <TextField label="Çıkış Tarihi" type="date" value={editReservation.endDate} onChange={(e) => setEditReservation({ ...editReservation, endDate: e.target.value })} style={{ marginRight: '10px' }} InputLabelProps={{ shrink: true }} />
            <TextField label="Fiyat" type="number" value={editReservation.price} onChange={(e) => setEditReservation({ ...editReservation, price: e.target.value })} style={{ marginRight: '10px' }} />
            <TextField label="Kaç Kişi" type="number" value={editReservation.guests} onChange={(e) => setEditReservation({ ...editReservation, guests: e.target.value })} style={{ marginRight: '10px' }} />
            <FormControl style={{ marginRight: '10px' }}>
              <InputLabel>Çocuk Var mı?</InputLabel>
              <Select value={editReservation.hasChildren} onChange={(e) => setEditReservation({ ...editReservation, hasChildren: e.target.value })}>
                <MenuItem value={false}>Hayır</MenuItem>
                <MenuItem value={true}>Evet</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Oda Türü" value={editReservation.roomType} onChange={(e) => setEditReservation({ ...editReservation, roomType: e.target.value })} style={{ marginRight: '10px' }} />
            <TextField label="Kaç Gece" type="number" value={editReservation.nights} onChange={(e) => setEditReservation({ ...editReservation, nights: e.target.value })} style={{ marginRight: '10px' }} />
            <Button variant="contained" color="primary" type="submit">
              Rezervasyonu Güncelle
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Reservations;
