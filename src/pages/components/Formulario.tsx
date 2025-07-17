import { useState } from "react";
import Entrada from "./Entrada";
import Botao from "./Botao";
import Cliente from "../core/Cliente";

interface FormularioProps {
    cliente: { id?: string; nome?: string; idade?: number };
    clienteMudou?: (cliente: { id?: string; nome?: string; idade?: number }) => void;
    cancelado?: () => void;
    salvo?: (cliente: Cliente) => void;
};

const Formulario = (props: FormularioProps) => {
    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome || '');
    const [idade, setIdade] = useState(props.cliente?.idade || 0);

    return (
        <div>
            {id ? <Entrada texto="Código" valor={id} somenteLeitura /> : false}
            <Entrada texto="Nome" valor={nome} textoMudou={setNome} />
            <Entrada texto='Idade' tipo="number" valor={idade} valorMudou={setIdade} />
            <div className="flex justify-end">
                <Botao  
                    cor='green'
                    onClick={() => props.clienteMudou?.(new Cliente(id, nome, +idade))}
                >
                    { id ? 'Alterar' : 'Salvar' }
                </Botao>
                <Botao cor='red' onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    );
};

export default Formulario;
