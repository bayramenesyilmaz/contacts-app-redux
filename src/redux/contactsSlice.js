import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactsAdapter = createEntityAdapter()
const initialState = contactsAdapter.getInitialState()

export const contactsSelector = contactsAdapter.getSelectors((state) => state.contacts)

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState,
    reducers: {
        addContact: contactsAdapter.addOne,
        deleteContact: contactsAdapter.removeOne,
        deleteAllContacts: contactsAdapter.removeAll,
        updateContact: contactsAdapter.updateOne
    }
})

export const { addContact, deleteContact, deleteAllContacts, updateContact } = contactsSlice.actions;

export default contactsSlice.reducer