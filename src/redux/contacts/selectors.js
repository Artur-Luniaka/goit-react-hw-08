import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectDelModal = (state) => state.contacts.delModal;
export const selectEditModal = (state) => state.contacts.editModal;
export const selectEditForm = (state) => state.contacts.editForm;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, setFilter) =>
    contacts.filter((contact) =>
      setFilter
        ? contact.name.toLowerCase().includes(setFilter.toLowerCase())
        : true
    )
);
