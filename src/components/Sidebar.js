import { NavLink } from 'react-router-dom';
import '../assets/sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <h1>Car valley</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Cars</NavLink>
        </li>
        <li>
          <NavLink to="/reserve">Reserve</NavLink>
        </li>
        <li>
          <NavLink to="/reservations">My Reservations</NavLink>
        </li>
        <li>
          <NavLink to="/add-a-car">Add car</NavLink>
        </li>
        <li>
          <NavLink to="/delete-a-car">delete car</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
