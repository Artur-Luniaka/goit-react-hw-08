import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoader = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, setFilter) =>
    contacts.filter((contact) =>
      setFilter
        ? contact.name.toLowerCase().includes(setFilter.toLowerCase())
        : true
    )
);
