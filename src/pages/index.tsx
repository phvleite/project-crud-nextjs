import { useState } from "react";
import Botao from "./components/Botao";
import Formulario from "./components/Formulario";
import Layout from "./components/Layout";
import Tabela from "./components/Tabela";
import Cliente from "./core/Cliente";

export default function Home() {

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());

    const clienteSelecionado = (cliente: Cliente) => {
        setCliente(cliente);
        setVisivel('form');
    };

    const clienteExcluido = (cliente: Cliente) => {
        console.log(`Excluir: ${cliente.nome}`);
    };

    const novoCliente = () => {
        setCliente(Cliente.vazio());
        setVisivel('form');
    };

    const salvarCliente = (cliente: { id?: string; nome?: string; idade?: number }) => {
        console.log(`Salvar: ${cliente.nome}`);
        setVisivel('tabela');
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
                {visivel === 'tabela' ? (
                    <>
                        <div className="flex justify-end">
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
                            clienteSelecionado={clienteSelecionado}
                            clienteExcluido={clienteExcluido}
                        />
                    </>
                ) : (
                    <Formulario
                        cliente={cliente}
                        cancelado={() => setVisivel('tabela')}
                        clienteMudou={salvarCliente}
                        salvo={salvarCliente}
                    />
                )}
            </Layout>
        </div>
    );
}
