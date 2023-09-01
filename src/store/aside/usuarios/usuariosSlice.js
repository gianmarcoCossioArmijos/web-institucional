import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const usuariosSlice = createSlice({
    name: "usuario",
    initialState,
    reducers: {
        addNewUsuario: (state, action) => {
             
            const newUsers = action.payload;
            return newUsers;
        },
        cleanCurrentUser: (state) => {

            const newUsers = "";
            return newUsers;
        }
    }
})

export default usuariosSlice.reducer;
export const { addNewUsuario, cleanCurrentUser } = usuariosSlice.actions;