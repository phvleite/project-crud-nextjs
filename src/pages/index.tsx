import Layout from "./components/Layout";
import Tabela from "./components/Tabela";
import Cliente from "./core/Cliente";

export default function Home() {

    const clienteSelecionado = (cliente: Cliente) => {
        console.log(`Editar: ${cliente.nome}`);
    };

    const clienteExcluido = (cliente: Cliente) => {
        console.log(`Excluir: ${cliente.nome}`);
    };

    const clientes = [
        new Cliente('1', 'João Alencar Furtado', 20),
        new Cliente('2', 'Maria Setembrina de Oliveira', 35),
        new Cliente('3', 'Pedro Patriota', 24),
        new Cliente('4', 'Lauro Rigotto', 38),
        new Cliente('5', 'Claudio Montenegro', 42),
        new Cliente('6', 'Breno Faria Santos', 58),
        new Cliente('7', 'Gilberto Felipe Santos', 18),
        new Cliente('8', 'Helena Claudia Bezerra', 25),
        new Cliente('9', 'Roberta Maria e Silva', 33),
        new Cliente('10', 'Ricardo Sobrinho Lafaiete', 26),
    ];

    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-purple-500 text-white
        `}>
            <Layout titulo="Cadastro Simples">
                <Tabela
                    clientes={clientes}
                    clienteSelecionado={clienteSelecionado}
                    clienteExcluido={clienteExcluido}
                />
            </Layout>
        </div>
    );
}
