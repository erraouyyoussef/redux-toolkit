import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    students: []
}

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload)
        },
        updateStudent: (state, action) => {
            const student = state.students.find(s => s.id === action.payload.id)
            if (student) {
                student.name = action.payload.name
                student.age = action.payload.age
                student.city = action.payload.city
            }
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(s => s.id !== action.payload)
        }
    }
})

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions

export default studentSlice.reducer
