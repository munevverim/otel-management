import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import './MailSender.css'; // Stil dosyası

const MailSender = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Mail gönderme işlemi (statik)
  const handleSendMail = () => {
    // Eğer tüm alanlar doluysa, başarılı mesaj göster, değilse hata göster
    if (email && subject && message) {
      setSuccess(true);  // Başarılı mesajı göster
      setError('');  // Hata mesajını temizle
    } else {
      setSuccess(false);  // Başarılı mesajı gizle
      setError('Tüm alanlar doldurulmalıdır.');  // Hata mesajını göster
    }
  };

  return (
    <div className="mail-sender-container">
      <Paper className="mail-form" elevation={3}>
        <Typography variant="h5" gutterBottom>
          Mail Gönderme
        </Typography>

        {/* Başarı mesajı */}
        {success && <Typography color="primary">Mail başarıyla gönderildi (Statik)!</Typography>}

        {/* Hata mesajı */}
        {error && <Typography color="error">{error}</Typography>}

        <TextField
          label="Alıcı Mail Adresi"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Konu"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Mesaj"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          multiline
          rows={6}
          margin="normal"
        />

        <Button variant="contained" color="primary" onClick={handleSendMail}>
          Gönder
        </Button>
      </Paper>
    </div>
  );
};

export default MailSender;
