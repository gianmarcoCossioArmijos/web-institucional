import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const usuarioFirebaseSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        editUsuario: (state, action) => {
             
            const newUser = action.payload;
            return newUser;
        }
    }
})

export default usuarioFirebaseSlice.reducer;
export const { editUsuario } = usuarioFirebaseSlice.actions;