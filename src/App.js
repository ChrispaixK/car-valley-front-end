import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Reserve from './pages/Reserve';
import AddCar from './pages/AddCar';
import DeleteCar from './pages/DeleteCar';
import CarDetails from './components/CarDetails';

const App = () => (
  <>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reserve" element={<Reserve />} />
      <Route path="/id" element={<CarDetails />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/add-a-car" element={<AddCar />} />
      <Route path="/delete-a-car" element={<DeleteCar />} />
    </Routes>
  </>
);

export default App;
