import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './ReservationList.css';
const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get('/api/reservations')
      .then(response => setReservations(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Oda No</TableCell>
            <TableCell>Misafir Adı</TableCell>
            <TableCell>Giriş Tarihi</TableCell>
            <TableCell>Çıkış Tarihi</TableCell>
            <TableCell>Fiyat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation._id}>
              <TableCell>{reservation.roomNumber}</TableCell>
              <TableCell>{reservation.guestName}</TableCell>
              <TableCell>{reservation.startDate}</TableCell>
              <TableCell>{reservation.endDate}</TableCell>
              <TableCell>{reservation.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReservationList;
