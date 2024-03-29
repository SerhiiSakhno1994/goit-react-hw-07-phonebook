import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64876ecdbeba62972790a3f2.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'getContacts',
  async (userId, thunkAPI) => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const delContact = createAsyncThunk(
  'delContact',
  async (contactId, thunkAPI) => {
    const { data } = await axios.delete('/contacts/' + contactId);
    return data;
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (contact, thunkAPI) => {
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);
