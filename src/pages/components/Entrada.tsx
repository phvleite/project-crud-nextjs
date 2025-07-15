import { SetStateAction } from "react";

interface EntradaProps {
    texto: string;
    tipo?: 'text' | 'number';
    valor?: string | number;
    somenteLeitura?: boolean;
    valorMudou?: (valor: SetStateAction<number>) => void;
    textoMudou?: (texto: SetStateAction<string>) => void;
};

const Entrada = (props: EntradaProps) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2">{props.texto}</label>
            <input
                type={props.tipo || 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none focus:border-purple-800
                    bg-gray-100 px-4 py-4
                `}
                onChange={e => {
                    if (props.tipo === 'number') {
                        props.valorMudou?.(+e.target.value);
                    } else {
                        props.textoMudou?.(e.target.value);
                    }
                }}
            />
        </div>
    );
};

export default Entrada;
