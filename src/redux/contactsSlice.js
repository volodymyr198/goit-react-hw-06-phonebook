import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer: (state, action) => {
                if (
                    state.find(
                        contact =>
                            contact.name.toLowerCase() ===
                            action.payload.name.toLowerCase()
                    )
                ) {
                    alert(`${action.payload.name} is already in contacts`);
                    return;
                }
                // return [...state, action.payload];
                state.push(action.payload);
                console.log(action.payload);
            },
            prepare: ({ name, number }) => {
                const id = nanoid();
                return { payload: { id, name, number } };
            },
        },
        deleteContact(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
