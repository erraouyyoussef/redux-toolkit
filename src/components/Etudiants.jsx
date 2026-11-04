import { use, useState } from "react";
import Etudiant from "./Etudiant";



function Etudiants() {

    const etuLIst = [
        { id: 1, nom: "Ahmed" },
        { id: 2, nom: "Youssef" },
        { id: 3, nom: "Ali" }
    ]
    const [list, setList] = useState(etuLIst)
    const [index, setID] = useState(4)
    const [value, setValue] = useState("")
    const [action, setAction] = useState(null)
    const [searchValue, setsearchValue] = useState("")


    const supprimer = (id) => {

        setList(
            list.filter((etu) => (etu.id !== id))
        )
    }
    const newEtu = { id: index, nom: value }


    const ajouter = () => {

        setList(
            [...list, newEtu]
        )
        setID(index + 1)
        setValue("")
    }

    const saveIdModified = (id) => {

        const etu = list.find((etu) => etu.id === id)

        if (etu) {
            setAction(etu.id)
            setValue(etu.nom)
        }
    }

    const modifier = () => {
        setList(
            list.map((etu) => (
                etu.id === action ? { ...etu, nom: value } : etu
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
                <input onSubmit={(e)=>{e.preventDefault()}} value={searchValue} onChange={(e) => { setsearchValue(e.target.value) }} type="text" style={{ background: "lightgreen" }} />
                <button onClick={()=>{setList(Search_list)}} style={{ background: "green", cursor: "pointer", color: "white" }} >Search</button>
            </div>
            <table className="table table-primary w-50">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                {
                    list.map((etu) => {
                        return <Etudiant key={etu.id} etud={etu} supp={supprimer} mod={saveIdModified} />
                    })
                }

            </table>
            <form onClick={(e) => { e.preventDefault() }} className="mb-3 w-50 text-center">
                {/* <label htmlFor="inputValue" className="form-label">Email address</label> */}
                <input id="inputValue" onChange={(e) => { setValue(e.target.value) }} value={value} type="email" className="form-control" />
                <button type="" onClick={enregistre} className="btn btn-warning mt-3 w-100">{action === null ? "Ajouter" : "Modifier"}</button>
            </form>
        </div>
    </>
}

export default Etudiants;