import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const tareasSlice = createSlice({
    name: "tareas",
    initialState,
    reducers: {
        addNewTarea: (state, action) => {
             
            const newSesion = action.payload;
            return newSesion;
        }
    }
})

export default tareasSlice.reducer;
export const { addNewTarea } = tareasSlice.actions;