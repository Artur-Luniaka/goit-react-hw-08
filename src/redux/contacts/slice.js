import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  delModal: false,
  editModal: false,
  editForm: {
    id: null,
    name: null,
    number: null,
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    activeModal: (state) => {
      state.delModal = true;
    },
    diactiveModal: (state) => {
      state.delModal = false;
    },
    activeEditModal: (state) => {
      state.editModal = true;
    },
    diactiveEditModal: (state) => {
      state.editModal = false;
      state.editForm.name = null;
      state.editForm.number = null;
    },
    getContactData: (state, action) => {
      state.editForm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.delModal = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const updatedContact = action.payload;
        const index = state.items.findIndex(
          (contact) => contact.id === updatedContact.id
        );
        if (index !== -1) {
          state.items[index] = updatedContact;
        }
        state.editModal = false;
      });
  },
});
export default slice.reducer;
export const {
  activeModal,
  diactiveModal,
  activeEditModal,
  diactiveEditModal,
  getContactData,
} = slice.actions;
