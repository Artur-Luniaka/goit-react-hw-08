import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
  items: [],
  delModal: false,
  editModal: false,
  editForm: {
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
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.delModal = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
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
