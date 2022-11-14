function SSR({ predios }) {

    return (
        <div className="box">
            <h2>Prédios do Instituto</h2>
            <h4 className="badge bg-success">SSR</h4>
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
                {predios.map(objeto => (
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

export default SSR;

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predios`);
    const predios = await res.json();
    return {
        props: {
            predios
        }
    }
}