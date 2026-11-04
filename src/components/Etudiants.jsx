import { use, useState } from "react";
import Etudiant from "./Etudiant";



function Etudiants() {

    const etuLIst = [
        { id: 1, filier: "devlopment digital", nom: "Ahmed" },
        { id: 2, filier: "ecommerce", nom: "Youssef" },
        { id: 3, filier: "infrustructure digital", nom: "Ali" }
    ]

    const [list, setList] = useState(etuLIst)
    const [index, setID] = useState(4)
    const [value, setValue] = useState("")
    const [action, setAction] = useState(null)
    const [searchValue, setsearchValue] = useState("")
    const [filier, setFilier] = useState("")


    const supprimer = (id) => {

        setList(
            list.filter((etu) => (etu.id !== id))
        )
    }
    const newEtu = { id: index, filier: filier, nom: value }


    const ajouter = () => {

        setList(
            [...list, newEtu]
        )
        setID(index + 1)
        setValue("")
        setFilier("ecommerce")
    }

    const saveIdModified = (id) => {

        const etu = list.find((etu) => etu.id === id)

        if (etu) {
            setAction(etu.id)
            setValue(etu.nom)
            setFilier(etu.filier)
        }
    }

    const modifier = () => {
        setList(
            list.map((etu) => (
                etu.id === action ? { ...etu, filier: filier, nom: value } : etu
            ))
        )
        setAction(null)
        setValue('')

    }

    const enregistre = () => {
        return action === null ? ajouter() : modifier()
    }

    const Search_list = list.filter((etu) => (
        etu.nom.toLowerCase().includes(searchValue.toLowerCase())))

    return <>
        <div className="container" >
            <div>
                <input onSubmit={(e) => { e.preventDefault() }} value={searchValue} onChange={(e) => { setsearchValue(e.target.value) }} type="text" style={{ background: "lightgreen" }} />
                <button onClick={() => { setList(Search_list) }} style={{ background: "green", cursor: "pointer", color: "white" }} >Search</button>
            </div>
            <table className="table table-primary w-50">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>filier</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                {
                    list.map((etu) => {
                        return <Etudiant key={etu.id} etud={etu} supp={supprimer} mod={saveIdModified} filier={etu.filier} />
                    })
                }

            </table>
            <form onClick={(e) => { e.preventDefault() }} className="mb-3 w-50 text-center">
                <label htmlFor="inputValue" className="form-label">Your Informations</label>
                <input style={{ background: "yellow" }} id="inputValue" onChange={(e) => { setValue(e.target.value) }} value={value} type="email" className="form-control" />
                <select value={filier} onChange={(e) => { setFilier(e.target.value) }}>
                    <option value="finance">finance</option>
                    <option value="economi">economi</option>
                    <option value="administrator">administrator</option>
                    <option value="infrustructure digital">infrustructure digital</option>
                    <option value="devlopment digital">devlopment digital</option>
                </select>
                <button style={{ background: "green", cursor: "pointer", color: "white" }} type="" onClick={enregistre} className="btn btn-warning mt-3 w-100">{action === null ? "Ajouter" : "Modifier"}</button>
            </form>
        </div>
    </>
}

export default Etudiants;