import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const asideSlice = createSlice({
    name: "aside",
    initialState,
    reducers: {
        showAsideMenu: (state) => {
             
            const menu = "menu";
            return menu;
        },
        hideAsideMenu : (state) => {

            const menu = "";
            return menu;
        }
    }
})

export default asideSlice.reducer;
export const { showAsideMenu, hideAsideMenu } = asideSlice.actions;