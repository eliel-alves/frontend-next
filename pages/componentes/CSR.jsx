import { useState , useEffect} from 'react';

function CSR() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3002/predios`)
            .then(response => response.json())
            .then(data => setLista(data))
            .catch(err => console.log('Erro: ' + err))
    }, []);

    return (
        <div className="box">
            <h2>Prédios do Instituto</h2>
            <h4 className="badge bg-warning">CSR</h4>
            <table className="table mt-4">
                <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Sigla</th>
                </tr>
                </thead>
                <tbody>
                {lista.map(objeto => (
                    <tr key={objeto.codigo}>
                        <td>{objeto.codigo}</td>
                        <td>{objeto.nome}</td>
                        <td>{objeto.descricao}</td>
                        <td>{objeto.sigla}</td>
                    </tr>
                ))}
                </tbody>
            </table>


        </div>
    )
}

export default CSR;