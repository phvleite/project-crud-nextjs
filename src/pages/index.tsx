import Botao from "./components/Botao";
import Formulario from "./components/Formulario";
import Layout from "./components/Layout";
import Tabela from "./components/Tabela";
import useClientes from "@/hooks/useClientes";

export default function Home() {

    const {
        tabelaVisivel,
        cliente,
        clientes,
        selecionarCliente,
        excluirCliente,
        novoCliente,
        salvarCliente,
        exibirTabela,
    } = useClientes();

    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-purple-500 text-white
        `}>
            <Layout titulo="Cadastro Simples">
                <div className="overflow-auto max-h-[60vh] w-full">
                    {tabelaVisivel ? (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h1 className="text-2xl font-bold mb-4">Qtde Clientes: {clientes.length}</h1>
                                </div>
                                <Botao
                                    className="mb-4"
                                    onClick={novoCliente}
                                    cor="blue"
                                >
                                    Novo Cliente
                                </Botao>
                            </div>
                            <Tabela
                                clientes={clientes}
                                clienteSelecionado={selecionarCliente}
                                clienteExcluido={excluirCliente}
                            />
                        </>
                    ) : (
                        <Formulario
                            cliente={cliente}
                            cancelado={exibirTabela}
                            clienteMudou={salvarCliente}
                            salvo={salvarCliente}
                        />
                    )}
                </div>
            </Layout>
        </div>
    );
}
