import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Cliente from "@/pages/core/Cliente";
import ClienteRepositorio from "@/pages/core/ClienteRepositorio";
import { useEffect, useMemo, useState } from "react";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
    const repo: ClienteRepositorio = useMemo(() => new ColecaoCliente(), []);

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm();

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const obterTodos = () => {
        repo.obterTodos().then(clientes => {
            setClientes(clientes.map(c => new Cliente(c.id ?? '', c.nome ?? '', c.idade ?? 0)));
            exibirTabela();
        });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(obterTodos, [repo]);

    const selecionarCliente = (cliente: Cliente) => {
        setCliente(cliente);
        exibirFormulario();
    };

    const excluirCliente = async (cliente: Cliente) => {
        await repo.excluir(cliente);
        obterTodos();
    };

    const novoCliente = () => {
        setCliente(Cliente.vazio());
        exibirFormulario();
    };

    const salvarCliente = async (cliente: { id?: string; nome?: string; idade?: number }) => {
        await repo.salvar(cliente);
        obterTodos();
        exibirTabela();
    };

    return {
        cliente,
        clientes,
        tabelaVisivel,
        obterTodos,
        selecionarCliente,
        excluirCliente,
        novoCliente,
        salvarCliente,
        exibirTabela
    };
}
