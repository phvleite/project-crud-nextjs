import { useEffect, useMemo, useState } from "react";
import Botao from "./components/Botao";
import Formulario from "./components/Formulario";
import Layout from "./components/Layout";
import Tabela from "./components/Tabela";
import Cliente from "./core/Cliente";
import ClienteRepositorio from "./core/ClienteRepositorio";
import ColecaoCliente from "@/backend/db/ColecaoCliente";

export default function Home() {

    const repo: ClienteRepositorio = useMemo(() => new ColecaoCliente(), []);

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const obterTodos = () => {
        repo.obterTodos().then(clientes => {
            setClientes(clientes.map(c => new Cliente(c.id ?? '', c.nome ?? '', c.idade ?? 0)));
            setVisivel('tabela');
        });
    };
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(obterTodos, []);

    const clienteSelecionado = (cliente: Cliente) => {
        setCliente(cliente);
        setVisivel('form');
    };

    const clienteExcluido = async (cliente: Cliente) => {
        await repo.excluir(cliente);
        obterTodos();
    };

    const novoCliente = () => {
        setCliente(Cliente.vazio());
        setVisivel('form');
    };

    const salvarCliente = async (cliente: { id?: string; nome?: string; idade?: number }) => {
        await repo.salvar(cliente);
        obterTodos();
        setVisivel('tabela');
    };

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
