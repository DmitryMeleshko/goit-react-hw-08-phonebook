import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.auth.selectIsLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectLoading = state => state.isLoading;
export const selectError = state => state.contacts.error;

const getFilter = state => state.filter;
const getContacts = state => state.contacts.items;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (!contacts) return;
    return contacts.filter(item =>
      item.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }
);