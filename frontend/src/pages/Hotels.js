import React, { useState } from 'react';
import { Grid, TextField, Button, Select, MenuItem, InputLabel, FormControl, Paper, Typography, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // + Simgesi için
import './Hotels.css'; // Stil dosyasını ekliyoruz

const Hotels = () => {
  const [hotelData, setHotelData] = useState({
    name: '',
    address: '',
    location: '',
    type: '',
    email: '',
    sublayer: '',
    note: ''
  });

  const [hotels, setHotels] = useState([]);
  const [showBoardTypes, setShowBoardTypes] = useState(false); // Oda formunu gösterip gizlemek için state
  const [showRoomForm, setShowRoomForm] = useState(false); // Yeni oda formunu göstermek için state
  const [rooms, setRooms] = useState([]); // Oda bilgilerini tutmak için state

  const hotelTypes = ['Butik', 'Apartman', '1 Yıldız', '2 Yıldız', '3 Yıldız', '4 Yıldız', '5 Yıldız'];
  const sublayers = ['Acenta 1', 'Acenta 2', 'Acenta 3'];

  const boardTypes = Array.from({ length: 15 }, (_, index) => `Type ${index + 1}`); // Type 1'den Type 15'e kadar

  const [selectedBoardTypes, setSelectedBoardTypes] = useState([]); // Seçilen board type'lar

  // Otel ekleme fonksiyonu
  const handleAddHotel = () => {
    if (hotelData.name && hotelData.address && hotelData.location && hotelData.type && hotelData.email && hotelData.sublayer) {
      setHotels([...hotels, hotelData]);
      setShowBoardTypes(true); // Oda formuna geçiş
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  // Board type seçimi fonksiyonu
  const handleBoardTypeChange = (type) => {
    setSelectedBoardTypes(prev =>
      prev.includes(type) ? prev.filter(item => item !== type) : [...prev, type]
    );
  };

  // Board Types formunu tamamla ve Oda formuna geç
  const handleContinueToRooms = () => {
    if (selectedBoardTypes.length > 0) {
      setShowRoomForm(true); // Oda formuna geçiş
    } else {
      alert("Lütfen en az bir board type seçin.");
    }
  };

  // Yeni oda ekleme fonksiyonu
  const handleAddRoom = () => {
    setRooms([...rooms, { adultMin: 1, adultMax: 2, childMin: 0, childMax: 2, total: 4 }]); // Oda bilgilerini ekliyoruz
  };

  return (
    <div className="hotels-container">
      {!showBoardTypes && !showRoomForm ? (
        <>
          <Typography variant="h4" gutterBottom>Otel Ekle</Typography>
          {/* Otel Ekleme Formu */}
          <Paper elevation={3} className="form-container">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField 
                  label="Otel Adı" 
                  fullWidth 
                  value={hotelData.name} 
                  onChange={(e) => setHotelData({ ...hotelData, name: e.target.value })} 
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  label="Adres" 
                  fullWidth 
                  value={hotelData.address} 
                  onChange={(e) => setHotelData({ ...hotelData, address: e.target.value })} 
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  label="Konum" 
                  fullWidth 
                  value={hotelData.location} 
                  onChange={(e) => setHotelData({ ...hotelData, location: e.target.value })} 
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Otel Türü</InputLabel>
                  <Select
                    value={hotelData.type}
                    onChange={(e) => setHotelData({ ...hotelData, type: e.target.value })}
                  >
                    {hotelTypes.map((type, index) => (
                      <MenuItem key={index} value={type}>{type}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  label="Rezervasyon Mail Adresi" 
                  fullWidth 
                  value={hotelData.email} 
                  onChange={(e) => setHotelData({ ...hotelData, email: e.target.value })} 
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Acenta</InputLabel>
                  <Select
                    value={hotelData.sublayer}
                    onChange={(e) => setHotelData({ ...hotelData, sublayer: e.target.value })}
                  >
                    {sublayers.map((sublayer, index) => (
                      <MenuItem key={index} value={sublayer}>{sublayer}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  label="Otel Notu" 
                  fullWidth 
                  multiline 
                  rows={4} 
                  value={hotelData.note} 
                  onChange={(e) => setHotelData({ ...hotelData, note: e.target.value })} 
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={handleAddHotel}>
                  Devam Et
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </>
      ) : !showRoomForm ? (
        <>
          <Typography variant="h4" gutterBottom>Board Types</Typography>
          {/* Board Type Seçim Formu */}
          <Paper elevation={3} className="form-container">
            <Grid container spacing={3}>
              {boardTypes.map((type, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox 
                        checked={selectedBoardTypes.includes(type)} 
                        onChange={() => handleBoardTypeChange(type)} 
                      />
                    }
                    label={type}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth onClick={handleContinueToRooms}>
                Devam Et
              </Button>
            </Grid>
          </Paper>
        </>
      ) : (
        <>
          <div className="room-header">
            <IconButton color="primary" onClick={handleAddRoom}>
              <AddIcon />
            </IconButton>
            <Typography variant="h5" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              Yeni Oda
            </Typography>
          </div>
          <Paper elevation={3} className="form-container">
            {/* Oda Bilgisi Formu */}
            {rooms.map((room, index) => (
              <Grid container spacing={3} key={index}>
                <Grid item xs={6} md={2}>
                  <TextField
                    label="Adult Min"
                    type="number"
                    fullWidth
                    value={room.adultMin}
                    onChange={(e) => {
                      const updatedRooms = [...rooms];
                      updatedRooms[index].adultMin = e.target.value;
                      setRooms(updatedRooms);
                    }}
                  />
                </Grid>
                <Grid item xs={6} md={2}>
                  <TextField
                    label="Adult Max"
                    type="number"
                    fullWidth
                    value={room.adultMax}
                    onChange={(e) => {
                      const updatedRooms = [...rooms];
                      updatedRooms[index].adultMax = e.target.value;
                      setRooms(updatedRooms);
                    }}
                  />
                </Grid>
                <Grid item xs={6} md={2}>
                  <TextField
                    label="Child Min"
                    type="number"
                    fullWidth
                    value={room.childMin}
                    onChange={(e) => {
                      const updatedRooms = [...rooms];
                      updatedRooms[index].childMin = e.target.value;
                      setRooms(updatedRooms);
                    }}
                  />
                </Grid>
                <Grid item xs={6} md={2}>
                  <TextField
                    label="Child Max"
                    type="number"
                    fullWidth
                    value={room.childMax}
                    onChange={(e) => {
                      const updatedRooms = [...rooms];
                      updatedRooms[index].childMax = e.target.value;
                      const total = parseInt(updatedRooms[index].adultMax || 0) + parseInt(updatedRooms[index].childMax || 0);
                      updatedRooms[index].total = total;
                      setRooms(updatedRooms);
                    }}
                  />
                </Grid>
                <Grid item xs={6} md={2}>
                  <TextField
                    label="Total"
                    type="number"
                    fullWidth
                    value={room.total}
                    onChange={(e) => {
                      const updatedRooms = [...rooms];
                      updatedRooms[index].total = e.target.value;
                      setRooms(updatedRooms);
                    }}
                  />
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12} style={{ marginTop: '20px' }}>
              <Button variant="contained" color="primary" fullWidth>
                Devam Et
              </Button>
            </Grid>
          </Paper>
        </>
      )}
    </div>
  );
};

export default Hotels;
