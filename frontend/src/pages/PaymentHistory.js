import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import './PaymentHistory.css';

const PaymentHistory = () => {
  // Statik ödeme verileri
  const [payments, setPayments] = useState([
    {
      _id: '1',
      user: 'John Doe',
      amount: 100,
      currency: 'USD',
      status: 'Completed',
      createdAt: new Date().toISOString(),
    },
    {
      _id: '2',
      user: 'Jane Smith',
      amount: 200,
      currency: 'USD',
      status: 'Pending',
      createdAt: new Date().toISOString(),
    },
    {
      _id: '3',
      user: 'Alice Johnson',
      amount: 150,
      currency: 'USD',
      status: 'Failed',
      createdAt: new Date().toISOString(),
    },
  ]);

  // useEffect'te API isteği yapılacak ancak şu an statik veri kullanıyoruz
  useEffect(() => {
    // Backend'e bağlandığınızda bu kısmı açabilirsiniz.
    // const fetchPayments = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:5000/api/payments');
    //     setPayments(response.data);
    //   } catch (error) {
    //     console.error('Ödeme geçmişi alınamadı:', error);
    //   }
    // };
    // fetchPayments();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>Ödeme Geçmişi</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Kullanıcı</TableCell>
            <TableCell>Miktar</TableCell>
            <TableCell>Para Birimi</TableCell>
            <TableCell>Durum</TableCell>
            <TableCell>Tarih</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment._id}>
              <TableCell>{payment.user}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{payment.currency}</TableCell>
              <TableCell>{payment.status}</TableCell>
              <TableCell>{new Date(payment.createdAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PaymentHistory;
