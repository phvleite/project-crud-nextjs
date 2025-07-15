import { useState } from "react";
import Entrada from "./Entrada";
import Botao from "./Botao";

interface FormularioProps {
    cliente: { id?: string; nome?: string; idade?: number };  
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
                <Botao cor='green'>
                    { id ? 'Alterar' : 'Salvar' }
                </Botao>
                <Botao cor='red'>Cancelar</Botao>
            </div>
        </div>
    );
};

export default Formulario;
