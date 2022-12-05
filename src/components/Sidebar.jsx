/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/sidebar.css';
import {
  FaCar, FaBookmark, FaBook, FaPlus, FaTrashAlt, FaAlignLeft, FaTimes, FaFacebook, FaTwitter, FaGithub, FaPinterest, FaGooglePlus,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { toggleSidebar } from '../redux/xers/ui';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const show = useSelector((state) => state.sidebar.show);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 469) {
      dispatch(toggleSidebar(true));
    } else {
      dispatch(toggleSidebar(false));
    }
  });

  return show ? (
    <div>
      <div className="sidebar">

        <div className={classNames('close-icon', 'hidden')}>
          <i onClick={() => {
            dispatch(toggleSidebar(false));
          }}
          >
            <FaTimes />

          </i>
        </div>
        <div className="logo">
          <img src="https://i.postimg.cc/50ZC9xz3/car-valley-removebg-preview.png" alt="logo" />
        </div>
        <nav>
          <ul onClick={handleOpen}>
            <li>
              <NavLink to="/" className="nav-links">
                <i><FaCar /></i>
                <p>Car</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/reserve" className="nav-links">
                <i><FaBookmark /></i>
                <p>Reserve</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservations" className="nav-links">
                <i><FaBook /></i>
                <p>My Reservations</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-a-car" className="nav-links">
                <i><FaPlus /></i>
                <p>Add car</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/delete-a-car" className="nav-links">
                <i><FaTrashAlt /></i>
                <p>delete car</p>
              </NavLink>
            </li>
          </ul>
          <div className="social">
            <ul>
              <li><FaFacebook /></li>
              <li><FaTwitter /></li>
              <li><FaGithub /></li>
              <li><FaPinterest /></li>
              <li><FaGooglePlus /></li>
            </ul>
          </div>
          <footer>
            <p>Made with ❤️ by car-valley</p>
          </footer>
        </nav>
      </div>
    </div>
  ) : (
    <div className="open-icon">
      <i onClick={() => dispatch(toggleSidebar(true))}><FaAlignLeft /></i>
    </div>

  );
};

export default Sidebar;
