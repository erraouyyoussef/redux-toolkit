
function Etudiant({ etud, supp, mod }) {


    return <>
        <tbody>
            <tr>
                <td>{etud.id}</td>
                <td>{etud.nom}</td>
                <td>{etud.filier}</td>
                <td colSpan={2}>
                    <button className="btn btn-danger me-3" onClick={() => { supp(etud.id) }} >Supprimer</button>
                    <button className="btn btn-primary" onClick={() => { mod(etud.id) }} >Modifier</button>
                </td>
            </tr>
        </tbody>
    </>
}

export default Etudiant;