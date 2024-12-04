import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, setFilter) =>
    contacts.filter((contact) =>
      setFilter
        ? contact.name.toLowerCase().includes(setFilter.toLowerCase())
        : true
    )
);
