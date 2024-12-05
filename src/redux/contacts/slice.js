import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
  items: [],
  modal: false,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    activeModal: (state) => {
      state.modal = true;
    },
    diactiveModal: (state) => {
      state.modal = false;
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
        state.modal = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      });
  },
});
export default slice.reducer;
export const { activeModal, diactiveModal } = slice.actions;
