import { useSelector, useDispatch } from "react-redux";
import { addStudent, updateStudent, deleteStudent } from "./features/student/studentSlice";
import { useState } from "react";

function App() {

    const [button, setButton] = useState(null)
    const student = useSelector(
        (state) => state.student.students
    )

    const dispatch = useDispatch()

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')


    const inputValues = {
        id: id,
        name: name,
        age: age,
        city: city
    }

    const handleAddStudent = () => {

        if (!name || !age || !city) {
            return alert('fill fields firs')
        }

        dispatch(addStudent(inputValues))
        setName("")
        setAge("")
        setCity("")
        setId(prev => prev += 1)



    }

    const handleDeleteStudent = (id) => {
        dispatch(deleteStudent(id))
    }

    const handleUpdating = (id) => {
        const s = student.find((s) => {
            return s.id === id
        })

        if (s) {
            setId(s.id)
            setName(s.name)
            setAge(s.age)
            setCity(s.city)
        }

        setButton('Update Student')

    }

    const handleUpdateStudent = () => {
        const newInputsValues = {
            id: id,
            name: name,
            age: age,
            city: city
        }
        dispatch(updateStudent(newInputsValues))

        setName('')
        setAge('')
        setCity('')

    }

    const saveChanges = (e) => {
        e.preventDefault()
        button === null ? handleAddStudent() : handleUpdateStudent();
        setButton(null)
    }


    return <>
        <div className="container">
            <table className="table table-primary text-center">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>city</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((s, index) => (
                        < tr key={index} >
                            <td>{s.id + 1}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.city}</td>
                            <td>
                                <button className="btn btn-danger me-2 btn-sm " onClick={() => handleDeleteStudent(s.id)}>supprimer</button>
                                <button className="btn btn-primary btn-sm " onClick={() => handleUpdating(s.id)}>modifier</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <form className="bg-secondary p-4 rounded-4 w-100">
                <div className="mb-3">
                    <label htmlFor="name" className="mb-2 label-control fw-bold">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" className="mb3 form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="mb-2 label-control fw-bold">Age</label>
                    <input value={age} onChange={(e) => setAge(e.target.value)} id="age" type="text" className="mb3 form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="mb-2 label-control fw-bold">City</label>
                    <input value={city} onChange={(e) => setCity(e.target.value)} id="city" type="text" className="mb3 form-control" />
                </div>

                <button button="submit" className="btn btn-primary w-100" onClick={saveChanges}>
                    {button === null ? 'Add Student' : 'Update Student'}
                </button>
            </form>


        </div >


    </>
}
export default App;