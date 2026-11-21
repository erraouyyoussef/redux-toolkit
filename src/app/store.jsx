import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice";
import crudReducer from "../features/student/studentSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        student: crudReducer
    }
})