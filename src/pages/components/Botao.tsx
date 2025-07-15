interface BotaoProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    cor?: 'green' | 'blue' | 'gray' | 'red' | 'pink' | 'orange' | 'hot';
}

const cores = {
    green: 'bg-gradient-to-r from-green-400 to-green-700',
    blue: 'bg-gradient-to-r from-blue-400 to-blue-700',
    gray: 'bg-gradient-to-r from-gray-400 to-gray-700',
    red: 'bg-gradient-to-r from-red-400 to-red-700',
    pink: 'bg-gradient-to-r from-pink-400 to-pink-700',
    orange: 'bg-gradient-to-r from-orange-400 to-orange-700',
    hot: 'bg-gradient-to-r from-red-600 to-yellow-500',
};

const Botao = (props: BotaoProps) => {
    const cor = props.cor || 'gray';

    return (
        <button
            className={`
                ${cores[cor]}
                text-white font-bold rounded-md px-4 py-2 rounded-md ml-2
                ${props.className}
            `}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Botao;
