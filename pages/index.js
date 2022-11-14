import Link from "next/link";

function App() {
    return (
        <div className="main-container">
            <h1>Trabalho 2ª Etapa</h1>
            <h5 className="author pb-2">Acadêmico: Eliel Alves da Silva</h5>
            <h4 className="badge bg-primary fs-6">Next.js</h4>
            <div className="container mt-4">
                <div className="row">
                    <Link href="/componentes/SSR">
                        <div className="card shadow-lg col">
                            <div className="card-body">
                                <h4 className="badge bg-success">SSR</h4>
                                <h5 className="card-title fw-bold">Server Side Rendering</h5>
                                <p className="card-text">O servidor retorna o HTML juntamente com os dados (JSON) para serem renderizados na tela.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/componentes/CSR">
                        <div className="card shadow-lg col">
                            <div className="card-body">
                                <h4 className="badge bg-warning">CSR</h4>
                                <h5 className="card-title fw-bold">Cliente Side Rendering</h5>
                                <p className="card-text">O Next retorna a parte fixa da página em HTML e a parte dinâmica (recuperação de dados de uma API por exemplo) é realizada no lado do cliente.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/componentes/SSG">
                        <div className="card shadow-lg col">
                            <div className="card-body">
                                <h4 className="badge bg-danger">SSG</h4>
                                <h5 className="card-title fw-bold">Static Site Generation</h5>
                                <p className="card-text">O HTML é gerado no momento do BUILD, as requisições as APIs são realizadas no BUILD, feito para gerar páginas estáticas ou documentações.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/componentes/ISR">
                        <div className="card shadow-lg col">
                            <div className="card-body">
                                <h4 className="badge bg-primary">ISR</h4>
                                <h5 className="card-title fw-bold">Incremental Static ReGeneration</h5>
                                <p className="card-text">As requisições as APIs são realizadas novamente após um intervalo para gerar as páginas, sem ser somente no build.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default App;