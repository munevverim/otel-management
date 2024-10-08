import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar bileşeni
import Sidebar from './components/Sidebar'; // Sidebar bileşeni
import Dashboard from './pages/Dashboard'; // Dashboard sayfası
import Reservations from './pages/Reservations'; // Rezervasyonlar sayfası
import Hotels from './pages/Hotels'; // Oteller sayfası
import Login from './pages/Login'; // Giriş sayfası
import PaymentHistory from './pages/PaymentHistory'; // Ödeme geçmişi sayfası
import MailSender from './pages/MailSender'; // Mail gönderme sayfası
import UserManagement from './pages/UserManagement'; // Kullanıcı Yönetimi sayfası

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Giriş sayfası */}
          <Route path="/login" element={<Login />} />

          {/* Giriş sonrası sayfalar */}
          <Route path="/dashboard" element={
            <>
              <Navbar />
              <div style={{ display: 'flex' }}>
                <Sidebar />
                <Dashboard />
              </div>
            </>
          } />

          <Route path="/reservations" element={
            <>
              <Navbar />
              <div style={{ display: 'flex' }}>
                <Sidebar />
                <Reservations />
              </div>
            </>
          } />

          <Route path="/hotels" element={
            <>
              <Navbar />
              <div style={{ display: 'flex' }}>
                <Sidebar />
                <Hotels />
              </div>
            </>
          } />

          {/* Ödeme geçmişi sayfası */}
          <Route path="/payment-history" element={
            <>
              <Navbar />
              <div style={{ display: 'flex' }}>
                <Sidebar />
                <PaymentHistory />
              </div>
            </>
          } />

          {/* Mail gönderme sayfası */}
          <Route path="/send-mail" element={
            <>
              <Navbar />
              <div style={{ display: 'flex' }}>
                <Sidebar />
                <MailSender />
              </div>
            </>
          } />

          {/* Kullanıcı Yönetimi sayfası */}
          <Route path="/user-management" element={
            <>
              <Navbar />
              <div style={{ display: 'flex' }}>
                <Sidebar />
                <UserManagement />
              </div>
            </>
          } />

          {/* Giriş yapılmamışsa login sayfasına yönlendirme */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
