import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Reserve from './pages/Reserve';
import AddCar from './pages/AddCar';
import CarDetails from './components/CarDetails'
import DeleteCar from './pages/DeleteCar';
import { getCookie } from './services/cookie';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';


const App = () => {
  const token = getCookie('token');

  return (
    <>
      <Sidebar />
      <Routes>
        <Route
          path="/login"
          element={token ? (
            <Navigate to="/" replace />
          ) : <Login />}
        />
        <Route
          path="/register"
          element={token ? (
            <Navigate to="/" replace />
          ) : <Register />}
        />
        <Route path="/" element={!token ? (
          <Navigate to="/login" replace />
        ) : <Home />} />
        <Route path="/reserve" element={!token ? (
          <Navigate to="/login" replace />
        ) : <Reserve />} />
        <Route path="/reservations" element={!token ? (
          <Navigate to="/login" replace />
        ) : <Reservations />} />
        <Route path="/add-a-car" element={!token ? (
          <Navigate to="/login" replace />
        ) : <AddCar />} />
         <Route path="/details/:carId" element={!token ? (
          <Navigate to="/login" replace />
        ) : <CarDetails />} />
        <Route path="/delete-a-car" element={!token ? (
          <Navigate to="/login" replace />
        ) : <DeleteCar />} />
      </Routes>
    </>
  )
};

export default App;
