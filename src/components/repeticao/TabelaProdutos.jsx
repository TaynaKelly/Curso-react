import produtos from "../../data/produtos";
import "./TabelaProdutos.css"
const TabelaProdutos = (props) => {

    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id}
                    className={i % 2 === 0 ? "Par" : ""}>
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
                </tr>
            )
        })
    }

    return (
        <>
        <h2>Tabela Preços</h2>

            <div className="TabelaProdutos">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getLinhas()}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TabelaProdutos;