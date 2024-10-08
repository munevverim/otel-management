import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken'); // authToken varsa oturum açılmıştır
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />; // Oturum yoksa login'e yönlendir
  }
  return children;
};

export default ProtectedRoute;
