import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
    clientes: Cliente[];
    clienteSelecionado?: (Cliente: Cliente) => void;
    clienteExcluido?: (Cliente: Cliente) => void;
}

const Tabela = (props: TabelaProps) => {

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido;

    const renderizarCabecalho = () => {
        return (
            <tr>
                <th className="text-left p-4">ID</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes  ? <th className="p-4">Ações</th> : false }
            </tr>
        );
    };

    const renderizaAcoes = (cliente: Cliente) => {
        return (
            <td className="flex align-center justify-center">
                {props.clienteSelecionado ? (
                    <button
                        className={`
                            flex justify-center items-center
                            text-green-600 rounded-full p-2 m-1
                            hover:bg-purple-50 hover:text-purple-800 hover:shadow-lg
                        `}
                        onClick={() => props.clienteSelecionado?.(cliente)}
                    >
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button
                        className={`
                            flex justify-center items-center
                            text-red-600 rounded-full p-2 m-1
                            hover:bg-purple-50 hover:text-purple-800 hover:shadow-lg
                        `}
                        onClick={() => props.clienteExcluido?.(cliente)}
                    >
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        );
    };

    const renderizarDados = () => {
        return props.clientes?.map((cliente, ind) => (
            <tr key={`${cliente.id}-${ind}`}
                className={`${ind % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
            >
                <td className="text-left p-4">{cliente.id}</td>
                <td className="text-left p-4">{cliente.nome}</td>
                <td className="text-left p-4">{cliente.idade}</td>
                {exibirAcoes ? renderizaAcoes(cliente) : false}
            </tr>
        ));
    };

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100 text-sm
                font-bold    
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
};

export default Tabela;
