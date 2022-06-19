import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contactSlice';
import filterReducer from './contacts/filterSlice';

const store = configureStore({
  reducer: { contacts: contactReducer, filter: filterReducer },
});

export default store;
