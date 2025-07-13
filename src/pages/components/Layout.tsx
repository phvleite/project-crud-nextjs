import Titulo from "./Titulo";

interface LayoutProps {
    children?: React.ReactNode;
    titulo?: string;
};

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800 rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
