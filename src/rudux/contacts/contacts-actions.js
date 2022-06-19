import { createAction } from '@reduxjs/toolkit';

export const setFilterValue = createAction('phonebook/filter');

export const addContact = createAction('phonebook/AddContact');

export const delContact = createAction('phonebook/DelContact');
