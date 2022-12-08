/* eslint-disable no-restricted-globals */
import { createAsyncThunk } from '@reduxjs/toolkit';

const TOGGLE_SIDEBAR = 'e2l-fe/navbar/TOGGLE_SIDEBAR';

const initialState = { show: true };

const sideBar = (state = initialState, action) => {
  switch (action.type) {
    case `${TOGGLE_SIDEBAR}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

const toggleSidebar = createAsyncThunk(TOGGLE_SIDEBAR, async (payload) => ({ show: payload }));

export default sideBar;
export {
  toggleSidebar,
};
