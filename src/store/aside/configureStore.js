import { configureStore } from "@reduxjs/toolkit"

import asideReducer from '../aside/asideSlice.js'
import sesionesSlice from "./sesiones/sesionesSlice.js"
import tareasSlice from "./tareas/tareasSlice.js"
import usuariosSlice from "./usuarios/usuariosSlice.js"

export const store = configureStore({
    reducer: {
        asideMenu: asideReducer,
        sesionSlice: sesionesSlice,
        tareasSlice: tareasSlice,
        usuariosSlice: usuariosSlice
    }
})