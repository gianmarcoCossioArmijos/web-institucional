import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const sesionesSlice = createSlice({
    name: "sesiones",
    initialState,
    reducers: {
        addNewSesion: (state, action) => {
             
            const newSesion = action.payload;
            return newSesion;
        },
        deleteCurrentSesion: (state) => {
             
            return [];
        },
    }
})

export default sesionesSlice.reducer;
export const { addNewSesion } = sesionesSlice.actions;